import * as listeners from "../js/listeners/index.js";

export default function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      break;
    case "/profile/login.html":
      listeners.login();
      break;
    case "/profile/register.html":
      // listeners.registerListener();
      break;
  }
}
