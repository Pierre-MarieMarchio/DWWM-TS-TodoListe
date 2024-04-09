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
// recuperer les valeurs
let taskTitle = "";
let taskDate = new Date();
let formResult;
btnDate === null || btnDate === void 0 ? void 0 : btnDate.addEventListener("click", () => {
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.showPicker();
});
const setFormResult = () => {
    if (taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) {
        taskTitle = taskInput.value;
    }
    if (inputDate === null || inputDate === void 0 ? void 0 : inputDate.value) {
        taskDate = new Date(inputDate === null || inputDate === void 0 ? void 0 : inputDate.value);
    }
    formResult = {
        id: "@TODO MAKE FUNC TO MAKE ID",
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
export { formResult };
export { clearForm };
export { setFormResult };
