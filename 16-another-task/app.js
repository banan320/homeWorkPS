// Управление this ============
const ToDoList = {
  tasks: [{ id: 1, name: "Помыть посуду", order: 1 }],
  addTask: function (task) {
    const findTask = this.tasks.find((item) => item.id == task.id);
    if (findTask) {
      console.log("Задача уже добавлена!");
      return;
    }
    task.id = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    this.tasks.push(task);
  },
  removeTask: function (id) {
    const index = this.tasks.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    return this.tasks;
  },
  taskUpdate: function (taskId, name, order) {
    const findTask = this.tasks.find((item) => item.id == taskId);
    findTask.name = name;
    findTask.order = order;
    return this.tasks;
  },
  sortingTask: function () {
    return this.tasks.sort((a, b) => a.order - b.order);
  },
};

const newTask = {
  tasks: [{ id: 1, name: "Помыть посуду", order: 1, description: "описание" }],
};

const readBook = {
  name: "Почитать книгу",
  order: 4,
  description: "описание",
};

const buyCoke = {
  name: "Купить колу",
  order: 3,
  description: "описание",
};
const goToGym = {
  name: "Сходить в спортзал",
  order: 2,
  description: "описание",
};

const addNewTask = ToDoList.addTask.bind(newTask);
addNewTask(readBook);
addNewTask(buyCoke);
addNewTask(goToGym);
console.log(newTask);
console.log("========================================================");
const removeNewTask = ToDoList.removeTask.bind(newTask);
// removeNewTask(1);
console.log(newTask);
console.log("========================================================");
const updateNewTask = ToDoList.taskUpdate.bind(newTask);
updateNewTask(1, "Купить чипсов", 0);
console.log(newTask);
console.log("========================================================");
const sortingNewTask = ToDoList.sortingTask.bind(newTask);
sortingNewTask();
console.log(newTask);
