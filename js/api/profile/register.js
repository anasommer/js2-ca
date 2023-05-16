import { BASE_URL } from "../constants.js";
import { fetchData } from "../fetchData.js";

export async function handleRegister(profile) {
  const endpoint = "auth/register";
  const method = "POST";
  const body = JSON.stringify(profile);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  };

  fetchData(BASE_URL, endpoint, options);
}
