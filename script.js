const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Hecha ✓';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Borrar ✕';
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = '';
}
