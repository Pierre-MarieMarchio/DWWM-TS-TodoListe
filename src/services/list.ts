import { TaskData } from "../models/taskData.js";
import { TasksList } from "../models/tasksList.js";

export class List {
  tasksList: TasksList;

  constructor(tasksList: TasksList) {
    this.tasksList = tasksList;
  }
  //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE

  serviceAddTask(formResult: TaskData): void {
    const task: TaskData = {
      id: formResult.id,
      taskDate: formResult.taskDate,
      taskTitle: formResult.taskTitle,
      taskStatus: formResult.taskStatus,
    };

    this.tasksList.tasks?.push(task);
  }

  serviceRemoveTask(taskId: String): void {
    let taskIndex = this.tasksList.tasks.findIndex((task) => "li-" + task.id === taskId);

    if (taskIndex !== -1) {
      this.tasksList.tasks.splice(taskIndex, 1);
    } else {
      console.error("taskIndex not found");
    }
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
      console.log("coucou");

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

  getTaskId(target: any) {
    if (target instanceof HTMLElement && target.classList.contains("delete-button")) {
      const parentElement = target.parentNode;
      const grandParentElement = parentElement?.parentNode as HTMLElement | null;

      if (grandParentElement) {
        const parentElementID = grandParentElement.getAttribute("id");

        if (parentElementID != null) {
          this.serviceRemoveTask(parentElementID);
          this.renderRemoveTask(parentElementID);
        }
      }
    }
  }

  addEventListener(): void {
    const lists: HTMLElement | null = document.querySelector("div.list");

    lists?.addEventListener("click", (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const target = e.target as HTMLElement;
        this.getTaskId(target);

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
      }
    });
  }

  renderRemoveTask(taskId: String): void {
    const task = document.getElementById(`${taskId}`) as HTMLElement | null;
    if (task) {
      task.remove();
    }
  }

  updateList(): void {}

  returnTasksList(): TasksList {
    return this.tasksList;
  }
}
