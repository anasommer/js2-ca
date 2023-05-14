/**
 * Function for collecting the post title, body and tags
 * @param {string} title Title of the post
 * @param {string} body Body of the post
 * @param {string} tags Post tags
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
