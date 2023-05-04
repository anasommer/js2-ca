import { displayMessage } from "../ui/displayMessage.js";

export async function sendNewPost(BASE_URL, endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    displayMessage();
    document.querySelector("#post-btn").disabled = true;
    setTimeout(backToFeed, 2000);
  }
}

function backToFeed() {
  document.location.href = "/posts";
}
