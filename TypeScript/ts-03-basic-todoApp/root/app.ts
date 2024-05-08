const enum Status {
  Active,
  Completed,
}

interface Task {
  task: string;
  status: Status;
}

type Tasklist = Task[];

//DOM
const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

//To-Do Lists
let tasks: Tasklist = [];

function updateList() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.task;
    li.classList.add(task.status === Status.Completed ? "completed" : "active");
    li.addEventListener("click", () => toggle(index));
    list.appendChild(li);
  });
}

//To-Do Add

addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();

  if (newTask !== "") {
    tasks.push({ task: newTask, status: Status.Active });
    updateList();
    input.value = "";
  }
});

//Toggle Handling Function

function toggle(index: number) {
  tasks[index].status =
    tasks[index].status === Status.Active ? Status.Completed : Status.Active;
  updateList();
}
