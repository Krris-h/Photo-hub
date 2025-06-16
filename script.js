// Show welcome popup on load
function showWelcome() {
  document.getElementById("welcome-message").style.display = "flex";
}

// Hide welcome popup when "Enter Gallery" is clicked
function closeWelcome() {
  document.getElementById("welcome-message").style.display = "none";
}
function toggleLike(btn, photoId) {
  const span = btn.querySelector('.like-count');
  let count = parseInt(localStorage.getItem(photoId)) || 0;

  if (btn.classList.contains('liked')) {
    count--;
    btn.classList.remove('liked');
  } else {
    count++;
    btn.classList.add('liked');
  }

  span.textContent = count;
  localStorage.setItem(photoId, count);
}

// Load saved likes on page load
window.onload = function () {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(btn => {
    const photoId = btn.getAttribute('onclick').match(/'(.+?)'/)[1];
    const count = parseInt(localStorage.getItem(photoId)) || 0;
    const span = btn.querySelector('.like-count');
    span.textContent = count;
    if (count > 0) btn.classList.add('liked');
  });
};