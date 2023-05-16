import { handleLogin } from "../../api/profile/login.js";

/**
 * Sets up the login functionality for the login form.
 *
 * @returns {void}
 */
export function login() {
  const form = document.querySelector("#registerForm");

  /**
   * Event listener for the form submisiion
   * @param {event} event - The submit event.
   */
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    handleLogin(profile);
  });
}
