import { BASE_URL } from "../constants.js";
import { redirectToPostFeed } from "../../helpers/redirect.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
/**
 * Handles the login operation
 * @param {object} profile - The user profile object.
 */

export async function handleLogin(profile) {
  const endpoint = "auth/login";
  const method = "POST";
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
    localStorage.setItem("username", JSON.stringify(result.name));
    redirectToPostFeed(token);
  } catch (error) {
    displayMessage("warning", error);
  }
}
