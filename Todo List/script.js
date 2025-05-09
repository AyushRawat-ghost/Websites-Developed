document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to create a new to-do item
    function createTodoItem(text) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        const label = document.createElement('label');
        label.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        return li;
    }

    // Event listener for the Add button
    addButton.addEventListener('click', () => {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            const newTodo = createTodoItem(todoText);
            todoList.appendChild(newTodo);
            inputField.value = '';
        }
    });

    // Allow pressing Enter to add a new to-do
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
