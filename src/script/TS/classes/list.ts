// import { TaskData } from "../models/taskData";
import { TasksList } from "../models/tasksList";

export class List {
  tasksList: TasksList;

  constructor(tasksList: TasksList) {
    this.tasksList = tasksList;
  }

  addTask(): void {}

  removeTask(): void {}

  moveTask(): void {}

  changeDay(): void {}

  returnListsList(): void {}

}

// TESTS


