const form = document.getElementById("new-task-form");
const submitButton = document.getElementById("new-task-farm-submit");
const taskInput = document.getElementById("task-input");
const btnDate = document.getElementById("btn-date-form");
const inputDate = document.getElementById("task-date");
const dateForm = () => {
    const today = new Date();
    const maxDate = new Date(today);
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7);
    maxDate.setDate(today.getDate() + 7);
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.setAttribute("max", maxDate.toISOString().split("T")[0]);
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.setAttribute("min", minDate.toISOString().split("T")[0]);
};
dateForm();
let taskTitle = "";
let taskDate = (inputDate === null || inputDate === void 0 ? void 0 : inputDate.value) || new Date().toISOString().split("T")[0];
let formResult = {};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskTitle = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value;
    formResult = {
        taskDate: taskDate,
        taskTitle: taskTitle,
    };
    returnForm();
});
btnDate === null || btnDate === void 0 ? void 0 : btnDate.addEventListener("click", (e) => {
    inputDate === null || inputDate === void 0 ? void 0 : inputDate.showPicker();
});
const returnForm = () => {
    console.log(formResult);
    if ((taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) != null) {
        taskInput.value = null;
    }
};
export { formResult };
