import { BASE_URL } from "../constants.js";
import { accessToken } from "../token.js";
import { getPostId } from "../../helpers/getPostId.js";
import { backToFeed } from "../../helpers/backToFeed.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/** Constant that holds post ID */
const id = getPostId();

/**
 * Function for updatind the post using PUT method, makes API call inside the function
 * @param {event} event
 */
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
