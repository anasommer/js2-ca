import { BASE_URL } from "../api/constants.js";
import { redirectToPostFeed } from "./redirect.js";
import { displayMessage } from "../ui/displayMessage.js";

const endpoint = "auth/login";
const method = "POST";

const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const profile = Object.fromEntries(formData.entries());

  login(profile);
});

async function login(profile) {
  const loginURL = `${BASE_URL}${endpoint}`;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  try {
    const result = await response.json();
    const token = localStorage.setItem(
      "accessToken",
      JSON.stringify(result.accessToken)
    );
    redirectToPostFeed(token);
  } catch (error) {
    displayMessage("warning", error);
  }
}
