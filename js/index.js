const date = document.querySelector(#date)
const taskList = document.querySelector(#tasklist)
const input = document.querySelector(#input)
const addTask = document.querySelector(#addtask)

// Adding tasks//
function addTask (task) {
    const elementTask = `<i class="fa-sharp fa-regular fa-circle" style="color: #f1f3f8;"></i>
                        <p class="text">${task}</p>
                        <i id="readmore.btn" class="fa-solid fa-circle-plus" style="color: #f1f3f8;"></i>
                        <i class="fa-solid fa-trash-can" style="color: #f1f3f8;"></i>  
                    `
    tasklist.insertAdjacentHTML("beforend", elementTask);
}
addTask.addEventListener('click',()=> {
    const task = input.value
    if(task) {
        addTask(task)
    }
    input.value=""
})