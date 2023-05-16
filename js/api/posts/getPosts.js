import { BASE_URL } from "../constants.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";

/** How many posts to show by default on the Feed */
const postsToShow = 20;

/**
 * Fetches and renders posts for a specific user.
 *
 * @param {Element} element - The element where the posts will be rendered.
 * @returns {Promise<void>} A promise that resolves when the posts are fetched and rendered.
 */

export async function getPosts(element) {
  const token = localStorage.getItem("accessToken");
  const username = JSON.parse(localStorage.getItem("username"));
  const endpoint = `profiles/${username}/posts`;
  const url = `${BASE_URL}${endpoint}`;
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (token) {
    fetch(`${BASE_URL}${endpoint}`, options).then((response) =>
      response.json().then((posts) =>
        posts.map((post, index) => {
          if (index < postsToShow) {
            renderPosts(post, element);
          }
        })
      )
    );
  }
}
