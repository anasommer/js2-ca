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
  const newPost = Object.fromEntries(formData.entries());
  console.log(newPost);
});

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
