import { getPostId } from "../handlers/getPostId.js";
import { BASE_URL } from "../api/constants.js";
import { renderPosts } from "../api/renderPosts.js";
const id = getPostId();

const token = localStorage.getItem("accessToken");

async function showPostById(element) {
  const endpoint = "posts/";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  await fetch(`${BASE_URL}${endpoint}${id}`, options).then((response) =>
    response.json().then((data) => {
      renderPosts(data, element);
    })
  );
}

showPostById(feedContainer);
