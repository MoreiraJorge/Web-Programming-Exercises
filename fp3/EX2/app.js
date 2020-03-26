function addTodo(todo){
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderlist(){
    const listElement = document.querySelector('.list');
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const todosListDOM = todoList.map((todo, index) => {
        return `
        <li>
            <input>
        `
    });
    listElement.innerHTML = todoListDOM.join('');
}




function init() {
    const formElement = document.querySelector('.form');
    formElement.addEventListener('sumbit', (event) => {
        event.preventDefault();
        const todoTitle = event.target.todo_title.value;
        addTodo({
            title: todoTitle
        })
        renderlist();
    })
     renderlist();
}

init();