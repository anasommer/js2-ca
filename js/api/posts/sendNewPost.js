import { displayMessage } from "../../ui/common/displayMessage.js";
import { backToFeed } from "../../helpers/backToFeed.js";

/**
 * Function that sends new post to the API
 * @param {string} BASE_URL Base link of the API
 * @param {string} endpoint Desired endpoint of the API
 * @param {object} options Object containing authorization, headers, body etc.
 */
export async function sendNewPost(BASE_URL, endpoint, options = {}) {
  try {
    await fetch(`${BASE_URL}${endpoint}`, options);
  } catch (error) {
    console.log(error);
  } finally {
    displayMessage();
    document.querySelector("#post-btn").disabled = true;
    setTimeout(backToFeed, 2000);
  }
}
