// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // 1. Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 2. Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li)
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Remove task when remove button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Add remove button to the list item
    listItem.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // 3. Add event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // 4. Add task when Enter key is pressed in the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
