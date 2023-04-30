const token = localStorage.getItem("accessToken");
const feedContainer = document.getElementById("feedContainer");
import { getPosts } from "../api/getPosts.js";
import spinner from "./spinner.js";

async function showFeed(token, element) {
  //   feedContainer.innerHTML = "";
  //   const post = document.createElement("p");
  //   post.textContent = token;
  //   element.append(post);
  token && element.append(spinner);
}

showFeed(token, feedContainer);
getPosts(feedContainer);
