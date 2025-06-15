// script.js
function showWelcome() {
  document.getElementById("welcome-message").style.display = "flex";
}

function closeWelcome() {
  document.getElementById("welcome-message").style.display = "none";
}
function likePhoto(button) {
  const countSpan = button.querySelector('.like-count');
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}
function toggleLike(button) {
  // Check if already liked
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.innerHTML = "❤ Like";
  } else {
    button.classList.add("liked");
    button.innerHTML = "💖 Liked";
  }
}