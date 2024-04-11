import { formResult, clearForm, setFormResult } from "./libs/formHandler.js";

import { TaskData } from "./models/taskData.js";
import { TasksList } from "./models/tasksList.js";
import { List } from "./services/list.js";
import { IdGenerator } from "./services/IdGenerator.js";

const form = document.getElementById("new-task-form") as HTMLFormElement | null;

//@TODO INIT FOR MY CLASS LIST DELET WHITH LOCAL STORAGE

const taskData: TaskData[] = [];
const listInfo: TasksList = {
  id: "1",
  name: "My list",
  tasks: taskData,
};

// init of my list and id
const myList = new List(listInfo);
const idGenerator = new IdGenerator();

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  setFormResult(idGenerator.generateCurentId(listInfo.name));
  myList.addTask(formResult);
  console.log(listInfo);
  clearForm();
});
