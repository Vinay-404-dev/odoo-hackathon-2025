const form = document.getElementById('profileForm');
const token = localStorage.getItem('token');

if (!token) {
  alert('Please login first.');
  window.location.href = 'login.html';
}

async function loadProfile() {
  const res = await fetch('http://localhost:5000/api/profile', {
    headers: { Authorization: token }
  });

  if (!res.ok) {
    alert('Could not load profile');
    return;
  }

  const profile = await res.json();
  form.skillsOffered.value = (profile.skillsOffered || []).join(',');
  form.skillsWanted.value = (profile.skillsWanted || []).join(',');
  form.availability.value = profile.availability || '';
  form.isPublic.checked = profile.isPublic || false;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    skillsOffered: form.skillsOffered.value.split(',').map(s => s.trim()),
    skillsWanted: form.skillsWanted.value.split(',').map(s => s.trim()),
    availability: form.availability.value,
    isPublic: form.isPublic.checked
  };

  const res = await fetch('http://localhost:5000/api/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert('Profile updated!');
  } else {
    alert('Failed to update');
  }
});

loadProfile();
