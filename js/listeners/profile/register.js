import { handleRegister } from "../../api/profile/register.js";

/**
 * Sets up the registration functionality for the registration form.
 *
 * @returns {void}
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
