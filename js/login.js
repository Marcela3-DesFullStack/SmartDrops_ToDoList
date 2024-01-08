const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('login')

button.addEventListener('click', (e) => {
  e.preventDefault();

  const dataLogin = {
    username: username.value,
    password: password.value,

     };
  if (!dataLogin.username || !dataLogin.password) {
    alert('Todos los campos son obligatorios');
    return; 
  }
  const url = `http://127.0.0.1:3000/pages/tasks.html?username=${encodeURIComponent(username.value)}`;
  
  window.location.href = url;
});
  


  

   


 

  
  
  










