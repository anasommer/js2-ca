import { BASE_URL } from "../api/constants.js";
import { renderPosts } from "../ui/posts/renderPosts.js";

/**
 * Fetches and displays posts based on a specified tag.
 *
 * @param {Event} event - The event object triggered by the user action.
 * @returns {void}
 */

export async function showPostByTags(event) {
  const tag = event.target.getAttribute("data-tags");
  const feedContainer = document.querySelector("#feedContainer");

  const token = localStorage.getItem("accessToken");

  const endpoint = "posts/?_tag=";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  feedContainer.innerHTML = "";

  fetch(`${BASE_URL}${endpoint}${tag}`, options).then((response) =>
    response.json().then((posts) =>
      posts.map((post) => {
        renderPosts(post, feedContainer);
      })
    )
  );
}
