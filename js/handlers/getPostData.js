import { getPostForm } from "./getPostForm.js";

const form = document.querySelector("#editPostForm");

export async function getPostData(url, token, id) {
  const endpoint = "posts/";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  await fetch(`${url}${endpoint}${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      const { title, body } = data;
      getPostForm(title, body);
    });
}

// async function updatePost(postTitle, postBody) {
//   const endpoint = "posts/";
//   const method = "PUT";
//   const options = {
//     method,
//     body: JSON.stringify({
//       title: postTitle,
//       body: postBody,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${JSON.parse(token)}`,
//     },
//   };

//   await fetch(`${url}${endpoint}5620`, options)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
