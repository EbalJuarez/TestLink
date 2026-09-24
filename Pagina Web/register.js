const API_URL = 'http://localhost:3000';
const registerForm = document.getElementById('registerForm');
const registerStatus = document.getElementById('registerStatus');

async function requestAPI(endpoint, method = 'POST', body = null) {
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

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const payload = {
    username: formData.get('username').toString().trim(),
    password: formData.get('password').toString(),
    rol_id: Number(formData.get('rol_id')),
  };

  const odontologoId = formData.get('odontologo_id');
  const pacienteId = formData.get('paciente_id');

  if (odontologoId && odontologoId !== '') {
    payload.odontologo_id = Number(odontologoId);
  }

  if (pacienteId && pacienteId !== '') {
    payload.paciente_id = Number(pacienteId);
  }

  try {
    const result = await requestAPI('usuarios', 'POST', payload);
    registerStatus.textContent = `Usuario creado correctamente: ${result.username || payload.username}`;
    registerStatus.className = 'status-ok';
    registerForm.reset();
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 700);
  } catch (error) {
    registerStatus.textContent = error.message;
    registerStatus.className = 'status-error';
  }
});
