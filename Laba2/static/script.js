var button = document.getElementById("Create_button");

function loadTasks() {
  fetch('/tasks')
  .then(function(response) {
    return response.text();
  })
  
  .then(function(tasks) {
    document.getElementById('tasks').innerText = tasks;


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
  .then(response => response.arr())
  .then(arr =>
  document.getElementById('tasks').innerText = arr
  ); 
   //alert("JSON_creted");
   //tasks.appendChild(elem);
   //var quest = document.createTextNode(taskName);
   //elem.appendChild(quest);
   //document.write(taskName);
};

loadTasks();
