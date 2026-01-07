const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  messageDiv.textContent = "Tabriklayman, siz ro'yhatdan o'tdingiz!";
  messageDiv.style.color = "green";
});