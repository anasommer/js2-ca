import { BASE_URL } from "../api/constants.js";
import { accessToken } from "../api/token.js";
import { getPostById } from "../api/posts/getPostById.js";
import { getPostId } from "../helpers/getPostId.js";
import { updatePost } from "../api/posts/updatePost.js";

/**
 * Constant for holding form element
 */
const form = document.querySelector("#editPostForm");

if (form) {
  form.addEventListener("submit", updatePost);
}

/**
 * Fetches and displays the post to be edited.
 *
 * @returns {void}
 */
export function editPost() {
  getPostById(BASE_URL, accessToken, getPostId());
}

editPost();
