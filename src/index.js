const formTag = document.querySelector('#create-task-form');
const ulTag = document.querySelector('#tasks');
const deleteTag = document.querySelector('#')
const addTask = (task) => {
    liTag = `<li>${task}</li>`;
    ulTag.innerHTML+= liTag
};

formTag.addEventListener('submit', (e) =>{
    e.preventDefault();
    let task = e.target.parentElement.querySelector('#new-task-description').value;
    addTask(task);
});

// need a function to delete a specific task
const deleteTask = (task) => {

};