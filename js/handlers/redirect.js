import { BASE_URL } from "../api/constants.js";
import { displayMessage } from "../ui/displayMessage.js";

export async function redirectToPostFeed(accessToken) {
  accessToken = localStorage.getItem("accessToken");

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}posts`, options);
    const data = await response.json();

    if (localStorage.getItem("accessToken") === "undefined") {
      displayMessage("warning", "Wrong username or password");
    } else {
      window.location.replace("/posts");
    }
    return data;
  } catch (error) {
    displayMessage("warning", error);
  }
}
