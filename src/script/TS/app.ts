import { formResult } from "./returnTaskTitleAndDate.js";
import { clearForm } from "./returnTaskTitleAndDate.js";
import { setFormResult } from "./returnTaskTitleAndDate.js";
import { createList } from "./createList.js";
import { TaskData } from "./models/taskData.js";
import { TasksList } from "./models/tasksList.js";
import { List } from "./services/list.js";

const form = document.getElementById("new-task-form") as HTMLFormElement | null;




//@TODO INIT FOR MY CLASS LIST DELET WHITH LOCAL STORAGE

const taskData: TaskData[] = [];
const listInfo: TasksList = {
  id: "1",
  name: "My list",
  tasks: taskData,
};

// init of my list
const myList = new List(listInfo);



form?.addEventListener("submit", (e) => {
  e.preventDefault();

  setFormResult();
  myList.addTask(formResult);
  console.log(listInfo);
  clearForm();
  createList(myList.returnTasksList());
});
