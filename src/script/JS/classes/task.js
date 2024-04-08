export class Task {
    constructor(formResult) {
        this.newTextInput = formResult.taskTitle;
        this.newDateInput = formResult.taskDate;
    }
    createTask() { }
    delletTask() { }
    editTask() { }
}
