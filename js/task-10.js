function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const containerEl = document.querySelector("#boxes");

const destroyBtn = document.querySelector("[data-destroy]");

let numberOfBoxes = 0;

inputEl.addEventListener("input", onInputChange);
createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onInputChange(event) {
  numberOfBoxes = event.currentTarget.value;
}

function onCreateBtnClick() {
  createBoxes(numberOfBoxes);
}

function onDestroyBtnClick() {
  containerEl.innerHTML = "";
}

function createBoxes(amount) {
  const startWidth = 30;
  const boxes = [];
  for (let i = 1, j = 0; i <= amount; i += 1, j += 10) {
    const divEl = document.createElement("div");
    divEl.style.width = `${startWidth + j}px`;
    divEl.style.height = `${startWidth + j}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    boxes.push(divEl);
  }
  containerEl.append(...boxes);
}
