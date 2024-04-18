import { renderRemoveTask } from "./renderHTML.js";
import { List } from "../services/List.js";

const getTaskId = (target: HTMLElement): string | null => {
  const parentElement = target.parentNode;
  const grandParentElement = parentElement?.parentNode as HTMLElement | null;

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

// Edit Event

const getTaskTitleChanges = (taskText: HTMLElement): string => {
  return taskText.innerText;
};

const handleEditClick = (taskBox: HTMLElement, taskText: HTMLElement, Id: string, list: List) => {
  if (taskBox.classList.contains("ismodified")) {
    const text: string = getTaskTitleChanges(taskText);
    list.serviceEditTaskText(Id, text);

    taskBox.classList.remove("ismodified");
    taskText?.setAttribute("contenteditable", "false");
    taskText?.blur();
  } else {
    taskBox.classList.add("ismodified");
    taskText?.setAttribute("contenteditable", "true");
    taskText?.focus();
  }
};

const handleEditEnterKey = (taskBox: HTMLElement, taskText: HTMLElement, Id: string, list: List) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const text: string = getTaskTitleChanges(taskText);
      list.serviceEditTaskText(Id, text);

      taskBox?.classList.remove("ismodified");
      taskText?.blur();
      taskText?.removeEventListener("keydown", handleKeyDown);
    }
  };
  taskText.addEventListener("keydown", handleKeyDown);
};

const handleEditBlur = (taskBox: HTMLElement, taskText: HTMLElement, Id: string, list: List): void => {
  const handleBlur = (e: MouseEvent) => {
    const clickedElement = e.target as HTMLElement;

    if (!taskBox.contains(clickedElement) && taskBox.classList.contains("ismodified")) {
      const text: string = getTaskTitleChanges(taskText);
      list.serviceEditTaskText(Id, text);

      taskBox.classList.remove("ismodified");
      taskText.setAttribute("contenteditable", "false");
      document.removeEventListener("click", handleBlur);
    }
  };
  document.addEventListener("click", handleBlur);
};

const handleEditMethods = (target: HTMLElement, list: List): void => {
  const taskID = getTaskId(target);
  const taskBox = target.parentNode;
  const taskText: HTMLElement | null | undefined = taskBox?.querySelector("label.postit-text");

  if (taskID && taskBox instanceof HTMLElement) {
    if (taskText) {
      handleEditClick(taskBox, taskText, taskID, list);
      handleEditEnterKey(taskBox, taskText, taskID, list);
      handleEditBlur(taskBox, taskText, taskID, list);
    }
  }
};

// main function

const btnTaskLogique = (list: List) => {
  const lists: HTMLElement | null = document.querySelector("div.list");

  lists?.addEventListener("click", (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.classList.contains("delete-button")) {
        handleDeleteBtn(target, list);
      } else if (target.classList.contains("list-text")) {
        handleEditMethods(target, list);
      }
    }
  });
};

export { btnTaskLogique };
