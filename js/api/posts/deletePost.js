import { BASE_URL } from "../constants.js";
import { accessToken } from "../token.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/**
 * Deletes a post with the specified ID.
 *
 * @param {string} postId - The ID of the post to delete.
 * @returns {Promise<void>} A promise that resolves when the post is deleted.
 */

export async function deletePost(postId) {
  const endpoint = "posts/";
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(`${BASE_URL}${endpoint}${postId}`, options)
    .then((response) => response.json())
    .catch((error) => displayMessage("warning", error))
    .finally(() => window.location.reload());
}
