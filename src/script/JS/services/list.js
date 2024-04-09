export class List {
    constructor(tasksList) {
        this.tasksList = tasksList;
    }
    //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE
    addTask(formResult) {
        var _a;
        const task = {
            id: formResult.id,
            taskDate: formResult.taskDate,
            taskTitle: formResult.taskTitle,
        };
        (_a = this.tasksList.tasks) === null || _a === void 0 ? void 0 : _a.push(task);
    }
    removeTask() { }
    editTask() { }
    // ENDS HERE
    changeListOrder() { }
    returnTasksList() {
        return this.tasksList;
    }
}
// TESTS
