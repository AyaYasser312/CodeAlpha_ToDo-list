    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var taskInput = document.getElementById("taskInput");
    var taskInputTime = document.getElementById("taskTime");
    var taskInputDate = document.getElementById("taskDate");

    addTaskButton.addEventListener("click", function () {
        const taskContent = taskInput.value
        const taskTime = taskInputTime.value;
        const taskDate = taskInputDate.value;


        if (taskContent !== '' && taskDate !== '' && taskTime !== '') {
            var newTask = document.createElement("li");
            newTask.textContent = `${taskContent} : ${taskTime} - ${taskDate}`;

            var circle = document.createElement("div");
            circle.className = "circle";

            newTask.prepend(circle);
            taskList.appendChild(newTask);

            taskInput.value = '';
            taskInputDate.value = '';
            taskInputTime.value = '';

            circle.addEventListener("click", function () {
                if (!circle.classList.contains("checked")) {
                    var check = document.createElement("i");
                    check.className = "fa-solid fa-check-double";
                    circle.appendChild(check);
                    circle.classList.add("checked");
                } else {
                    circle.innerHTML = "";
                    circle.classList.remove("checked");
                }
            });

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            newTask.appendChild(deleteButton);

            deleteButton.addEventListener("click", function() {
                taskList.removeChild(newTask);
            });
        }
    });
