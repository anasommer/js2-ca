/**
 * Retrieves the post ID from the current URL query string.
 *
 * @returns {string|null} The post ID, or null if it is not found in the query string.
 */
export function getPostId() {
  const queryString = document.location.search;
  const parameter = new URLSearchParams(queryString);
  const id = parameter.get("id");
  return id;
}

getPostId();
