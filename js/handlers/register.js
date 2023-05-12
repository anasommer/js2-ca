import { BASE_URL } from "../api/constants.js";
import { fetchData } from "../api/call.js";

const form = document.querySelector("#registerForm");
const endpoint = "auth/register";
const method = "POST";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const profile = Object.fromEntries(formData.entries());

  const registerOptions = {
    method,
    body: JSON.stringify(profile),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    fetchData(BASE_URL, endpoint, registerOptions);
    form.reset();
  } catch (error) {
    console.log(error);
  }
});
