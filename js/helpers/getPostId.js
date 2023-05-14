/**
 * Function for getting and storing post ID
 * @returns unique post ID for each post
 */
export function getPostId() {
  const queryString = document.location.search;
  const parameter = new URLSearchParams(queryString);
  const id = parameter.get("id");
  return id;
}

getPostId();
