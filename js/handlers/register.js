const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const signUpForm = event.target;
  const formData = new FormData(signUpForm);
  const profile = Object.fromEntries(formData.entries());
});
