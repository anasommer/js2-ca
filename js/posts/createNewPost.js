import { BASE_URL } from "../api/constants.js";
import { sendNewPost } from "../api/sendNewPost.js";
import { accessToken } from "../api/token.js";

const newPostForm = document.querySelector("#newPostForm");

const endpoint = "posts";
const method = "POST";

console.log(JSON.parse(accessToken));
newPostForm.addEventListener("submit", getNewPostData);

function getNewPostData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPostData = Object.fromEntries(formData.entries());

  const newPostOptions = {
    method,
    body: JSON.stringify({
      title: newPostData.postTitle,
      body: newPostData.postBody,
    }),
    headers: {
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  sendNewPost(BASE_URL, endpoint, newPostOptions);
}
