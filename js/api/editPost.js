import { BASE_URL } from "../api/constants.js";
import { accessToken } from "./token.js";
import { getPostData } from "../handlers/getPostData.js";
import { getPostId } from "../handlers/getPostId.js";
import { updatePost } from "../handlers/updatePost.js";

const form = document.querySelector("#editPostForm");
const id = getPostId();

form.addEventListener("submit", updatePost);

function editPost() {
  getPostData(BASE_URL, accessToken, id);
}

editPost(id);
