const dayBeforList: HTMLImageElement | null =
  document.querySelector("#dayBeforList img");
const curentDayList: HTMLImageElement | null =
  document.querySelector("#curentDayList img");
const dayAfterList: HTMLImageElement | null =
  document.querySelector("#dayAfterList img");

const btnListLogique = (): void => {
  dayBeforList?.addEventListener("click", (): void => {
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
};

export { btnListLogique };

