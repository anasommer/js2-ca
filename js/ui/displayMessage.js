export function displayMessage(color = "success", message = "Success!") {
  document.getElementById("message").innerHTML = `
  <div class="alert alert-${color}" role="alert">
  ${message}
</div>
    `;
}
