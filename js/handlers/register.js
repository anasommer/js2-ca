import { BASE_URL } from "../api/constants.js";
import { fetchData } from "../api/call.js";

const form = document.querySelector("#registerForm");
const registerEndpoint = "auth/register";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const profile = Object.fromEntries(formData.entries());

  const registerOptions = {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetchData(BASE_URL, registerEndpoint, registerOptions);
});
