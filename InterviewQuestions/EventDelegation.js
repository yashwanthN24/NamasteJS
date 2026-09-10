// Event Delegation is based on the concept of Event bubbling

document.querySelector("#Category").addEventListener("click", (e) => {
  //   console.log("Category Parent Clicked");
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

// IF you want to add some same eventListener to many elements , then add it directly
// to the parent as Event bubbling takes place
// This phenomean is called Event delegation

// https://chatgpt.com/c/6aa2932f-1428-83e8-8310-01c7c6f9bdcb
