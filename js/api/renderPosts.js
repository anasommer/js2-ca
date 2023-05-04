import spinner from "../posts/spinner.js";

export function renderPosts(post, element) {
  spinner.style.display = "none";
  const { title, body, id } = post;

  const postItem = document.createElement("div");
  postItem.classList.add("post");

  const postTitle = document.createElement("h2");
  postTitle.textContent = `${title}`;
  postItem.append(postTitle);

  const postId = document.createElement("a");
  postId.setAttribute("href", `?id=${id}`);
  postId.textContent = `#${id}`;
  postItem.append(postId);

  const postBody = document.createElement("p");
  postBody.textContent = `${body}`;
  postItem.append(postBody);

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-edit");
  editBtn.textContent = "Edit";
  postItem.append(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-warning");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", "id");
  deleteBtn.addEventListener("click", deletePost);
  postItem.append(deleteBtn);

  element.append(postItem);
}

function deletePost(event) {
  // confirm("Please confirm deleting of post");
  console.log(event.getAttribute("id"));
}
