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

const setFormResult = (idGenerator: string) => {
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

// Index list button logique

const dayBeforList: HTMLImageElement | null =
  document.querySelector("#dayBeforList img");
const curentDayList: HTMLImageElement | null =
  document.querySelector("#curentDayList img");
const dayAfterList: HTMLImageElement | null =
  document.querySelector("#dayAfterList img");

dayBeforList?.addEventListener("click", () => {
  const currentSrc = dayBeforList?.getAttribute("src");
  const h3Color: HTMLElement | null =
    document.querySelector("#dayBeforList h3");
  const ul = document.getElementById(
    "beforSelectedDayList"
  ) as HTMLUListElement | null;

  if (currentSrc == "../../assets/svg/chevron-right-solid.svg") {
    dayBeforList.src = "../../assets/svg/chevron-down-solid.svg";
    dayBeforList.className = "i-size white";
    if (h3Color != null) {
      h3Color.className = "";
    }
    if (ul != null) {
      ul.className = "list-colum Yesterday-list";
    }
  } else {
    dayBeforList.src = "../../assets/svg/chevron-right-solid.svg";
    dayBeforList.className = "i-size grey";
    if (h3Color != null) {
      h3Color.className = "grey";
    }
    if (ul != null) {
      ul.className = "list-colum Yesterday-list display-none";
    }
  }
});

curentDayList?.addEventListener("click", () => {
  const currentSrc = curentDayList?.getAttribute("src");
  const h3Color: HTMLElement | null =
    document.querySelector("#curentDayList h3");
  const ul = document.getElementById(
    "selectedDayList"
  ) as HTMLUListElement | null;

  if (currentSrc == "../../assets/svg/chevron-right-solid.svg") {
    curentDayList.src = "../../assets/svg/chevron-down-solid.svg";
    curentDayList.className = "i-size white";
    if (h3Color != null) {
      h3Color.className = "";
    }
    if (ul != null) {
      ul.className = "list-colum Yesterday-list";
    }
  } else {
    curentDayList.src = "../../assets/svg/chevron-right-solid.svg";
    curentDayList.className = "i-size grey";
    if (h3Color != null) {
      h3Color.className = "grey";
    }
    if (ul != null) {
      ul.className = "list-colum Yesterday-list display-none";
    }
  }
});

dayAfterList?.addEventListener("click", () => {
  const currentSrc = dayAfterList?.getAttribute("src");
  const h3Color: HTMLElement | null =
    document.querySelector("#dayAfterList h3");
    const ul = document.getElementById(
      "afterDayList"
    ) as HTMLUListElement | null;

  if (currentSrc == "../../assets/svg/chevron-right-solid.svg") {
    dayAfterList.src = "../../assets/svg/chevron-down-solid.svg";
    dayAfterList.className = "i-size white";
    if (h3Color != null) {
      h3Color.className = "";
    }
    if (ul != null) {
      ul.className = "list-colum Yesterday-list";
    }
  } else {
    dayAfterList.src = "../../assets/svg/chevron-right-solid.svg";
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
