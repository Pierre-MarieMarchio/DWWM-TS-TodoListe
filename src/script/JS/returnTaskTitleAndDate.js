const form = document.getElementById("new-task-form");
const taskInput = document.getElementById("task-input");
const btnDate = document.getElementById("btn-date-form");
const inputDate = document.getElementById("task-date");
function isInputElement(element) {
    return element instanceof HTMLInputElement;
}
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
let taskTitle = "";
let taskDate = (inputDate === null || inputDate === void 0 ? void 0 : inputDate.value) || new Date().toISOString().split("T")[0];
let formResult = {};
btnDate === null || btnDate === void 0 ? void 0 : btnDate.addEventListener("click", () => {
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.showPicker();
});
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    setFormResult();
    console.log(formResult);
    clearForm();
});
const setFormResult = () => {
    taskTitle = taskInput instanceof HTMLInputElement ? taskInput.value : "";
    taskDate = inputDate === null || inputDate === void 0 ? void 0 : inputDate.value;
    formResult = {
        taskDate: taskDate,
        taskTitle: taskTitle,
    };
};
const clearForm = () => {
    taskInput instanceof HTMLInputElement
        ? (taskInput.value = "")
        : null;
};
export { formResult };
