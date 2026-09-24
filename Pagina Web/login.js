const API_URL = 'http://localhost:3000';
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

function redirectToDashboard() {
  window.location.href = 'index.html';
}

function isLoggedIn() {
  return Boolean(localStorage.getItem('usuarioActivo'));
}

if (isLoggedIn()) {
  redirectToDashboard();
}

async function requestAPI(endpoint, method = 'GET', body = null) {
  const url = `${API_URL}/${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || `Error ${res.status}`);
  }

  return data;
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const payload = {
    username: formData.get('username').toString().trim(),
    password: formData.get('password').toString(),
  };

  try {
    const result = await requestAPI('usuarios/login', 'POST', payload);

    if (!result?.usuario) {
      throw new Error('No se recibió información del usuario');
    }

    localStorage.setItem('usuarioActivo', JSON.stringify(result.usuario));
    loginStatus.textContent = `Bienvenido ${result.usuario.username}`;
    loginStatus.className = 'status-ok';

    setTimeout(() => redirectToDashboard(), 400);
  } catch (error) {
    loginStatus.textContent = error.message;
    loginStatus.className = 'status-error';
  }
});
