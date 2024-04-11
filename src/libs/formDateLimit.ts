
let inputDate = document.getElementById("task-date") as HTMLInputElement | null;

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



export { dateForm }; 