import { formResult, clearForm, setFormResult } from "./index.js";
import { List } from "./services/list.js";
import { IdGenerator } from "./services/IdGenerator.js";
const form = document.getElementById("new-task-form");
//@TODO INIT FOR MY CLASS LIST DELET WHITH LOCAL STORAGE
const taskData = [];
const listInfo = {
    id: "1",
    name: "My list",
    tasks: taskData,
};
// init of my list and id
const myList = new List(listInfo);
const idGenerator = new IdGenerator();
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    setFormResult(idGenerator.generateCurentId(listInfo.name));
    myList.addTask(formResult);
    console.log(listInfo);
    clearForm();
    // createTask(myList.returnTasksList());
});
