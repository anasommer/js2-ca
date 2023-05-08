export function getPostForm(title, body) {
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");

  postTitle.value = title;
  postBody.value = body;
}
