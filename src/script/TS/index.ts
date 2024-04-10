import { TaskData } from "./models/taskData.js";


let taskInput = document.getElementById(
  "task-input"
) as HTMLInputElement | null;

const btnDate = document.getElementById(
  "btn-date-form"
) as HTMLInputElement | null;
let inputDate = document.getElementById("task-date") as HTMLInputElement | null;

function isInputElement(
  element: HTMLElement | null
): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}

// mettre une limite de 7 jours sur formulair avant et apres curent day

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

dateForm();

// recuperer les valeurs de l'input


let taskTitle = "";
let taskDate: Date = new Date();
let formResult: TaskData;

btnDate?.addEventListener("click", () => {
  inputDate?.showPicker();
});

const setFormResult = ( idGenerator: string) => {
  if (taskInput?.value) {
    taskTitle = taskInput.value;
  }

  if (inputDate?.value) {
    taskDate = new Date(inputDate?.value);
  }

  formResult = {
    id: idGenerator,
    taskDate: taskDate,
    taskTitle: taskTitle,
  };
};

const clearForm = () => {
  if (taskInput?.value) {
    taskInput.value = "";
  }
  //@TODO  DELETE THAT DATE YO
  // if (inputDate) {
  //   inputDate = null;
  // }
};

export { formResult, clearForm, setFormResult };
// export { clearForm };
// export { setFormResult };
