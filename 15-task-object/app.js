// Scope и this ============
const ToDoList = {
  tasks: [{ title: "Помыть посуду", priority: 1, id: 1 }],
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
    // return this.tasks.filter((taskId) => taskId.id !== id);
    const index = this.tasks.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    return this.tasks;
  },
  taskUpdate: function (taskId, title, priority) {
    const findTask = this.tasks.find((item) => item.id == taskId);
    findTask.title = title;
    findTask.priority = priority;
    return this.tasks;
  },
  sortingTask: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const readBook = {
  title: "Почитать книгу",
  priority: 4,
};

const buyCoke = {
  title: "Купить колу",
  priority: 3,
};
const goToGym = {
  title: "Сходить в спортзал",
  priority: 2,
};
ToDoList.addTask(readBook);
ToDoList.addTask(buyCoke);
ToDoList.addTask(goToGym);
console.log(ToDoList.tasks);
console.log(ToDoList.taskUpdate(1, "Купить чипсов", 0));
ToDoList.sortingTask();
console.log(ToDoList.tasks);
console.log(ToDoList.removeTask(1));
