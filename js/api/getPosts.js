import { BASE_URL } from "../api/constants.js";
import spinner from "../posts/spinner.js";

export async function getPosts(element) {
  const token = localStorage.getItem("accessToken");
  const endpoint = "posts";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  await fetch(`${BASE_URL}${endpoint}`, options).then((response) =>
    response.json().then((posts) =>
      posts.map((post) => {
        spinner.style.display = "none";
        const postTitle = document.createElement("h2");
        postTitle.textContent = `${post.title}`;
        const postBody = document.createElement("p");
        postBody.textContent = `${post.body}`;
        element.append(postTitle);
        element.append(postBody);
      })
    )
  );
}
