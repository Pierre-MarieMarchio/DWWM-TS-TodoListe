const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const taskInput = document.getElementById(
  "task-input"
) as HTMLFormElement | null;

const btnDate = document.getElementById(
  "btn-date-form"
) as HTMLInputElement | null;
const inputDate = document.getElementById(
  "task-date"
) as HTMLInputElement | null;

function isInputElement(
  element: HTMLElement | null
): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}

const dateForm = () => {
  const today: Date = new Date();
  const maxDate: Date = new Date(today);
  const minDate: Date = new Date(today);

  minDate.setDate(today.getDate() - 7);
  maxDate.setDate(today.getDate() + 7);

  if (isInputElement(inputDate)) {
    const max = maxDate.toISOString().split("T")[0];
    const min = minDate.toISOString().split("T")[0];

    max && inputDate?.setAttribute("max", max);
    min && inputDate?.setAttribute("min", min);
  }
};

btnDate?.addEventListener("click", () => {
  inputDate?.showPicker();
});

dateForm();

let taskTitle = "";
let taskDate = inputDate?.value || new Date().toISOString().split("T")[0];
let formResult = {};

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  setFormResult();
  console.log(formResult);
  clearForm();
});

const setFormResult = () => {
  taskTitle = taskInput instanceof HTMLInputElement ? taskInput.value : "";

  formResult = {
    taskDate: taskDate,
    taskTitle: taskTitle,
  };
};

const clearForm = () => {
  


  (taskInput instanceof HTMLInputElement) ? (taskInput as HTMLInputElement).value = '' : null;
};


export { formResult };
