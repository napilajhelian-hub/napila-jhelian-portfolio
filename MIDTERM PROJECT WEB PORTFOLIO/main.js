// Typing animation
const typingText = document.getElementById("typing-text");
const phrases = ["Web Developer", "Minimalist Designer", "JavaScript Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function type() {
  typingText.textContent = phrases[i].substring(0, j);

  if (!isDeleting && j < phrases[i].length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

// Contact form (dummy)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "✅ Message Sent!";
  this.reset();
});
