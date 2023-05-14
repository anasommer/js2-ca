import { BASE_URL } from "../api/constants.js";
import { accessToken } from "../api/token.js";
import { getPostData } from "../api/posts/getPostData.js";
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
 * Function that calls another function to get post data for the post which will be edited by the user
 */
export function editPost() {
  getPostData(BASE_URL, accessToken, getPostId());
}

editPost();
