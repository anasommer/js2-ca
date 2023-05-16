import { handleRegister } from "../../api/profile/register.js";
/**
 * Function for handling registration of a new user.
 * Collects form data and makes API call to the server, if entered information is correct, then user will see a success message, if something is wrong then user will get the error message.
 */
export function register() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    handleRegister(profile);

    form.reset();
  });
}
