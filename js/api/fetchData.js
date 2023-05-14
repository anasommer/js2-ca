import { displayMessage } from "../ui/common/displayMessage.js";

export async function fetchData(BASE_URL, endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (response.status === 201) {
      displayMessage("success", "User registered");
    } else {
      displayMessage("warning", "User already exists");
    }
  } catch (error) {
    displayMessage("warning", error);
  }
}
