import { renderRemoveTask } from "./renderHTML.js";
import { List } from "../services/List.js";

const getTaskId = (target: HTMLElement): string | null => {
  const parentElement = target.parentNode;
  const grandParentElement = parentElement?.parentNode as HTMLElement | null;

  // console.log(grandParentElement);
  // console.log(parentElement);

  if (grandParentElement) {
    const taskID = grandParentElement.getAttribute("id");

    return taskID;
  }

  return null;
};

const handleDeleteBtn = (target: HTMLElement, list: List): void => {
  const taskID = getTaskId(target);
  if (taskID) {
    renderRemoveTask(taskID);
    list.serviceRemoveTask(taskID);
  }
};

const handleEditClick = (taskBox: HTMLElement, taskText: HTMLElement) => {
  console.log("coucou click");

  if (taskBox.classList.contains("ismodified")) {
    taskBox.classList.remove("ismodified");
    taskText?.setAttribute("contenteditable", "false");
    taskText?.blur();
  } else {
    taskBox.classList.add("ismodified");
    taskText?.setAttribute("contenteditable", "true");
    taskText?.focus();
  }
};

const handleEditEnterKey = (taskBox: HTMLElement, taskText: HTMLElement) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      taskBox?.classList.remove("ismodified");
      taskText?.blur();
      taskText?.removeEventListener("keydown", handleKeyDown);
    }
  };
  taskText.addEventListener("keydown", handleKeyDown);
};

const handleEditBlur = (taskBox: HTMLElement, taskText: HTMLElement): void => {
  const handleBlur = () => {
    console.log("coucou blur");

    taskBox?.classList.remove("ismodified");
    console.log(taskBox.classList);
    taskText?.removeEventListener("blur", handleBlur);
  };
  taskText.addEventListener("blur", handleBlur);
};

const handleEditMethods = (target: HTMLElement): void => {
  const taskID = getTaskId(target);
  const taskBox = target.parentNode;
  const taskText: HTMLElement | null | undefined = taskBox?.querySelector("label.postit-text");

  console.log(target);
  console.log(taskBox);

  if (taskID && taskBox instanceof HTMLElement) {
    if (taskText) {
      handleEditClick(taskBox, taskText);
      handleEditEnterKey(taskBox, taskText);
      console.log("hi");
      handleEditBlur(taskBox, taskText);
    }
  }
};

const btnTaskLogique = (list: List) => {
  // const lists: HTMLElement | null = document.querySelector("div.list");

  document.addEventListener("click", (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.classList.contains("delete-button")) {
        handleDeleteBtn(target, list);
      } else if (target.classList.contains("list-text")) {
        handleEditMethods(target);
      }
    }
  });
};

export { btnTaskLogique };
