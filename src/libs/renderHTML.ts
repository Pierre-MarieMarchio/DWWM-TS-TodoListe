import { TaskData } from "../models/taskData.js";

const createDiv = (className: string): HTMLElement => {
  const div = document.createElement("div");
  div.className = className;

  return div;
};

const createinput = (className: string, type: string, id: string): HTMLElement => {
  const input = document.createElement("input");
  input.className = className;
  input.type = type;
  input.id = id;

  return input;
};

const createLabel = (className: string, id: string, textContent: string): HTMLElement => {
  const label = document.createElement("label");
  label.htmlFor = id;
  label.className = className;
  label.textContent = textContent;

  return label;
};

const createDeleteBtn = (): HTMLElement => {
  const imgDeleteBtn = document.createElement("img");
  imgDeleteBtn.className = "red delete-button";
  imgDeleteBtn.src = "../../assets/svg/trash-can-solid.svg";
  imgDeleteBtn.alt = "bouton delete";
  imgDeleteBtn.dataset["deleteBtn"] = "";

  return imgDeleteBtn;
};

const createMoveBtn = (): HTMLElement => {
  const imgMoveBtn = document.createElement("img");
  imgMoveBtn.className = "green move-button";
  imgMoveBtn.src = "../../assets/svg/up-down-left-right-solid.svg";
  imgMoveBtn.alt = "bouton move";

  return imgMoveBtn;
};

const renderAddTask = (formResult: TaskData): void => {
  const todayList = document.getElementById("selectedDayList") as HTMLUListElement | null;

  const listItem = document.createElement("li");
  listItem.id = "li-" + formResult.id;
  const divBox = createDiv("postit-box");
  const divText = createDiv("list-text");
  const input = createinput("check-box", "checkbox", formResult.id);
  const label = createLabel("postit-text", formResult.id, formResult.taskTitle);
  const imgDeleteBtn = createDeleteBtn();
  const divSeparator = createDiv("vertical-separator");
  const imgMoveBtn = createMoveBtn();

  if (todayList != null) {
    todayList.appendChild(listItem);
  } else {
    console.log("SelectedDayist not found");
    return;
  }

  listItem.appendChild(divBox);
  divBox.appendChild(divText);
  divText.appendChild(input);
  divText.appendChild(label);
  divBox.appendChild(imgDeleteBtn);
  divBox.appendChild(divSeparator);
  divBox.appendChild(imgMoveBtn);
};

const renderRemoveTask = (taskId: String): void => {
  const task = document.getElementById(`${taskId}`) as HTMLElement | null;
  if (task) {
    task.remove();
  }
};

export { renderRemoveTask, renderAddTask };
