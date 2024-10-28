const counter = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick() {
  counter.textContent = counterValue -= 1;
}

function onIncrementBtnClick() {
  counter.textContent = counterValue += 1;
}
