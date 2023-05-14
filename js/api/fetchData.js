import { displayMessage } from "../ui/common/displayMessage.js";

/**
 * Make a call to API to get data
 * @param {string} BASE_URL Link to the NorOff API
 * @param {string} endpoint Desired endpoint of the API
 * @param {object} options The object containing headers, method, authorization, and other information that API needs
 */
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
