import { getPosts } from "../api/posts/getPosts.js";
import spinner from "./spinner.js";
import { search } from "./search.js";

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
