/**
 * Search a word or a sentence on the page
 * @param {event} event Search input
 */
export function search(event) {
  event.preventDefault();
  const searchValue = document.querySelector("#search").value.toLowerCase();
  window.find(searchValue);
}
