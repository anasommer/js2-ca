/**
 * Searches for a specified value within the current page.
 *
 * @param {Event} event - The event object triggered by the user action.
 * @returns {void}
 */
export function search(event) {
  event.preventDefault();
  const searchValue = document.querySelector("#search").value.toLowerCase();
  window.find(searchValue);
}
