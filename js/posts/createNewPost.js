import { BASE_URL } from "../api/constants.js";
import { sendNewPost } from "../api/posts/sendNewPost.js";
import { accessToken } from "../api/token.js";

/**
 * Create new post and make an API call
 */
export function createNewPost() {
  const newPostForm = document.querySelector("#newPostForm");

  const endpoint = "posts";
  const method = "POST";

  newPostForm.addEventListener("submit", getNewPostData);

  function getNewPostData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPostData = Object.fromEntries(formData.entries());
    const { postTitle, postBody, postTags } = newPostData;
    const newPostOptions = {
      method,
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        tags: [postTags],
      }),
      headers: {
        Authorization: `Bearer ${JSON.parse(accessToken)}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    sendNewPost(BASE_URL, endpoint, newPostOptions);
  }
}
