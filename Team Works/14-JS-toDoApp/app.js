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
function handleKeyPress(e){
    if(e.key === "Enter") addTaskI.click();
}

// Every time plus sign is clicked => add it as a new task
function handleTaskClick() {
    const inputValue = todoValueInput.value;

    if(inputValue){
        alert("PLeaser enter your task")
        todoValueInput.focus()
    }else {
        // ckeck if a task with same name aldready exists.
        const existingTask = 
    }
}




//& ---------------------------------- */
//&           Local Storage            */
//& ---------------------------------- */
