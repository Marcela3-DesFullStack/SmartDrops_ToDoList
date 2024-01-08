const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('login')

button.addEventListener('click', (e) => {
  e.preventDefault()
  
  const dataLogin = {
    username: username.value,
    password: password.value

  }
  console.log ("Bienvenido " + username.value)
  window.location.href= 'http://127.0.0.1:3000/pages/tasks.html'

})








