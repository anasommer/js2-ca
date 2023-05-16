import { BASE_URL } from "../constants.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";

/** How many posts to show by default on the Feed */
const postsToShow = 20;

/**
 * Function gets all the posts from the API to be rendered on the Feed
 * @param {string} element Element container where all posts will be rendered
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
    await fetch(`${BASE_URL}${endpoint}`, options).then((response) =>
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
