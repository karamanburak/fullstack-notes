//& ---------------------------------- */
//&             Selectors              */
//& ---------------------------------- */
const todoValueInput = document.getElementById("todo-value");
const listContainerUl = document.getElementById("list-container");
const addTaskI = document.getElementsById("add-task");
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
addTaskI.addEventListener("click", handleTaskClick);
listContainerUl.addEventListener("click",handleListContainerClick);
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
        saveDate();
      }
    }
    todoValueInput.value = ""; // reset input textContent after adding
  }
  


//& ---------------------------------- */
//&           Local Storage            */
//& ---------------------------------- */
