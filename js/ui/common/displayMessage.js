const path = window.location.pathname;

export function displayMessage(color = "success", message = "Success!") {
  if (path === "/profile/register.html") {
    message = "User registered";
  }

  document.getElementById("message").innerHTML = `
  <div class="alert alert-${color}" role="alert">
 ${message}
</div>
    `;
}
