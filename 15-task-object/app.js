// Scope и this ============
const ToDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask: function (task) {
    const findTask = this.tasks.find((item) => item.id == task.id);
    if (findTask) {
      console.log("Задача уже добавлена!");
      return;
    }
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
  id: 2,
  priority: 4,
};

const buyCoke = {
  title: "Купить колу",
  id: 3,
  priority: 3,
};
const goToGym = {
  title: "Сходить в спортзал",
  id: 4,
  priority: 2,
};
ToDoList.addTask(readBook);
ToDoList.addTask(buyCoke);
ToDoList.addTask(goToGym);
console.log(ToDoList.removeTask(3));
console.log(ToDoList.taskUpdate(2, "Купить чипсов", 0));
ToDoList.sortingTask();
console.log(ToDoList.tasks);
