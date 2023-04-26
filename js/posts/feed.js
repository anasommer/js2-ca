const token = localStorage.getItem("accessToken");
const feedContainer = document.getElementById("feedContainer");

async function showFeed(token, element) {
  feedContainer.innerHTML = "";
  const post = document.createElement("p");
  post.textContent = token;
  element.append(post);
}

showFeed(token, feedContainer);
