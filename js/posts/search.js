export function search(event) {
  event.preventDefault();
  const searchValue = document.querySelector("#search").value.toLowerCase();
  window.find(searchValue);
}
