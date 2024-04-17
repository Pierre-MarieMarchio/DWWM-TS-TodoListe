// Interfaces

import { TaskData } from "./models/taskData.js";
import { TasksList } from "./models/tasksList.js";

// Libs


import { formResult, clearForm, setFormResult } from "./libs/formHandler.js";
import { dateForm } from "./libs/formDateLimit.js";
import { btnListLogique } from "./libs/btnListLogique.js";
import { renderAddTask } from "./libs/renderHTML.js";

// Services

import { List } from "./services/List.js";
import { IdGenerator } from "./services/IdGenerator.js";



// DOM Element

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

document.addEventListener("DOMContentLoaded", () => {
  dateForm();
  btnListLogique();
  myList.addEventListener();
});


form?.addEventListener("submit", (e) => {
  e.preventDefault();

  setFormResult(idGenerator.generateCurentId(listInfo.name));
  myList.serviceAddTask(formResult);
  renderAddTask(formResult);
  clearForm();
  
  
  console.log(listInfo);
});




