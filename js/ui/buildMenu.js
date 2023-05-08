export function buildMenu() {
  const menu = document.querySelector("#menu");
  const path = window.location.pathname;
  const token = localStorage.getItem("accessToken");

  if (token) {
    menu.innerHTML = `
        <li class="nav-item">
        <a class="nav-link ${
          path === "/" || path === "/index.html" ? "active" : ""
        }" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${
          path === "/posts/" ? "active" : ""
        }" aria-current="page" href="/posts"
          >Dashboard</a
        >
      </li>
      <li class="nav-item">
        <a
          class="btn btn-warning" id="logout-btn"
          aria-current="page"
          href="/"
          >Log Out</a
        >
      </li>
    
        `;

    document.querySelector("#logout-btn").addEventListener("click", () => {
      const userResponse = confirm("Are you sure you want log out?");
      userResponse && localStorage.clear();
    });
  } else {
    menu.innerHTML = `
    <li class="nav-item">
    <a class="nav-link ${
      path === "/" || path === "/index.html" ? "active" : ""
    }" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${
      path === "/login.html" ? "active" : ""
    }" aria-current="page" href="/profile/login.html"
      >Login</a
    >
  </li>
  <li class="nav-item">
    <a
      class="nav-link ${path === "/profile/register.html" ? "active" : ""}"
      aria-current="page"
      href="/profile/register.html"
      >Register</a
    >
  </li>
    `;
  }
}
