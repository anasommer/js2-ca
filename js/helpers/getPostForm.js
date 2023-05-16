/**
 * Populates the post form with the provided title, body, and tags.
 *
 * @param {string} title - The title of the post.
 * @param {string} body - The body content of the post.
 * @param {string} tags - The tags associated with the post.
 * @returns {void}
 */
export function getPostForm(title, body, tags) {
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  const postTags = document.querySelector("#postTags");

  if ((postTags, postBody, postTitle)) {
    postTitle.value = title;
    postBody.value = body;
    postTags.value = tags;
  }
}
