import { TaskData } from "../models/taskData";

export class Task {
  newTextInput: string;
  newDateInput: Date;

  constructor(formResult: TaskData) {
    this.newTextInput = formResult.taskTitle;
    this.newDateInput = formResult.taskDate;
  }

  createTask(): void {}

  delletTask(): void {}

  editTask(): void {}

  returnTasksList(): void {}
}
