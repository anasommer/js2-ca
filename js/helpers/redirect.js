import { BASE_URL } from "../api/constants.js";
import { displayMessage } from "../ui/common/displayMessage.js";

/**
 * Redirects to the post feed page after successful login.
 *
 * @param {string} accessToken - The access token for authentication.
 * @returns {void}
 */
export async function redirectToPostFeed(accessToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    await fetch(`${BASE_URL}posts`, options);

    if (localStorage.getItem("accessToken") === "undefined") {
      displayMessage("warning", "Wrong username or password");
    } else {
      window.location.replace("/posts");
    }
  } catch {
    displayMessage("warning", "Error!");
  }
}
