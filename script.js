// Signup form
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  // Store username and password in local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('Signup successful!');
  signupForm.reset();
});

// Login form
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve username and password from local storage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    // Redirect to the success page
    window.location.href = 'index.html';
  } else {
    alert('Ops, TRY AGAIN!');
    loginForm.reset();
  }
});
