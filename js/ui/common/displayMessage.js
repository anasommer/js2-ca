const path = window.location.pathname;

/**
 * Shows the message to the user if something is ok or wrong
 * @param {string} color Bootstrap color for coloring the message alert
 * @param {string} message The message user will see about the success or error
 */
export function displayMessage(color = "success", message = "Success!") {
  document.getElementById("message").innerHTML = `
  <div class="alert alert-${color}" role="alert">
 ${message}
</div>
    `;
}
