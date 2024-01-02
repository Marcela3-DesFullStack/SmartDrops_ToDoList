const form = document.getElementById('formTask');
const taskInput = document.getElementById('task');
const descriptionInput = document.getElementById('description');
const tableBody = document.getElementById('tableBody');

//Local storage
let data = JSON.parse(localStorage.getItem('formData')) || [];


// Add tasks
form.addEventListener('submit', function (event)  {
  event.preventDefault();

  const task = taskInput.value;
  const description = descriptionInput.value;

  if(task && description) {
    const newData = {task, description};
    data.push(newData);
    saveDataToLocalStorage();
    renderTable();
    form.reset();
  } else {
    alert('Todos los campos son obligatorios')
  }
})
//Saving data
function saveDataToLocalStorage() {
  localStorage.setItem ('formData', JSON.stringify(data));
}
//Render UI
function renderTable() {
  tableBody.innerHTML= '';

 //Create cells and buttons
  data.forEach(function(item, index){
    const row = document.createElement('tr');
    const checkedCell = document.createElement('td');
    const checkedCheckbox = document.createElement('input');
    const taskCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const actionsnCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    
    taskCell.textContent = item.task;
    descriptionCell.textContent = item.description;
    

    // Giving styles to buttons and checkbox
    checkedCheckbox.type = 'checkbox';
    checkedCheckbox.classList.add('checkbox');
    checkedCheckbox.checked = false; 
    editButton.classList.add('button', 'button--secondary');
    deleteButton.classList.add('button', 'button--tertiary');

    // Changing buttons for icons
    editButton.innerHTML = '<i class="fas fa-edit"></i> ';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    

    // Edit task button
    editButton.addEventListener('click', function() {
      editData(index);
    })

    //Delete task button
    deleteButton.addEventListener('click', function() {
      deleteData(index);
    })

    checkedCell.appendChild(checkedCheckbox);
    actionsnCell.appendChild(editButton);
    actionsnCell.appendChild(deleteButton);

    row.appendChild(checkedCell);
    row.appendChild(taskCell);
    row.appendChild(descriptionCell);
    row.appendChild(actionsnCell);

    tableBody.appendChild(row);

  });
}
// Edit data
function editData(index) {
  const item = data[index];
  taskInput.value = item.task;
  descriptionInput.value = item.description;
  data.splice(index, 1) ;
  saveDataToLocalStorage();
  renderTable();
}

// Delete data
function deleteData(index) {
  data.splice(index, 1) ;
  saveDataToLocalStorage();
  renderTable();
}



//Render Table
renderTable();

// Without Tasks message

if (data.length === 0) {
  const noTasksMessage = document.getElementById('noTasksMessage');
  noTasksMessage.style.display = 'block';
} else {
  const noTasksMessage = document.getElementById('noTasksMessage');
  noTasksMessage.style.display = 'none';
}
