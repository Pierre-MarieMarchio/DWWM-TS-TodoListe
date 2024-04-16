import { TaskData } from "../models/taskData.js";
import { TasksList } from "../models/tasksList.js";

export class List {
  tasksList: TasksList;

  constructor(tasksList: TasksList) {
    this.tasksList = tasksList;
  }
  //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE

  addTask(formResult: TaskData): void {
    const task: TaskData = {
      id: formResult.id,
      taskDate: formResult.taskDate,
      taskTitle: formResult.taskTitle,
      taskStatus: formResult.taskStatus,
    };

    this.tasksList.tasks?.push(task);
    this.renderAddTask(formResult);
  }

  removeTask(taskId: String): void {
    // @TODO REMOVE LOG
    console.log(taskId);

    let taskIndex = this.tasksList.tasks.findIndex((task) => "li-" + task.id === taskId);

    if (taskIndex !== -1) {
      this.tasksList.tasks.splice(taskIndex, 1);
    } else {
      console.error("taskIndex not found");
    }
    this.renderRemoveTask(taskId);
  }

  editTask(): void {}

  // ENDS HERE

  // addEventListener(): void {
  //   const lists: HTMLElement | null = document.querySelector("div.list");

  //   lists?.addEventListener("click", (e: MouseEvent) => {
  //     const target = e.target as HTMLElement;

  //     if (e.target instanceof HTMLElement && target.classList.contains("delete-button")) {
  //       const parentElement = target.parentNode;
  //       const grandParentElement = parentElement?.parentNode as HTMLElement | null;

  //       if (grandParentElement) {
  //         const parentElementID = grandParentElement.getAttribute("id");

  //         if (parentElementID != null) {
  //           this.removeTask(parentElementID);
  //         }
  //       }
  //     }

  //     if (e.target instanceof HTMLElement && e.target.classList.contains("list-text")) {
  //       const parentElement = target.parentNode;
  //       const grandParentElement = parentElement?.parentNode as HTMLElement | null;

  //       if (grandParentElement) {
  //         const parentElementID = grandParentElement.getAttribute("id");

  //         if (parentElementID != null) {
  //           const childPostitBox = grandParentElement.querySelector("div.postit-box");
  //           const childPostitText = grandParentElement.querySelector("label.postit-text");

  //           if (childPostitBox && childPostitText instanceof HTMLElement) {
  //             if (childPostitBox.classList.contains("ismodified")) {
  //               childPostitBox.classList.remove("ismodified");
  //               childPostitText?.blur();
  //             } else {
  //               childPostitBox.classList.add("ismodified");
  //               childPostitText.setAttribute("contenteditable", "true");
  //               childPostitText.focus();
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  handlePostitModification(postitText: HTMLElement, postitBox: HTMLElement, target: HTMLElement): void {
    postitText.setAttribute("contenteditable", "true");
    postitText.focus();

    console.log(target);
    console.log(postitBox);

    
      const handleBlur = () => {
        postitBox?.classList.remove("ismodified");
        postitText.blur();
        postitText.removeEventListener("blur", handleBlur);
        
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          postitBox?.classList.remove("ismodified");
          postitText.blur();
          postitText.removeEventListener("keydown", handleKeyDown);
        }
      };

      postitText.addEventListener("blur", handleBlur);
      postitText.addEventListener("keydown", handleKeyDown);
    
    
  }

  addEventListener(): void {
    const lists: HTMLElement | null = document.querySelector("div.list");

    lists?.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (e.target instanceof HTMLElement && target.classList.contains("delete-button")) {
      

        const parentElement = target.parentNode;
        const grandParentElement = parentElement?.parentNode as HTMLElement | null;

        if (grandParentElement) {
          const parentElementID = grandParentElement.getAttribute("id");

          if (parentElementID != null) {
            this.removeTask(parentElementID);
          }
        }
      }

      if (e.target instanceof HTMLElement && e.target.classList.contains("list-text")) {
    
        const parentElement = target.parentNode;
        const grandParentElement = parentElement?.parentNode as HTMLElement | null;

        if (grandParentElement) {
          const parentElementID = grandParentElement.getAttribute("id");

          if (parentElementID != null) {
           

            const childPostitBox = grandParentElement.querySelector("div.postit-box");
            const childPostitText = grandParentElement.querySelector("label.postit-text");

            if (childPostitBox) {
              if (childPostitBox.classList.contains("ismodified")) {
                childPostitBox.classList.remove("ismodified");
              } else {
                childPostitBox.classList.add("ismodified");
              }
            }
            if (childPostitText instanceof HTMLElement && childPostitBox instanceof HTMLElement) {
              this.handlePostitModification(childPostitText, childPostitBox, e.target);
            }
          }
        }
      }
    });
  }

  renderRemoveTask(taskId: String): void {
    const task = document.getElementById(`${taskId}`) as HTMLElement | null;

    console.log(task);
    console.log(taskId);
    if (task) {
      task.remove();
    }
  }

  renderAddTask(formResult: TaskData): void {
    const todayList = document.getElementById("selectedDayList") as HTMLUListElement | null;

    const listItem = document.createElement("li");
    listItem.id = "li-" + formResult.id;

    const divBox = document.createElement("div");
    divBox.className = "postit-box";
    const divText = document.createElement("div");
    divText.className = "list-text";
    const input = document.createElement("input");
    input.className = "check-box";
    input.type = "checkbox";
    input.id = formResult.id;
    const label = document.createElement("label");
    label.htmlFor = formResult.id;
    label.className = "postit-text";
    label.textContent = formResult.taskTitle;

    const imgDeleteBtn = document.createElement("img");
    imgDeleteBtn.className = "red delete-button";
    imgDeleteBtn.src = "../../assets/svg/trash-can-solid.svg";
    imgDeleteBtn.alt = "bouton delete";
    imgDeleteBtn.dataset["deleteBtn"] = "";
    const divSeparator = document.createElement("div");
    divSeparator.className = "vertical-separator";
    const imgMoveBtn = document.createElement("img");
    imgMoveBtn.className = "green move-button";
    imgMoveBtn.src = "../../assets/svg/up-down-left-right-solid.svg";
    imgMoveBtn.alt = "bouton move";

    if (todayList != null) {
      todayList.appendChild(listItem);
    } else {
      console.log("SelectedDayist not found");
    }
    listItem.appendChild(divBox);
    divBox.appendChild(divText);
    divText.appendChild(input);
    divText.appendChild(label);
    divBox.appendChild(imgDeleteBtn);
    divBox.appendChild(divSeparator);
    divBox.appendChild(imgMoveBtn);
  }

  updateList(): void {}

  returnTasksList(): TasksList {
    return this.tasksList;
  }
}
