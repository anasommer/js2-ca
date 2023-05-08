import { BASE_URL } from "../api/constants.js";
import { displayMessage } from "../ui/displayMessage.js";

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
