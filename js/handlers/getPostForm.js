export function getPostForm(title, body, tags) {
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  const postTags = document.querySelector("#postTags");

  postTitle.value = title;
  postBody.value = body;
  postTags.value = tags;
}
