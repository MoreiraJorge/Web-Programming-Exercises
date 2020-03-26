function add(todo) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function deleteTodo(index) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
}


function renderList() {
    const listElement = document.getElementsByClassName("list")[0];
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const todoListDOM = todoList.map((todo, index) => {
        return `
             <li>
                 <label>
                    <p data-index="${ index}" data-title="${todo.title}" />
                     <span>${ todo.title}</span>
                     <button data-index="${ index}">Delete</button>
                 </label>
             </li>
        `
    });

    listElement.innerHTML = todoListDOM.join('');
}

function createCookie(name){
    document.cookie= ` username= ${ name } `;
}

function checkCookie(name){

    let x = document.cookie;

    if(x.indexOf(name) == -1){
        alert("Non existin user, created new one");
        createCookie(name);
    } else {
        alert("user loaded");
        document.getElementById("logo").innerHTML = ` ${ name } Todo List`;
        document.getElementsByClassName("username")[0].style.display = "none";
    }

}

function init() {
    const formElement = document.getElementsByClassName("form")[0];
    const listElement = document.getElementsByClassName("list")[0];
    const userNameFormElemnent = document.getElementsByClassName("username")[0];

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoTitle = event.target.todo_title.value;
        add({
            title: todoTitle
        });
        renderList();
    });

    listElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTodo(e.target.dataset.index);
            renderList();
        }

    });

    userNameFormElemnent.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.uname.value;
        checkCookie(name);
    });



    renderList();
}

init();