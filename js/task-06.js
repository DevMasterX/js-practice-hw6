const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  inputEl.classList.remove("valid,", "invalid");
  if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.add("valid");
  }
}
