import { BASE_URL } from "../api/constants.js";
import { displayMessage } from "../ui/common/displayMessage.js";

/**
 * Function for redirecting to the Feed page when user trying to login.
 * @param {string} accessToken Authorization token stored in local storage
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
