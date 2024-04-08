import { formResult } from "./returnTaskTitleAndDate.js";
import { List } from "./classes/list.js";
console.log(formResult);
const taskData = [
    { id: "1", taskDate: new Date(), taskTitle: "Task 1" },
    { id: "2", taskDate: new Date(), taskTitle: "Task 2" },
    { id: "3", taskDate: new Date(), taskTitle: "Task 4" },
];
const listInfo = { id: "1", name: "My list" };
const newList = new List(listInfo);
console.log("ici");
console.log(taskData);
newList.addTask();
