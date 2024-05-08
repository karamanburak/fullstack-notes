//DOM
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");
//To-Do Lists
let tasks = [];
function updateList() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.task;
        li.classList.add(task.status === 1 /* Status.Completed */ ? "completed" : "active");
        li.addEventListener("click", () => toggle(index));
        list.appendChild(li);
    });
}
//To-Do Add
addBtn.addEventListener("click", () => {
    const newTask = input.value.trim();
    if (newTask !== "") {
        tasks.push({ task: newTask, status: 0 /* Status.Active */ });
        updateList();
        input.value = "";
    }
});
//Toggle Handling Function
function toggle(index) {
    tasks[index].status =
        tasks[index].status === 0 /* Status.Active */ ? 1 /* Status.Completed */ : 0 /* Status.Active */;
    updateList();
}
