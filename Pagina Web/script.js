const API_URL = 'http://localhost:3000';
const defaultEndpoint = 'pacientes';

const endpointSelect = document.getElementById('endpointSelect');
const entityForm = document.getElementById('entityForm');
const responseBox = document.getElementById('responseBox');
const tableBody = document.getElementById('tableBody');
const statusText = document.getElementById('statusText');
const idField = document.getElementById('idField');
const idInput = document.getElementById('idInput');
const methodSelect = document.getElementById('methodSelect');
const formTitle = document.getElementById('formTitle');
const resetFormBtn = document.getElementById('resetFormBtn');
const clearFormBtn = document.getElementById('clearFormBtn');
const logoutBtn = document.getElementById('logoutBtn');

function protectPage() {
  const usuario = localStorage.getItem('usuarioActivo');
  if (!usuario) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

function logout() {
  localStorage.removeItem('usuarioActivo');
  window.location.href = 'login.html';
}

if (!protectPage()) {
  throw new Error('No autenticado');
}

const payloadFields = {
  pacientes: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
  ],
  odontologos: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'apellido', label: 'Apellido', type: 'text' },
    { name: 'especialidad', label: 'Especialidad', type: 'text' },
  ],
  facturas: [
    { name: 'fecha', label: 'Fecha', type: 'date' },
    { name: 'total', label: 'Total', type: 'number', step: '0.01' },
    { name: 'pacienteId', label: 'Paciente ID', type: 'number' },
  ],
  medicamentos: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'descripcion', label: 'Descripción', type: 'text' },
    { name: 'precio', label: 'Precio', type: 'number', step: '0.01' },
  ],
  usuarios: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'correo', label: 'Correo', type: 'email' },
    { name: 'password', label: 'Contraseña', type: 'password' },
  ],
  citas: [
    { name: 'fecha', label: 'Fecha', type: 'date' },
    { name: 'hora', label: 'Hora', type: 'time' },
    { name: 'pacienteId', label: 'Paciente ID', type: 'number' },
  ],
  recetas: [
    { name: 'fecha', label: 'Fecha', type: 'date' },
    { name: 'descripcion', label: 'Descripción', type: 'text' },
    { name: 'pacienteId', label: 'Paciente ID', type: 'number' },
  ],
  tratamientos: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'descripcion', label: 'Descripción', type: 'text' },
  ],
  roles: [
    { name: 'nombre', label: 'Nombre', type: 'text' },
  ],
  detalle_facturas: [
    { name: 'facturaId', label: 'Factura ID', type: 'number' },
    { name: 'medicamentoId', label: 'Medicamento ID', type: 'number' },
    { name: 'cantidad', label: 'Cantidad', type: 'number' },
  ],
  receta_detalle: [
    { name: 'recetaId', label: 'Receta ID', type: 'number' },
    { name: 'medicamentoId', label: 'Medicamento ID', type: 'number' },
    { name: 'cantidad', label: 'Cantidad', type: 'number' },
  ],
};

function renderFormFields(entity) {
  const fields = payloadFields[entity] || [];
  const formFieldsContainer = document.getElementById('formFields');
  formFieldsContainer.innerHTML = '';

  fields.forEach((field) => {
    const label = document.createElement('label');
    label.textContent = field.label;

    const input = document.createElement('input');
    input.name = field.name;
    input.type = field.type || 'text';
    input.step = field.step || undefined;
    input.placeholder = field.label;

    label.appendChild(input);
    formFieldsContainer.appendChild(label);
  });
}

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.className = isError ? 'status-error' : 'status-ok';
}

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

async function requestAPI(endpoint, method = 'GET', body = null, id = null) {
  const url = `${API_URL}/${endpoint}${id !== null && id !== '' ? `/${id}` : ''}`;

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

function clearForm() {
  entityForm.reset();
  idInput.value = '';
  idField.style.display = 'none';
  methodSelect.value = 'POST';
  formTitle.textContent = `Crear ${endpointSelect.value}`;
}

async function loadData() {
  const endpoint = endpointSelect.value;
  try {
    const data = await requestAPI(endpoint, 'GET');
    renderTable(data, endpoint);
    responseBox.textContent = formatJson(data);
    setStatus(`Datos cargados de ${endpoint}`);
  } catch (error) {
    responseBox.textContent = error.message;
    setStatus(error.message, true);
    tableBody.innerHTML = '';
  }
}

function renderTable(data, endpoint) {
  tableBody.innerHTML = '';

  if (!Array.isArray(data) || data.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="10">No hay registros</td></tr>';
    return;
  }

  const firstItem = data[0];
  const columns = Object.keys(firstItem);
  const headerRow = document.querySelector('thead tr');
  headerRow.innerHTML = '';

  columns.forEach((col) => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
  });

  const actionHeader = document.createElement('th');
  actionHeader.textContent = 'Acciones';
  headerRow.appendChild(actionHeader);

  data.forEach((item) => {
    const row = document.createElement('tr');

    columns.forEach((col) => {
      const cell = document.createElement('td');
      cell.textContent = item[col] ?? '—';
      row.appendChild(cell);
    });

    const actions = document.createElement('td');
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Editar';
    btnEdit.className = 'secondary';
    btnEdit.onclick = () => fillFormForEdit(endpoint, item);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Eliminar';
    btnDelete.className = 'danger';
    btnDelete.onclick = async () => {
      const id = item.id ?? item[`${endpoint.slice(0, -1)}_id`];
      if (id === undefined || id === null || id === '') {
        alert('No se encontró el ID para eliminar');
        return;
      }

      try {
        await requestAPI(endpoint, 'DELETE', null, id);
        setStatus(`Registro ${id} eliminado de ${endpoint}`);
        await loadData();
      } catch (error) {
        setStatus(error.message, true);
      }
    };

    actions.appendChild(btnEdit);
    actions.appendChild(btnDelete);
    row.appendChild(actions);
    tableBody.appendChild(row);
  });
}

function fillFormForEdit(endpoint, item) {
  methodSelect.value = 'PUT';
  idField.style.display = 'block';
  idInput.value = item.id ?? item[`${endpoint.slice(0, -1)}_id`] ?? '';
  formTitle.textContent = `Editar ${endpoint}`;

  const fields = payloadFields[endpoint] || [];
  fields.forEach((field) => {
    const input = entityForm.querySelector(`[name="${field.name}"]`);
    if (input) {
      input.value = item[field.name] ?? '';
    }
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  const endpoint = endpointSelect.value;
  const method = methodSelect.value;
  const id = idInput.value.trim();
  const formData = new FormData(entityForm);
  const payload = {};

  formData.forEach((value, key) => {
    if (key !== 'id' && value !== '') payload[key] = value;
  });

  try {
    if (method === 'POST') {
      const result = await requestAPI(endpoint, 'POST', payload);
      responseBox.textContent = formatJson(result);
      setStatus(`Registro creado en ${endpoint}`);
    } else if (method === 'PUT') {
      if (!id) {
        throw new Error('Debes ingresar un ID para actualizar');
      }
      const result = await requestAPI(endpoint, 'PUT', payload, id);
      responseBox.textContent = formatJson(result);
      setStatus(`Registro ${id} actualizado en ${endpoint}`);
    }

    clearForm();
    await loadData();
  } catch (error) {
    responseBox.textContent = error.message;
    setStatus(error.message, true);
  }
}

endpointSelect.addEventListener('change', async () => {
  const endpoint = endpointSelect.value;
  renderFormFields(endpoint);
  clearForm();
  await loadData();
});

methodSelect.addEventListener('change', () => {
  const isPut = methodSelect.value === 'PUT';
  idField.style.display = isPut ? 'block' : 'none';
  formTitle.textContent = isPut ? `Editar ${endpointSelect.value}` : `Crear ${endpointSelect.value}`;
});

resetFormBtn.addEventListener('click', () => {
  clearForm();
});

clearFormBtn.addEventListener('click', () => {
  clearForm();
});

logoutBtn.addEventListener('click', () => {
  logout();
});

document.getElementById('loadBtn').addEventListener('click', loadData);
entityForm.addEventListener('submit', handleSubmit);

renderFormFields(defaultEndpoint);
loadData();
