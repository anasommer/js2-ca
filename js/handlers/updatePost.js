import { BASE_URL } from "../api/constants.js";
import { accessToken } from "../api/token.js";
import { getPostId } from "./getPostId.js";
import { backToFeed } from "./backToFeed.js";
import { displayMessage } from "../ui/displayMessage.js";

const id = getPostId();

export async function updatePost(event) {
  event.preventDefault();

  const endpoint = `posts/${id}`;
  const method = "PUT";
  const options = {
    method,
    body: JSON.stringify({
      title: postTitle.value,
      body: postBody.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(accessToken)}`,
    },
  };

  await fetch(`${BASE_URL}${endpoint}`, options).then((response) =>
    response.json().then(displayMessage()).then(setTimeout(backToFeed, 2000))
  );
}
