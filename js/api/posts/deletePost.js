import { BASE_URL } from "../constants.js";
import { accessToken } from "../token.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/**
 * Function deletes the post by getting post ID and prompts delete confirmation from the user before deleting the post.
 * Then when post is deleted the browser will redirect to the posts feed page.
 * @param {number} postId ID of the post which is being deleted
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

  try {
    await fetch(`${BASE_URL}${endpoint}${postId}`, options);
  } catch (error) {
    displayMessage("warning", error);
  } finally {
    window.location.reload();
  }
}
