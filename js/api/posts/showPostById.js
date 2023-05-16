import { getPostId } from "../../helpers/getPostId.js";
import { BASE_URL } from "../constants.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";

const feedContainer = document.querySelector("#feedContainer");

const token = localStorage.getItem("accessToken");

/**
 * Shows unique page with only one post by its ID
 */
export async function showPostById() {
  const id = getPostId();

  const endpoint = "posts/";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (id) {
    fetch(`${BASE_URL}${endpoint}${id}`, options).then((response) =>
      response.json().then((data) => {
        if (feedContainer) {
          feedContainer.innerHTML = "";
        }
        renderPosts(data, feedContainer);
      })
    );
  }
}

showPostById();
