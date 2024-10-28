const formEl = document.querySelector(".login-form");
const { password, email } = formEl.elements;

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (password.value === "" || email.value === "") {
    alert("Please enter");
  }
  const formData = { email: email.value, password: password.value };

  console.log(formData);
  formEl.reset();
}
