const form = document.getElementById('formTask');
const taskInput = document.getElementById('task');
const descriptionInput = document.getElementById('description');
const tableBody = document.getElementById('tableBody');
const showAllButton = document.getElementById('showAll');
const showCheckedButton = document.getElementById('showChecked');
const noTasksMessage = document.getElementById('noTasksMessage');

// Local storage
let data = JSON.parse(localStorage.getItem('formData')) || [];

// Add tasks
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const task = taskInput.value;
  const description = descriptionInput.value;

  if (task && description) {
    const newData = { checked: false, task, description };
    data.push(newData);
    saveDataToLocalStorage();
    renderTable();
    form.reset();
  } else {
    alert('Todos los campos son obligatorios');
  }
});

// Saving data
function saveDataToLocalStorage() {
  localStorage.setItem('formData', JSON.stringify(data));
}

// Function to show checked tasks
function showCheckedTasks() {
  const checkedData = [];

  for (const item of data) {
    if (item.checked) {
      checkedData.push(item);
    }
  }

  return checkedData;
}

// Render UI
function renderTable() {
  tableBody.innerHTML = '';

  // Create cells and buttons
  data.forEach(function (item, index) {
    const row = document.createElement('tr');
    const checkedCell = document.createElement('td');
    const checkedCheckbox = document.createElement('input');
    const taskCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const actionsnCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    checkedCheckbox.type = 'checkbox';
    checkedCheckbox.checked = item.checked;

    taskCell.textContent = item.task;
    descriptionCell.textContent = item.description;

    // Giving styles to buttons and checkbox
    checkedCheckbox.type = 'checkbox';
    checkedCheckbox.classList.add('checkbox');
    checkedCheckbox.checked = item.checked;

    editButton.classList.add('button', 'button--secondary');
    deleteButton.classList.add('button', 'button--tertiary');

    // Changing buttons for icons
    editButton.innerHTML = '<i class="fas fa-edit"></i> ';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    // Edit task button
    editButton.addEventListener('click', function () {
      editData(index);
    });

    // Delete task button
    deleteButton.addEventListener('click', function () {
      deleteData(index);
    });

    checkedCell.appendChild(checkedCheckbox);
    actionsnCell.appendChild(editButton);
    actionsnCell.appendChild(deleteButton);

    row.appendChild(checkedCell);
    row.appendChild(taskCell);
    row.appendChild(descriptionCell);
    row.appendChild(actionsnCell);

    tableBody.appendChild(row);
  });
  updateNoTasksMessage();
}

// Edit data
function editData(index) {
  const item = data[index];
  taskInput.value = item.task;
  descriptionInput.value = item.description;
  data.splice(index, 1);
  saveDataToLocalStorage();
  renderTable();
}

// Delete data
function deleteData(index) {
  data.splice(index, 1);
  saveDataToLocalStorage();
  renderTable();
}

// Update No Tasks message
function updateNoTasksMessage() {
  if (data.length === 0) {
    noTasksMessage.style.display = 'block';
  } else {
    noTasksMessage.style.display = 'none';
  }
}


/// Event listener for show all button
showAllButton.addEventListener('click', function () {
  renderTable(data);
});

showCheckedButton.addEventListener('click', function() {
  const checkedData = showCheckedTasks(); // Obtener las tareas checkeadas
  const tableBody = document.getElementById('tableBody');
  const rows = tableBody.querySelectorAll('tr');

  for (const row of rows) {
    const checkboxCell = row.querySelector('td input[type="checkbox"]'); // Obtener la celda del checkbox
    const checkbox = checkboxCell.checked; // Obtener el valor del checkbox

    if (checkbox) {
      const taskCell = row.querySelector('td:nth-child(2)'); // Obtener la celda de la tarea
      const task = taskCell.textContent;

      // Verificar si la tarea está en los datos checkeados
      const taskInCheckedData = checkedData.some((item) => item.task === task);

      // Mostrar u ocultar la fila según el estado de la tarea checkeada
      row.style.display = taskInCheckedData ? '' : 'none';
    }
  }
});



// Initial render
renderTable();  



