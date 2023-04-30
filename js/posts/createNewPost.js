const newPostForm = document.querySelector("#newPostForm");

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newPost = Object.fromEntries(formData.entries());
  console.log(newPost);
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const profile = Object.fromEntries(formData.entries());

//   login(profile);
// });
