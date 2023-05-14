import { BASE_URL } from "../api/constants.js";
import { accessToken } from "../api/token.js";
import { getPostData } from "../api/posts/getPostData.js";
import { getPostId } from "../handlers/getPostId.js";
import { updatePost } from "../api/posts/updatePost.js";

const form = document.querySelector("#editPostForm");
const id = getPostId();

form.addEventListener("submit", updatePost);

function editPost() {
  getPostData(BASE_URL, accessToken, id);
}

editPost(id);
