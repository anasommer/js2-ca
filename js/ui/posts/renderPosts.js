import spinner from "../utils/spinner.js";
import { deletePost } from "../../api/posts/deletePost.js";
import { showPostByTags } from "../../listeners/showPostByTags.js";

/**
 * Renders a post on the page.
 *
 * @param {Object} post - The post object.
 * @param {HTMLElement} element - The container element to append the post to.
 * @returns {void}
 */
export function renderPosts(post, element) {
  spinner.style.display = "none";
  const { title, body, id, tags } = post;

  const postItem = document.createElement("div");
  postItem.classList.add("post");

  const postTitle = document.createElement("h2");
  postTitle.textContent = `${title}`;
  postItem.append(postTitle);

  const postId = document.createElement("a");
  postId.setAttribute("href", `post.html?id=${id}`);
  postId.textContent = `#${id}`;
  postItem.append(postId);

  const postBody = document.createElement("p");
  postBody.textContent = `${body}`;
  postItem.append(postBody);

  const postTags = document.createElement("button");
  postTags.classList.add("badge", "text-bg-info");
  postTags.textContent = `#${tags}`;
  postTags.setAttribute("data-tags", tags);
  postTags.addEventListener("click", showPostByTags);
  postItem.append(postTags);

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

  element && element.append(postItem);
}

/**
 * Displays a confirmation dialog for deleting a post and calls the deletePost function if confirmed.
 *
 * @param {Event} event - The click event.
 * @returns {void}
 */
function confirmDelete(event) {
  const postId = event.target.getAttribute("data-id");
  confirm("Please confirm deleting of post") && deletePost(postId);
}

/**
 * Redirects to the edit page for a specific post.
 *
 * @param {Event} event - The click event.
 * @returns {void}
 */
function redirectToEdit(event) {
  const postId = event.target.getAttribute("data-id");
  window.location.replace(`../../posts/edit.html?id=${postId}`);
}
