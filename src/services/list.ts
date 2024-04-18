import { TaskData } from "../models/taskData.js";
import { TasksList } from "../models/tasksList.js";

export class List {
  tasksList: TasksList;

  constructor(tasksList: TasksList) {
    this.tasksList = tasksList;
  }

  //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE

  serviceAddTask(formResult: TaskData): void {
    const task: TaskData = {
      id: formResult.id,
      taskDate: formResult.taskDate,
      taskTitle: formResult.taskTitle,
      taskStatus: formResult.taskStatus,
    };

    this.tasksList.tasks?.push(task);
  }

  serviceRemoveTask(taskId: String): void {
    let taskIndex = this.tasksList.tasks.findIndex((task) => "li-" + task.id === taskId);

    if (taskIndex !== -1) {
      this.tasksList.tasks.splice(taskIndex, 1);
    } else {
      console.error("taskIndex not found");
    }
  }

  serviceEditTaskText(taskId: string, newTaskText: string): void {
    const taskIndex = this.tasksList.tasks.findIndex((task) => "li-" + task.id === taskId);

    if (taskIndex !== -1) {
      if (this.tasksList.tasks[taskIndex]) {
        this.tasksList.tasks[taskIndex]!.taskTitle = newTaskText;
      } else {
        console.error("no task title or is undifined");
      }
    } else {
      console.error("Id not found");
    }
  }

  // ENDS HERE

  updateList(): void {}

  returnTasksList(): TasksList {
    return this.tasksList;
  }
}
