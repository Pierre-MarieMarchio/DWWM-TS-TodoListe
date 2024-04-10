export class List {
    constructor(tasksList) {
        this.tasksList = tasksList;
    }
    //@TODO - WHEN LOCAL STORAGE DELETE AND USE SERVICE
    addTask(formResult) {
        var _a;
        const task = {
            id: formResult.id,
            taskDate: formResult.taskDate,
            taskTitle: formResult.taskTitle,
        };
        (_a = this.tasksList.tasks) === null || _a === void 0 ? void 0 : _a.push(task);
        this.generateHTMLTask(formResult);
    }
    removeTask() { }
    editTask() { }
    // ENDS HERE
    generateHTMLTask(formResult) {
        const todayList = document.getElementById("selectedDayList");
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
        }
        else {
            console.log("SelectedDayist not found");
        }
        listItem.appendChild(divBox);
        divBox.appendChild(divText);
        divText.appendChild(input);
        divText.appendChild(label);
        divBox.appendChild(imgCheckBox);
        divBox.appendChild(divSeparator);
        divBox.appendChild(imgMoveBtn);
    }
    updateList() {
    }
    ;
    returnTasksList() {
        return this.tasksList;
    }
}
// TESTS
