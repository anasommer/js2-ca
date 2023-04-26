import { displayMessage } from "../ui/displayMessage.js";

export async function fetchData(BASE_URL, endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();

    if (response.status === 201) {
      displayMessage();
    } else {
      displayMessage("warning", data.errors[0].message);
    }
    return data;
  } catch (error) {
    displayMessage("warning", error);
  }
}
