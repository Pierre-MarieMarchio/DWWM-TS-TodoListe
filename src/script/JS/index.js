let taskInput = document.getElementById("task-input");
const btnDate = document.getElementById("btn-date-form");
let inputDate = document.getElementById("task-date");
function isInputElement(element) {
    return element instanceof HTMLInputElement;
}
// mettre une limite de 7 jours sur formulair avant et apres curent day
const dateForm = () => {
    const today = new Date();
    const maxDate = new Date(today);
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7);
    maxDate.setDate(today.getDate() + 7);
    if (isInputElement(inputDate)) {
        const max = maxDate.toISOString().split("T")[0];
        const min = minDate.toISOString().split("T")[0];
        max && (inputDate === null || inputDate === void 0 ? void 0 : inputDate.setAttribute("max", max));
        min && (inputDate === null || inputDate === void 0 ? void 0 : inputDate.setAttribute("min", min));
    }
};
dateForm();
// recuperer les valeurs de l'input
let taskTitle = "";
let taskDate = new Date();
let formResult;
btnDate === null || btnDate === void 0 ? void 0 : btnDate.addEventListener("click", () => {
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.showPicker();
});
const setFormResult = (idGenerator) => {
    if (taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) {
        taskTitle = taskInput.value;
    }
    if (inputDate === null || inputDate === void 0 ? void 0 : inputDate.value) {
        taskDate = new Date(inputDate === null || inputDate === void 0 ? void 0 : inputDate.value);
    }
    formResult = {
        id: idGenerator,
        taskDate: taskDate,
        taskTitle: taskTitle,
    };
};
const clearForm = () => {
    if (taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) {
        taskInput.value = "";
    }
    //@TODO  DELETE THAT DATE YO
    // if (inputDate) {
    //   inputDate = null;
    // }
};
// Index list button logique
const dayBeforList = document.querySelector("#dayBeforList img");
const curentDayList = document.querySelector("#curentDayList img");
const dayAfterList = document.querySelector("#dayAfterList img");
dayBeforList === null || dayBeforList === void 0 ? void 0 : dayBeforList.addEventListener("click", () => {
    const currentSrc = dayBeforList === null || dayBeforList === void 0 ? void 0 : dayBeforList.getAttribute("src");
    const h3Color = document.querySelector("#dayBeforList h3");
    const ul = document.getElementById("beforSelectedDayList");
    if (currentSrc == "./assets/svg/chevron-right-solid.svg") {
        dayBeforList.src = "./assets/svg/chevron-down-solid.svg";
        dayBeforList.className = "i-size white";
        if (h3Color != null) {
            h3Color.className = "";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list";
        }
    }
    else {
        dayBeforList.src = "./assets/svg/chevron-right-solid.svg";
        dayBeforList.className = "i-size grey";
        if (h3Color != null) {
            h3Color.className = "grey";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list display-none";
        }
    }
});
curentDayList === null || curentDayList === void 0 ? void 0 : curentDayList.addEventListener("click", () => {
    const currentSrc = curentDayList === null || curentDayList === void 0 ? void 0 : curentDayList.getAttribute("src");
    const h3Color = document.querySelector("#curentDayList h3");
    const ul = document.getElementById("selectedDayList");
    if (currentSrc == "./assets/svg/chevron-right-solid.svg") {
        curentDayList.src = "./assets/svg/chevron-down-solid.svg";
        curentDayList.className = "i-size white";
        if (h3Color != null) {
            h3Color.className = "";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list";
        }
    }
    else {
        curentDayList.src = "./assets/svg/chevron-right-solid.svg";
        curentDayList.className = "i-size grey";
        if (h3Color != null) {
            h3Color.className = "grey";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list display-none";
        }
    }
});
dayAfterList === null || dayAfterList === void 0 ? void 0 : dayAfterList.addEventListener("click", () => {
    const currentSrc = dayAfterList === null || dayAfterList === void 0 ? void 0 : dayAfterList.getAttribute("src");
    const h3Color = document.querySelector("#dayAfterList h3");
    const ul = document.getElementById("afterDayList");
    if (currentSrc == "./assets/svg/chevron-right-solid.svg") {
        dayAfterList.src = "./assets/svg/chevron-down-solid.svg";
        dayAfterList.className = "i-size white";
        if (h3Color != null) {
            h3Color.className = "";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list";
        }
    }
    else {
        dayAfterList.src = "./assets/svg/chevron-right-solid.svg";
        dayAfterList.className = "i-size grey";
        if (h3Color != null) {
            h3Color.className = "grey";
        }
        if (ul != null) {
            ul.className = "list-colum Yesterday-list display-none";
        }
    }
});
export { formResult, clearForm, setFormResult };
