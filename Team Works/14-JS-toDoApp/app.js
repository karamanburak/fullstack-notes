//& ---------------------------------- */
//&             Selectors              */
//& ---------------------------------- */
const todoValueInput = document.getElementById("todo-value");
const listContainerUl = document.getElementById("list-container");
const addTaskI = document.getElementById("add-task");
const clearBtn = document.querySelector(".clear-btn");
const resultPar = document.querySelector(".result");
//& ---------------------------------- */
//&              Initials              */
//& ---------------------------------- */
//- toDoList array
let toDoList = [];
//- task counts
let totalTasks = 0;
let doneTasks = 0;
//& ---------------------------------- */
//&          Event Listeners           */
//& ---------------------------------- */
todoValueInput.addEventListener("keypress", handleKeyPress);
addTaskI.addEventListener("click", handleAddTaskClick);
listContainerUl.addEventListener("click", handleListContainerClick);
clearBtn.addEventListener("click", handleClearBtnClick);
//& ---------------------------------- */
//&             Functions              */
//& ---------------------------------- */
// Every time "Enter" key is pressed => make AddTaskI clicked
function handleKeyPress(e) {
  if (e.key === "Enter") addTaskI.click();
}
// Every time plus sign is clicked => add it as a new task
function handleAddTaskClick() {
  const inputValue = todoValueInput.value;
  if (inputValue === "") {
    alert("Please enter your task");
    todoValueInput.focus();
  } else {
    // check if a task with the same name already exists.
    const existingTask = toDoList.find((task) => task.task_name === inputValue);
    if (existingTask) {
      alert(`Task ${inputValue} already exists! Please enter a different task`);
      todoValueInput.focus();
    } else {
      // add this newly styled created task as a appendChild into li
      const li = document.createElement("li");
      const itemSettingDiv = document.createElement("div");
      itemSettingDiv.className = "item-setting";
      itemSettingDiv.textContent = inputValue;
      const todoControlSpan = document.createElement("span");
      const trasIcon = document.createElement("i");
      trasIcon.className = "fa-solid fa-trash-can todo-control";
      todoControlSpan.appendChild(trasIcon);
      li.appendChild(itemSettingDiv);
      li.appendChild(todoControlSpan);
      listContainerUl.appendChild(li);
      // push new li element to toDoList
      toDoList.push({
        task_name: inputValue,
        checked: false,
      });
      // reset result textContent after adding task
      resultPar.textContent = "";
      // Update task counts (increase)
      totalTasks++;
      updateTaskCounts();
      saveData();
    }
  }
  todoValueInput.value = ""; // reset input textContent after adding
}
// function that calls a function based on clicked target
function handleListContainerClick(e) {
  const target = e.target;
  if (target.tagName === "I" && target.parentElement.tagName === "SPAN")
    handleDeleteTaskClick(e);
  else if (target.tagName === "LI" || target.classList.contains("item-setting"))
    handleToggleCheckedClick(e);
}
// delete basen on target
function handleDeleteTaskClick(e) {
  const itemText = e.target.parentElement.previousElementSibling.textContent; // = inputValue (deger olarak)
  if (confirm(`Task ${itemText} will be permanently deleted. Are you sure?`)) {
    e.target.parentElement.parentElement.remove();
    // remove task from toDoList
    const taskIndex = toDoList.findIndex((task) => task.task_name === itemText); // -1
    if (taskIndex !== -1) {
      // update task counts (decrease)
      totalTasks--;
      if (toDoList[taskIndex].checked) doneTasks--;
      toDoList.splice(taskIndex, 1);
      updateTaskCounts();
      saveData();
    }
    if (listContainerUl.childElementCount) {
      resultPar.textContent = `Task ${itemText} is successfully deleted.`;
    }
  }
}
// Toggle => checked or not checked
function handleToggleCheckedClick(e) {
  const listItem = e.target.closest("li");
  if (listItem) {
    listItem.classList.toggle("checked");
    const isChecked = listItem.classList.contains("checked");
    const itemText = listItem.querySelector(".item-setting").textContent; // = inputValue
    const task = toDoList.find((task) => task.task_name === itemText);
    if (task) {
      // update task counts when a task is checked
      if (isChecked) doneTasks++;
      else doneTasks--;
      // update toDoList with the new checked status
      task.checked = isChecked;
      updateTaskCounts();
      saveData();
    }
  }
}
//& ---------------------------------- */
//&           Local Storage            */
//& ---------------------------------- */
// save data in local storage
function saveData() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  localStorage.setItem("totalTasks", totalTasks);
  localStorage.setItem("doneTasks", doneTasks);
  updateTaskCounts();
}
function showTasks() {
  const storedData = localStorage.getItem("toDoList");
  const storedTotalTasks = localStorage.getItem("totalTasks");
  const storedDoneTasks = localStorage.getItem("doneTasks");
  if (storedData) {
    toDoList = JSON.parse(storedData);
    // Update task counts
    totalTasks = storedTotalTasks ? parseInt(storedTotalTasks) : 0;
    doneTasks = storedDoneTasks ? parseInt(storedDoneTasks) : 0;
    toDoList.forEach((task) => {
      const li = document.createElement("li");
      const itemSettingDiv = document.createElement("div");
      itemSettingDiv.className = "item-setting";
      itemSettingDiv.textContent = task.task_name;
      const todoControlSpan = document.createElement("span");
      const trasIcon = document.createElement("i");
      trasIcon.className = "fa-solid fa-trash-can todo-control";
      todoControlSpan.appendChild(trasIcon);
      li.appendChild(itemSettingDiv);
      li.appendChild(todoControlSpan);
      listContainerUl.appendChild(li);
      // set checked status => if its true than add checked
      if (task.checked) li.classList.add("checked");
    });
    updateTaskCounts();
  }
}
showTasks();
// update total number of tasks and number of done tasks
function updateTaskCounts() {
  const totalSpan = document.getElementById("total");
  const doneSpan = document.getElementById("done");
  totalSpan.textContent = totalTasks;
  doneSpan.textContent = doneTasks;
}
//
function handleClearBtnClick() {
  if (confirm("Your ToDo List will be permanently deleted. Are you sure?")) {
    // Clear local storage
    localStorage.removeItem("toDoList");
    localStorage.removeItem("totalTasks");
    localStorage.removeItem("doneTasks");
    // reload the page
    location.reload();
  }
}