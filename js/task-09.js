function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorName = document.querySelector(".color");

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
}
