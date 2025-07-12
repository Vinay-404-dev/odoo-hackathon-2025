const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: form.email.value,
    password: form.password.value
  };

  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  
  if (res.ok) {
    localStorage.setItem('token', result.token);
    alert('Login successful');
    window.location.href = 'profile.html';
  } else {
    alert(result.msg || 'Login failed');
  }
});
