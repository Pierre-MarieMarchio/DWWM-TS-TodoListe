const handleDayBeforBtn = (): void => {
  const dayBeforList: HTMLImageElement | null = document.querySelector("#dayBeforList img");
  if (dayBeforList != null) {
    const h3Color: HTMLElement | null = document.querySelector("#dayBeforList h3");
    const ul = document.getElementById("beforSelectedDayList") as HTMLUListElement | null;
    const currentSrc = dayBeforList?.getAttribute("src");
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
  }
};

const handleCurentDayBtn = () => {
  const curentDayList: HTMLImageElement | null = document.querySelector("#curentDayList img");
  if (curentDayList != null) {
    const h3Color: HTMLElement | null = document.querySelector("#curentDayList h3");
    const ul = document.getElementById("selectedDayList") as HTMLUListElement | null;
    const currentSrc = curentDayList?.getAttribute("src");
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
  }
};

const handleDayAfterBtn = (): void => {
  const dayAfterList: HTMLImageElement | null = document.querySelector("#dayAfterList img");

  if (dayAfterList != null) {
    const currentSrc = dayAfterList?.getAttribute("src");
    const h3Color: HTMLElement | null = document.querySelector("#dayAfterList h3");
    const ul = document.getElementById("afterDayList") as HTMLUListElement | null;

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
  }
};

const btnListLogique = (): void => {
  const lists: HTMLElement | null = document.querySelector("div.list");

  lists?.addEventListener("click", (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const target = e.target;

      if (target.id === "dayBeforListBtn") {
        handleDayBeforBtn();
      } else if (target.id === "curentDayListBtn") {
        handleCurentDayBtn();
      } else if (target.id === "dayAfterListBtn") {
        handleDayAfterBtn();
      }
    }
  });
};

export { btnListLogique };
