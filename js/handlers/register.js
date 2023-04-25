const form = document.querySelector("#registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target);
});
