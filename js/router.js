import * as listeners from "../js/listeners/index.js";
import * as posts from "../js/api/posts/index.js";
import * as ui from "../js/ui/index.js";

/**
 * Router for JS files
 */
export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      break;
    case "/profile/login.html":
      listeners.login();
      break;
    case "/profile/register.html":
      listeners.register();
      break;
    case "/posts":
    case "/posts/index.html":
      ui.feed();
      break;
    case "/posts/add.html":
      ui.createNewPost();
      break;
    case "/posts/edit.html":
      listeners.editPost();
      break;
    case "/posts/post.html":
      posts.showPostById();
      break;
  }
}
