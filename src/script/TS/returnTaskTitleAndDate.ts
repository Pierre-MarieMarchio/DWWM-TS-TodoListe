const form = document.getElementById("new-task-form") as HTMLFormElement | null;
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

// recuperer les valeurs

let taskTitle = "";
let taskDate: Date | null = new Date();
let formResult = {};

btnDate?.addEventListener("click", () => {
  inputDate?.showPicker();
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  setFormResult();
  console.log(Date());
  console.log(formResult);
  clearForm();
});

const setFormResult = () => {
  if (taskInput?.value) {
    taskTitle = taskInput.value;
  }

  if (inputDate?.value) {
    taskDate = new Date(inputDate?.value); // TODO INPUT DDATE
  }

  formResult = {
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

export { formResult };
