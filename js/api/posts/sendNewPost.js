import { displayMessage } from "../../ui/common/displayMessage.js";
import { backToFeed } from "../../helpers/backToFeed.js";

/**
 * Sends a new post to the specified endpoint.
 *
 * @param {string} BASE_URL - The base URL of the API.
 * @param {string} endpoint - The endpoint to send the new post to.
 * @param {object} options - (Optional) Additional options for the fetch request.
 * @returns {void}
 */
export async function sendNewPost(BASE_URL, endpoint, options = {}) {
  fetch(`${BASE_URL}${endpoint}`, options)
    .catch((error) => displayMessage("warning", error))
    .finally(() => {
      displayMessage();
      document.querySelector("#post-btn").disabled = true;
      setTimeout(backToFeed, 2000);
    });
}
