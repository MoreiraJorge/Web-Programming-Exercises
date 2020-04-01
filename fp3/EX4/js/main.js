renderList()
// count initial ToDo
countTodos();

// capture click event
document.getElementById('checkAll').addEventListener('click', function () {
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress', function (e) {
    e.preventDefault // Do not submit form
    if (e.which == 13) { // check if enter is pressed
        var todo = document.getElementById('todo-to-add').value;
        console.log(todo);
        addToDo(todo);
    }
});

// capture click event
document.getElementById('addTODO').addEventListener('click', function () {
    var todo = document.getElementById("todo-to-add").value;
    console.log(todo);
    addToDo(todo);
});


var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener('change', function () {
        if (this.checked == true) {
            var doneItem = this.parentElement.innerText
            $(this).parent().parent().parent().addClass('remove');
            console.log('done item: ' + doneItem);
            done(doneItem);
            countTodos();
        }
    });
}

// capture click event on button minus on Already Done 
var already_done_elements = document.getElementsByClassName("remove-item");
for (var i = 0; i < already_done_elements.length; i++) {
    already_done_elements[i].addEventListener('click', function () {
        console.log(this);
        removeItem(this);
    });
}


// add new todo
function addToDo(todo) {
    createTodo(todo);
    countTodos();
}

// count tasks (To Complete)
function countTodos() {
    let todolist = document.getElementsByClassName("ui-state-default");
    let size = todolist.length;

    let childSpan = document.getElementsByClassName("count-todos");
    childSpan[0].innerHTML = `${size}`;

}

//create task (To Complete)
function createTodo(text) {

    let child = document.createElement("li");
    child.className = "ui-state-default";

    let innerChild = document.createElement("div");
    innerChild.className = "checkbox"

    let innerLabel = document.createElement("label");

    innerLabel.innerHTML = `
    <input type="checkbox" value="" />${ text}
    `

    child.appendChild(innerChild);
    innerChild.appendChild(innerLabel);

    document.getElementById("sortable").appendChild(child);

    addToStorage(text);
}


//mark task as done (To Complete)
function done(doneItem) {
    let listDone = document.getElementById("done-items");
    let child = document.createElement("li");

    child.innerHTML = ` ${doneItem} `;

    let childButton = document.createElement("button");
    childButton.className = "remove-item btn btn-default btn-xs pull-right";

    let childSpan = document.createElement("span");
    childSpan.className = "fa fa-minus-square";

    childButton.appendChild(childSpan);
    child.appendChild(childButton);
    listDone.appendChild(child);

    // capture click event on button minus on Already Done 
    var already_done_elements = document.getElementsByClassName("remove-item");
    for (var i = 0; i < already_done_elements.length; i++) {
        already_done_elements[i].addEventListener('click', function () {
            console.log(this);
            removeItem(this);
        });
    }
}

//mark all tasks as done (To Complete)
function AllDone() {

    const todos = document.querySelectorAll('#sortable li input[type="checkbox"]');

    for (let i = 0; i < todos.length; i++) {
        const doneItem = todos[i].parentElement.innerText;
        $(todos[i]).parent().parent().parent().addClass('remove');
        console.log
        console.log('done item: ' + doneItem);
        done(doneItem);
    }

    let list = document.getElementById("sortable").childNodes;

    for (let i = 0; i < list.length; i++) {
        if (list[i].className == "ui-state-default remove") {
            list[i].remove();
        }
    }

    countTodos();

}

//remove done task from list (To Complete)
function removeItem(element) {
    let list = document.getElementById("done-items");
    list.removeChild(element.parentElement);
}

function addToStorage(todo) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderList() {
    const listElement = document.getElementById("sortable");

    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const todoListDOM = todoList.map((todo, index) => {
        return `
             <li class="ui-state-default">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" value="" /> ${todo}
                                </label>
                            </div>
                        </li>
        `
    });

    listElement.innerHTML = todoListDOM.join('');
}

function RemoveFromStorage(index) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
}


/*

const storageListName = "list";

// count initial ToDo
countTodos();

// initial load from storage
loadFromStorage();


// capture click event
document.getElementById('checkAll').addEventListener('click', function () {
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress', function (e) {
    e.preventDefault // Do not submit form
    if (e.which == 13) { // check if enter is pressed
        var todo = document.getElementById('todo-to-add').value;
        console.log(todo);
        addToDo(todo);
    }
});

// capture click event
document.getElementById('addTODO').addEventListener('click', function () {
    var todo = document.getElementById("todo-to-add").value;
    console.log(todo);
    addToDo(todo);
});

function setEventListeners() {

    var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
    for (var i = 0; i < todos.length; i++) {
        todos[i].addEventListener('change', function () {
            if (this.checked == true) {
                var doneItem = this.parentElement.innerText
                $(this).parent().parent().parent().addClass('remove');
                console.log('done item: ' + doneItem);
                done(doneItem);
                countTodos();
            }
        });
    }

    // capture click event on button minus on Already Done 
    var already_done_elements = document.getElementsByClassName("remove-item");
    for (var i = 0; i < already_done_elements.length; i++) {
        already_done_elements[i].addEventListener('click', function () {
            console.log(this);
            removeItem(this);
        });
    }
}

// load from html storage
function loadFromStorage() {
    const storage = JSON.parse(localStorage.getItem(storageListName)) || [];

    for (let i = 0; i < storage.length; ++i) {
        let todo = storage[i];
        createTodo(todo);
    }

    countTodos();
    setEventListeners();
}

// add new todo
function addToDo(todo) {
    const storage = JSON.parse(localStorage.getItem(storageListName)) || [];
    storage.push(todo);
    localStorage.setItem(storageListName, JSON.stringify(storage));
    let list = document.getElementById("sortable");
    list.innerHTML = "";
    loadFromStorage();
}

// count tasks (To Complete)
function countTodos() {
    let counter = document.getElementsByClassName("ui-state-default").length;
    let updateItemsLeft = document.getElementsByClassName("count-todos");
    updateItemsLeft[0].innerHTML = counter;
}

//create task (To Complete)
function createTodo(text) {
    let newEntrieList = document.createElement("li");
    newEntrieList.setAttribute("id", document.getElementsByClassName("ui-state-default").length)
    newEntrieList.setAttribute("class", "ui-state-default");

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "checkbox");

    let newLabel = document.createElement("label");

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("value", "");


    newLabel.appendChild(newInput);
    newLabel.innerHTML += text;
    newDiv.appendChild(newLabel);
    newEntrieList.appendChild(newDiv);

    let uList = document.getElementById("sortable");
    uList.appendChild(newEntrieList);
}

//mark task as done (To Complete)
function done(doneItem) {
    let doneList = document.getElementById("done-items");
    let newInput = document.createElement("li");

    let newButton = document.createElement("button");
    newButton.setAttribute("class", "remove-item btn btn-default btn-xs pull-right");

    let newSpan = document.createElement("span");
    newSpan.setAttribute("class", "fa fa-minus-square");

    newButton.appendChild(newSpan);
    newInput.innerHTML = doneItem;
    newInput.appendChild(newButton);
    doneList.appendChild(newInput);

    let toRemove = document.getElementsByClassName("ui-state-default remove");

    const storage = JSON.parse(localStorage.getItem(storageListName)) || [];
    console.log(toRemove[0].getAttribute("id"));
    storage.splice(toRemove[0].getAttribute("id"), 1);
    localStorage.setItem(storageListName, JSON.stringify(storage));

    let list = document.getElementById("sortable");
    list.innerHTML = "";
    loadFromStorage();
}

//mark all tasks as done (To Complete)
function AllDone() {
    const todos = document.querySelectorAll('#sortable li input[type="checkbox"]');

    for (let i = 0; i < todos.length; i++) {
        const doneItem = todos[i].parentElement.innerText;
        $(todos[i]).parent().parent().parent().addClass('remove');
        console.log
        console.log('done item: ' + doneItem);
        done(doneItem);
        countTodos();
    }

}

//remove done task from list (To Complete)
function removeItem(element) {
    let list = document.getElementById("done-items");
    let toBeRemove = element.parentElement;
    list.removeChild(toBeRemove);
}
*/