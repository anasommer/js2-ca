// import { BASE_URL } from "../api/constants.js";
// import { renderPosts } from "../api/renderPosts.js";

// const token = localStorage.getItem("accessToken");

// export async function showPostByTags(element) {
//   const endpoint = "posts/?_tag=";
//   const method = "GET";
//   const options = {
//     method,
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${JSON.parse(token)}`,
//     },
//   };
//   await fetch(`${BASE_URL}${endpoint}${tags}`, options).then((response) =>
//     response.json().then((data) => {
//       renderPosts(data, element);
//     })
//   );
// }

// showPostByTags(feedContainer);
