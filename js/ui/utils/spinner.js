/**
 * Loader, shown while the clients is waiting for response from the API
 */
const spinner = document.createElement("div");
spinner.innerHTML = `<div class="d-flex justify-content-center">
<div class="spinner-border" role="status">
</div>
</div>`;

export default spinner;
