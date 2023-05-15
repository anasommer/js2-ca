import { getPostForm } from "../../helpers/getPostForm.js";

/**
 * Function gets post from API
 * @param {string} url Base link of the API
 * @param {string} token Authorization token stored in local storage
 * @param {number} id Post id
 */
export async function getPostById(url, token, id) {
  const endpoint = "posts/";
  const method = "GET";
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  if (id) {
    await fetch(`${url}${endpoint}${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        const { title, body, tags } = data;

        getPostForm(title, body, tags);
      });
  }
}
