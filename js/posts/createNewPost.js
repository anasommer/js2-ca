import { BASE_URL } from "../api/constants.js";
import { sendNewPost } from "../api/sendNewPost.js";
import { accessToken } from "../api/token.js";

const newPostForm = document.querySelector("#newPostForm");

const endpoint = "posts";
const method = "POST";

newPostForm.addEventListener("submit", getNewPostData);

function getNewPostData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPostData = Object.fromEntries(formData.entries());
  const { postTitle, postBody } = newPostData;
  const newPostOptions = {
    method,
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  sendNewPost(BASE_URL, endpoint, newPostOptions);
}
