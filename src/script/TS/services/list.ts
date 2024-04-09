// import { TaskData } from "../models/taskData";
import { TaskData } from "../models/taskData";
import { TasksList } from "../models/tasksList";


export class List {
  tasksList: TasksList;

  constructor(tasksList: TasksList) {
    this.tasksList = tasksList;
  }
  //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE

  addTask(formResult: TaskData ): void {
    const task: TaskData = {
      id: formResult.id,
      taskDate: formResult.taskDate,
      taskTitle: formResult.taskTitle,
    };

    this.tasksList.tasks?.push(task);

  }

  removeTask(): void {}

  editTask(): void {}

  // ENDS HERE

  changeListOrder(): void {}

  returnTasksList(): TasksList {
    return this.tasksList;
  }
}

// TESTS
