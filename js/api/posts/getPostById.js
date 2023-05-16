import { getPostForm } from "../../helpers/getPostForm.js";

/**
 * Fetches a post by its ID and populates a form with the post data.
 *
 * @param {string} url - The base URL of the API.
 * @param {string} token - The access token used for authentication.
 * @param {string} id - The ID of the post to fetch.
 * @returns {Promise<void>} A promise that resolves when the post data is fetched and the form is populated.
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
    fetch(`${url}${endpoint}${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        const { title, body, tags } = data;
        getPostForm(title, body, tags);
      })
      .catch((error) => console.log(error));
  }
}
