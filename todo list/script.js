document.addEventListener('DOMContentLoaded', function() { 
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Load tasks from local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Display tasks
  function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      taskList.appendChild(li);
    });
  }

  // Add task
  addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
      taskInput.value = '';
    }
  });

  // Edit task
  taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
      const index = event.target.dataset.index;
      const newTaskText = prompt('Edit task:', tasks[index]);
      if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
      }
    }
  });

  // Delete task
  taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const index = event.target.dataset.index;
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    }
  });

  // Initial display of tasks
  displayTasks();
});
