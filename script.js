document.addEventListener("DOMContentLoaded", function () {
  
  const addBtn = document.getElementById("addBtn"); // Get the Add button
  const taskInput = document.getElementById("taskInput"); // Get the input field
  const taskList = document.getElementById("taskList"); // Get the task list container

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and clean input text

    if (taskText === "") return; // Stop if input is empty

    const li = document.createElement("li"); // Create a new list item
    li.textContent = taskText; // Set the text of the list item

    // Toggle completion when clicked
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent toggling completion
      li.remove(); // Remove the task
    });

    li.appendChild(deleteBtn); // Add delete button to the list item
    taskList.appendChild(li); // Add list item to the list
    taskInput.value = ""; // Clear the input field
  }

  // Add task when button is clicked
  addBtn.addEventListener("click", addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

});
