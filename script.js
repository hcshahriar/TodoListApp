// ============================================
// TODOLISTAPP - Main JavaScript
// ============================================

class TodoListApp {
    constructor() {
        // DOM Elements
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.deleteAllBtn = document.getElementById('deleteAllBtn');
        this.totalTasksSpan = document.getElementById('totalTasks');
        this.completedTasksSpan = document.getElementById('completedTasks');
        this.remainingTasksSpan = document.getElementById('remainingTasks');
        this.toast = document.getElementById('toast');

        // Data
        this.tasks = [];
        this.currentFilter = 'all';
        this.storageKey = 'todoListAppTasks';

        // Initialize
        this.init();
    }

    /**
     * Initialize the app
     */
    init() {
        this.loadTasks();
        this.attachEventListeners();
        this.render();
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Add task
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.closest('.filter-btn')));
        });

        // Action buttons
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.deleteAllBtn.addEventListener('click', () => this.deleteAll());
    }

    /**
     * Add a new task
     */
    addTask() {
        const taskText = this.taskInput.value.trim();

        if (!taskText) {
            this.showToast('Please enter a task', 'error');
            return;
        }

        if (taskText.length > 100) {
            this.showToast('Task is too long (max 100 characters)', 'error');
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            priority: 'medium',
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task);
        this.taskInput.value = '';
        this.taskInput.focus();
        this.saveTasks();
        this.render();
        this.showToast('Task added successfully', 'success');
    }

    /**
     * Delete a task
     */
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
        this.showToast('Task deleted', 'success');
    }

    /**
     * Toggle task completion
     */
    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }

    /**
     * Clear completed tasks
     */
    clearCompleted() {
        const completedCount = this.tasks.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showToast('No completed tasks to clear', 'error');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
            this.render();
            this.showToast(`${completedCount} task(s) deleted`, 'success');
        }
    }

    /**
     * Delete all tasks
     */
    deleteAll() {
        if (this.tasks.length === 0) {
            this.showToast('No tasks to delete', 'error');
            return;
        }

        if (confirm(`Delete all ${this.tasks.length} task(s)? This cannot be undone.`)) {
            this.tasks = [];
            this.saveTasks();
            this.render();
            this.showToast('All tasks deleted', 'success');
        }
    }

    /**
     * Set filter
     */
    setFilter(btn) {
        // Update active button
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update filter
        this.currentFilter = btn.dataset.filter;
        this.render();
    }

    /**
     * Get filtered tasks
     */
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    /**
     * Update statistics
     */
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const remaining = total - completed;

        this.totalTasksSpan.textContent = total;
        this.completedTasksSpan.textContent = completed;
        this.remainingTasksSpan.textContent = remaining;
    }

    /**
     * Render tasks
     */
    render() {
        const filteredTasks = this.getFilteredTasks();
        this.taskList.innerHTML = '';

        if (filteredTasks.length === 0) {
            this.emptyState.classList.add('show');
            this.taskList.style.display = 'none';
        } else {
            this.emptyState.classList.remove('show');
            this.taskList.style.display = 'block';

            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${task.completed ? 'checked' : ''}
                        data-id="${task.id}"
                    >
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <span class="task-priority priority-${task.priority}">${task.priority}</span>
                    <div class="task-actions">
                        <button class="task-btn edit" data-id="${task.id}" title="Edit task">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="task-btn delete" data-id="${task.id}" title="Delete task">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;

                // Add checkbox listener
                li.querySelector('.task-checkbox').addEventListener('change', () => {
                    this.toggleComplete(task.id);
                });

                // Add delete listener
                li.querySelector('.task-btn.delete').addEventListener('click', () => {
                    this.deleteTask(task.id);
                });

                // Add edit listener
                li.querySelector('.task-btn.edit').addEventListener('click', () => {
                    this.editTask(task.id);
                });

                this.taskList.appendChild(li);
            });
        }

        this.updateStats();
    }

    /**
     * Edit task
     */
    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        const newText = prompt('Edit task:', task.text);
        if (newText !== null) {
            const trimmedText = newText.trim();
            if (!trimmedText) {
                this.showToast('Task cannot be empty', 'error');
                return;
            }
            if (trimmedText.length > 100) {
                this.showToast('Task is too long (max 100 characters)', 'error');
                return;
            }
            task.text = trimmedText;
            this.saveTasks();
            this.render();
            this.showToast('Task updated successfully', 'success');
        }
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'success') {
        this.toast.textContent = message;
        this.toast.className = `toast ${type} show`;

        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Save tasks to local storage
     */
    saveTasks() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Error saving tasks:', error);
            this.showToast('Error saving tasks', 'error');
        }
    }

    /**
     * Load tasks from local storage
     */
    loadTasks() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            this.tasks = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading tasks:', error);
            this.tasks = [];
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoListApp();
});