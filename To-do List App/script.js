const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

// Load todos from local storage on page load
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const todos = JSON.parse(storedTodos);
        todos.forEach(addTodoToList);
    }
}

// Save todos to local storage
function saveTodos() {
    const todoItems = todoList.querySelectorAll('li');
    const todos = [];
    todoItems.forEach(item => {
        const text = item.querySelector('span').textContent;
        const completed = item.classList.contains('completed');
        todos.push({ text, completed });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add a todo item to the list
function addTodoToList(todo) {
    const listItem = document.createElement('li');
    const ch_spa = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    checkbox.addEventListener('change', function () {
        listItem.classList.toggle('completed');
        saveTodos();
    });
    if (todo.completed) {
        listItem.classList.add('completed');
    }
    ch_spa.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = todo.text;
    ch_spa.appendChild(span);

    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
        saveTodos();
    });
    listItem.appendChild(ch_spa);
    listItem.appendChild(removeButton);

    todoList.appendChild(listItem);

}

// Add a new todo item
addTodoButton.addEventListener('click', function () {
    const text = newTodoInput.value.trim();
    if (text) {
        addTodoToList({ text, completed: false });
        newTodoInput.value = '';
        saveTodos();
    }
});

// Load todos on page load
loadTodos();



