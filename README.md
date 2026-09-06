# TodoListApp

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

**A Professional To-Do List Application with Local Storage Functionality**

### 🎯 [Live Demo](https://hcshahriar.github.io/TodoListApp/) • [Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-documentation) • [Contributing](#-contributing)

### ⭐ Try the Live Demo Now:
### 👉 [https://hcshahriar.github.io/TodoListApp/](https://hcshahriar.github.io/TodoListApp/)

</div>

---

## 📋 Table of Contents

- [Demo](#-live-demo)
- [Overview](#overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Local Storage](#-local-storage)
- [API Reference](#-api-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌐 Live Demo

Experience the TodoListApp in action! Click the link below to access the fully functional, hosted application:

### **[🚀 Open Live Demo - https://hcshahriar.github.io/TodoListApp/](https://hcshahriar.github.io/TodoListApp/)**

The demo includes all features:
- ✅ Add, edit, delete tasks
- ✅ Mark tasks as complete
- ✅ Filter tasks (All, Active, Completed)
- ✅ View task statistics
- ✅ Automatic local storage persistence
- ✅ Responsive design for all devices

---

## Overview

**TodoListApp** is a modern, feature-rich to-do list application built with vanilla HTML, CSS, and JavaScript. It provides a professional interface for managing daily tasks with automatic local storage persistence.

Key highlights:
- ✅ **Zero Dependencies** - Pure vanilla JavaScript
- ✅ **Local Storage** - Tasks persist across browser sessions
- ✅ **Responsive Design** - Works seamlessly on all devices
- ✅ **Professional UI** - Modern, clean interface with animations
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete tasks
- ✅ **Smart Filtering** - View all, active, or completed tasks
- ✅ **Real-time Stats** - Track task statistics
- ✅ **Live Demo** - Fully hosted and ready to use

---

## 🚀 Features

### Core Features
- **Add Tasks** - Create new tasks with a single click
- **Complete Tasks** - Mark tasks as done with checkboxes
- **Edit Tasks** - Update task text inline
- **Delete Tasks** - Remove individual tasks or all tasks
- **Filter Tasks** - View all, active, or completed tasks
- **Task Statistics** - Track total, completed, and remaining tasks
- **Local Storage** - Automatic persistence without backend

### Advanced Features
- **Priority Levels** - Assign priorities (High, Medium, Low)
- **Task Validation** - Input validation for task creation
- **XSS Protection** - HTML escaping to prevent security issues
- **Toast Notifications** - User feedback for all actions
- **Responsive Design** - Mobile, tablet, and desktop support
- **Smooth Animations** - Enhanced user experience
- **Keyboard Support** - Press Enter to add tasks

---

## 🛠️ Technology Stack

| Component | Technology | Details |
|-----------|-----------|----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) | Vanilla implementation |
| **Storage** | Browser LocalStorage | Persistent data |
| **Icons** | Font Awesome 6 | Beautiful icons |
| **Design** | CSS Grid, Flexbox | Modern layout |
| **Hosting** | GitHub Pages | Live deployment |
| **Version Control** | Git | Project management |

---

## 🚀 Getting Started

### Option 1: Use Live Demo (Recommended)
Simply visit: **[https://hcshahriar.github.io/TodoListApp/](https://hcshahriar.github.io/TodoListApp/)**

No installation required! Start managing tasks immediately.

### Option 2: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/hcshahriar/TodoListApp.git
cd TodoListApp

# Open in your browser
# You can use any of these methods:
# - Double-click index.html
# - Use VS Code Live Server
# - Use Python: python -m http.server 8000
# - Use Node: npx http-server
```

### Option 3: Download Files

1. Download all files from the repository
2. Save them in a folder
3. Open `index.html` in your web browser

### Option 4: Use Live Server (VS Code)

```bash
# Install Live Server extension in VS Code
# Right-click on index.html
# Select "Open with Live Server"
```

### Option 5: Quick Start with Python

```bash
# Python 3
python -m http.server 8000

# Then navigate to http://localhost:8000
```

---

## 📖 Usage

### Adding a Task

1. Type your task in the input field
2. Click "Add Task" or press Enter
3. Task appears at the top of the list

### Completing a Task

1. Click the checkbox next to the task
2. Task text will be striked through
3. Task moves to completed count

### Editing a Task

1. Click the edit icon (pencil) on the task
2. Enter new task text in the prompt
3. Click OK to save

### Deleting a Task

1. Click the delete icon (trash) on the task
2. Task is immediately removed
3. Confirmation toast appears

### Filtering Tasks

1. Click filter buttons: "All", "Active", or "Completed"
2. List updates to show filtered results
3. Statistics update accordingly

### Clearing Completed Tasks

1. Click "Clear Completed" button
2. Confirm the action
3. All completed tasks are removed

### Clearing All Tasks

1. Click "Delete All" button
2. Confirm the action (cannot be undone)
3. All tasks are removed

---

## 📁 Project Structure

```
TodoListApp/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # Main application logic
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── LICENSE             # MIT License
```

### File Descriptions

**index.html**
- HTML structure for the application
- Semantic markup
- Accessible form elements
- Font Awesome icons

**styles.css**
- Professional styling with gradients
- Responsive design (mobile, tablet, desktop)
- Animations and transitions
- Dark mode compatible

**script.js**
- TodoListApp class with all functionality
- Local Storage integration
- Event handling
- Utility functions

---

## 💾 Local Storage

### How It Works

```javascript
// Data is automatically saved to browser's localStorage
const storageKey = 'todoListAppTasks';

// Tasks are stored as JSON
// Automatically loads on app refresh
// Persists across browser sessions
```

### Storage Structure

```json
[
  {
    "id": 1694000000000,
    "text": "Buy groceries",
    "completed": false,
    "priority": "medium",
    "createdAt": "2023-09-06T12:45:30.000Z"
  },
  {
    "id": 1694000001000,
    "text": "Complete project",
    "completed": true,
    "priority": "high",
    "createdAt": "2023-09-06T12:46:00.000Z"
  }
]
```

### Clearing Storage

To clear all saved tasks:

```javascript
// In browser console
localStorage.removeItem('todoListAppTasks');
// Then refresh the page
```

### Storage Limits

- Typical limit: 5-10 MB per domain
- Sufficient for thousands of tasks
- Chrome, Firefox, Safari, Edge all support it

---

## 🔌 API Reference

### TodoListApp Class

#### Constructor
```javascript
const app = new TodoListApp();
```

#### Methods

**addTask()**
- Creates a new task
- Validates input
- Shows toast notification

**deleteTask(id)**
- Removes task by ID
- Updates display
- Saves to storage

**toggleComplete(id)**
- Marks task as complete/incomplete
- Updates UI
- Saves changes

**editTask(id)**
- Allows inline editing
- Updates task text
- Validates input

**clearCompleted()**
- Removes all completed tasks
- Requires confirmation
- Batch operation

**deleteAll()**
- Removes all tasks
- Requires confirmation
- Cannot be undone

**setFilter(btn)**
- Updates current filter
- Re-renders list
- Updates button state

**saveTasks()**
- Persists tasks to localStorage
- Handles errors
- Error notification

**loadTasks()**
- Retrieves tasks from localStorage
- Parses JSON
- Handles errors

---

## 🗺️ Roadmap

### Version 1.0.0 (Current)
- ✅ Core CRUD functionality
- ✅ Local Storage persistence
- ✅ Filtering system
- ✅ Task statistics
- ✅ Professional UI
- ✅ Responsive design
- ✅ Live demo hosted

### Version 1.1.0 (Planned)
- [ ] Task categories/tags
- [ ] Due dates
- [ ] Task notifications
- [ ] Dark mode toggle
- [ ] Export/Import tasks

### Version 2.0.0 (Future)
- [ ] Cloud synchronization
- [ ] User accounts
- [ ] Collaborative lists
- [ ] PWA support
- [ ] Mobile app version
- [ ] Multiple projects
- [ ] Advanced analytics

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** with clear message (`git commit -m 'Add AmazingFeature'`)
6. **Push** to branch (`git push origin feature/AmazingFeature`)
7. **Open** a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write meaningful commit messages
- Test on multiple browsers
- Update documentation
- Keep it simple and focused

---

## 📝 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

```
MIT License

Copyright (c) 2026 Shahriar Chowdhury

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Support & Contact

- 👤 **Author**: [Shahriar Chowdhury](https://github.com/hcshahriar)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/hcshahriar/TodoListApp/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/hcshahriar/TodoListApp/discussions)
- 🌐 **Website**: [Visit Portfolio](https://github.com/hcshahriar)
- 🎯 **Live Demo**: [TodoListApp Demo](https://hcshahriar.github.io/TodoListApp/)

---

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [MDN Web Docs](https://developer.mozilla.org/) for documentation
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) for LocalStorage
- [GitHub Pages](https://pages.github.com/) for hosting

---

<div align="center">

**Made with ❤️ by [hcshahriar](https://github.com/hcshahriar)**

Give this project a ⭐️ if you found it helpful!

### [🚀 Try Live Demo Now](https://hcshahriar.github.io/TodoListApp/)

[⬆ back to top](#todolistapp)

</div>