const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  console.log(inputEl.value);
  spanEl.style.fontSize = `${inputEl.value}px`;
}
