import { displayMessage } from "../../ui/common/displayMessage.js";
import { backToFeed } from "../../handlers/backToFeed.js";

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
