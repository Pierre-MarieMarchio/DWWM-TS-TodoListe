import { renderRemoveTask } from "./renderHTML.js";
import { List } from "../services/List.js";

const getTaskId = (target: HTMLElement): string | null => {
  const parentElement = target.parentNode;
  const grandParentElement = parentElement?.parentNode as HTMLElement | null;

  if (grandParentElement) {
    const parentElementID = grandParentElement.getAttribute("id");

    return parentElementID;
  }

  return null;
};

const handleDeleteBtn = (target: HTMLElement, list: List) => {
   const taskID = getTaskId(target);
      if (taskID) {
        renderRemoveTask(taskID);
        list.serviceRemoveTask(taskID);
      }
};

const btnTaskLogique = (list: List) => {
  const lists: HTMLElement | null = document.querySelector("div.list");

  lists?.addEventListener("click", (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.classList.contains("delete-button")) {
        handleDeleteBtn(target, list);
      } 
      
     
    }
  });
};

export {btnTaskLogique}