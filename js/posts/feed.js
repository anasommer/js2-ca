import { getPosts } from "../api/getPosts.js";
import spinner from "./spinner.js";
import { search } from "./search.js";

const token = localStorage.getItem("accessToken");
const feedContainer = document.querySelector("#feedContainer");
const searchBtn = document.querySelector("#search-btn");

async function showFeed(token, element) {
  token && element.append(spinner);
}

showFeed(token, feedContainer);
getPosts(feedContainer);

searchBtn.addEventListener("click", search);
