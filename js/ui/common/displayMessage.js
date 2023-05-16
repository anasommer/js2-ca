/**
 * Displays a message on the page.
 *
 * @param {string} [color="success"] - The color of the message. Defaults to "success".
 * @param {string} [message="Success!"] - The message to display. Defaults to "Success!".
 * @returns {void}
 */
export function displayMessage(color = "success", message = "Success!") {
  document.getElementById("message").innerHTML = `
  <div class="alert alert-${color}" role="alert">
 ${message}
</div>
    `;
}
