var button = document.getElementById("Create_button");
var destrbutton = document.createElement('button');

function loadTasks() {
  fetch('/tasks')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(tasks) {
    let html = '<ul>';
    for (let task of tasks) {
      html += `<li>${task.name}</li>`;
    }
    html += '</ul>';

    document.getElementById('tasks').innerHTML = html;
  });
};

function destroyTask(id) {
  fetch('tasks/' + id, {
    method: 'delete'
  })
  .then(loadTasks);
}

button.onclick = function createTask() {
  var taskName = document.getElementById('new_task_name').value;
  //var elem = document.createElement('p');

  fetch('tasks', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: taskName })
  })
    

  .then(loadTasks);
   //alert("JSON_creted");
   //tasks.appendChild(elem);
   //var quest = document.createTextNode(taskName);
   //elem.appendChild(quest);
   //document.write(taskName);
};
//export.createTask()

loadTasks();
