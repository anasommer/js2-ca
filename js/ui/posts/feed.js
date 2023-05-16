import { getPosts } from "../../api/posts/getPosts.js";
import spinner from "../utils/spinner.js";
import { search } from "../../listeners/search.js";

/**
 * Sets up the functionality for the feed page.
 *
 * @returns {void}
 */
export function feed() {
  const token = localStorage.getItem("accessToken");
  const feedContainer = document.querySelector("#feedContainer");
  const searchBtn = document.querySelector("#search-btn");

  async function showFeed(token, element) {
    if (token && element) {
      token && element.append(spinner);
    }
  }

  showFeed(token, feedContainer);
  getPosts(feedContainer);

  searchBtn.addEventListener("click", search);
}

feed();
