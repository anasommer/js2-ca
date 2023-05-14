import { BASE_URL } from "../api/constants.js";
import { fetchData } from "../api/fetchData.js";

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
    const endpoint = "auth/register";
    const method = "POST";

    const registerOptions = {
      method,
      body: JSON.stringify(profile),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetchData(BASE_URL, endpoint, registerOptions);
    form.reset();
  });
}
