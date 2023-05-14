import { getPostId } from "../helpers/getPostId.js";
import { BASE_URL } from "../api/constants.js";
import { renderPosts } from "../../js/ui/posts/renderPosts.js";

const feedContainer = document.querySelector("#feedContainer");

const token = localStorage.getItem("accessToken");

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
    await fetch(`${BASE_URL}${endpoint}${id}`, options).then((response) =>
      response.json().then((data) => {
        feedContainer.innerHTML = "";
        renderPosts(data, feedContainer);
      })
    );
  }
}

showPostById();
