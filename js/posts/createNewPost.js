const newPostForm = document.querySelector("#newPostForm");

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPostData = Object.fromEntries(formData.entries());
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const profile = Object.fromEntries(formData.entries());

//   login(profile);
// });
