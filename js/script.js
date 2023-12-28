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
  