import { BASE_URL } from "../api/constants.js";
import { accessToken } from "./token.js";
import { getPostData } from "../handlers/getPostData.js";

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

function editPost(id) {
  getPostData(BASE_URL, accessToken, id);
}

editPost(id);
