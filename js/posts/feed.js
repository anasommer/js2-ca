const token = localStorage.getItem("accessToken");
const feedContainer = document.querySelector("#feedContainer");
import { getPosts } from "../api/getPosts.js";
import spinner from "./spinner.js";
import { createNewPost } from "./createNewPost.js";

async function showFeed(token, element) {
  token && element.append(spinner);
}

showFeed(token, feedContainer);
getPosts(feedContainer);
// createNewPost();
