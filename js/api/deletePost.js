import { BASE_URL } from "../api/constants.js";
import { accessToken } from "./token.js";

export async function deletePost(postId) {
  const endpoint = "posts/";
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    await fetch(`${BASE_URL}${endpoint}${postId}`, options);
  } finally {
    window.location.reload();
  }
}
