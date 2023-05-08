import spinner from "../posts/spinner.js";
import { deletePost } from "./deletePost.js";

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
  editBtn.setAttribute("data-id", id);
  editBtn.addEventListener("click", redirectToEdit);
  postItem.append(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-warning");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", id);
  deleteBtn.addEventListener("click", confirmDelete);
  postItem.append(deleteBtn);
  element.append(postItem);
}

function confirmDelete(event) {
  const postId = event.target.getAttribute("data-id");
  confirm("Please confirm deleting of post") && deletePost(postId);
}

function redirectToEdit(event) {
  const postId = event.target.getAttribute("data-id");
  window.location.replace(`../../posts/edit.html?id=${postId}`);
}
