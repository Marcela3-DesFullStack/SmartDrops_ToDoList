const date = document.querySelector("#date");
const taskList = document.querySelector("#tasklist");
const input = document.querySelector("#input");
const taskEnter = document.querySelector("#task-enter");


// Adding tasks//
function addTask (task) {
    const elementTask = `<li id="elementotask">
                        <i class="fa-sharp fa-regular fa-circle" style="color: #f1f3f8;"></i>
                        <p class="text">${task}</p>
                        <i id="readmore.btn" class="fa-solid fa-circle-plus" style="color: #f1f3f8;"></i>
                       <i class="fa-solid fa-trash-can" style="color: #f1f3f8;"></i> 
                        </li>  
                    `
    taskList.insertAdjacentHTML("beforeend", elementTask);
}
taskEnter.addEventListener('click',()=> {
    const task = input.value
    if(task) {
        addTask(task)
    }
    input.value= ''

})
// Hidden comments//
let hiddenTaskBtn= document.getElementById("hiddentask-btn");
let hiddenTask = document.getElementById("hiddentask");

hiddenTaskBtn.addEventListener('click',hideText);

function hideText () {
    hiddenTask.classList.toggle('show');
}
