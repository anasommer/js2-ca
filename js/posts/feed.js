const token = localStorage.getItem("accessToken");
const feedContainer = document.getElementById("feedContainer");

async function showFeed(token, element) {
  //   feedContainer.innerHTML = "";
  //   const post = document.createElement("p");
  //   post.textContent = token;
  //   element.append(post);
  token &&
    (element.innerHTML = `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
   
  </div>
</div>`);
}

showFeed(token, feedContainer);
