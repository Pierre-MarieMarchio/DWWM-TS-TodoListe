import { TasksList } from "./models/tasksList.js";


function createTask(list: TasksList): void {
  const todayList = document.getElementById(
    "selectedDayList"
  ) as HTMLUListElement | null;

  console.log(list);

  if (list?.tasks && list.tasks.length > 0) {
    list.tasks.forEach((task) => {

      
      const listItem = document.createElement("li");

      const divBox = document.createElement("div");
      divBox.className = "postit-box";
      const divText = document.createElement("div");
      divText.className = "list-text";
      const input = document.createElement("input");
      input.className = "check-box";
      input.type = "checkbox";
      input.id = task.id;
      const label = document.createElement("label");
      label.htmlFor = task.id;
      label.className = "postit-text";
      label.textContent = task.taskTitle;
      const imgCheckBox = document.createElement("img");
      imgCheckBox.className = "red delete-button";
      imgCheckBox.src = "./assets/svg/trash-can-solid.svg";
      imgCheckBox.alt = "bouton delet";
      const divSeparator = document.createElement("div");
      divSeparator.className = "vertical-separator";
      const imgMoveBtn = document.createElement("img");
      imgMoveBtn.className = "green move-button";
      imgMoveBtn.src = "./assets/svg/up-down-left-right-solid.svg";
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
      divBox.appendChild(imgCheckBox);
      divBox.appendChild(divSeparator);
      divBox.appendChild(imgMoveBtn);
    });
  }
}

export { createTask };
