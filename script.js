
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');

        li.innerHTML = `
            ${taskText}
            <div>
                <button class="complete">Hoan thanh</button>
                <button class="delete">Xoa</button>
            </div>
        `;

        taskList.appendChild(li);

        taskInput.value = '';

        const completeBtn = li.querySelector('.complete');
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteBtn = li.querySelector('.delete');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    } else {
        alert('Vui long nhap cong viec!');
    }
});
