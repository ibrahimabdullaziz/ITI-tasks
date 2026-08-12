var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskTableBody = document.getElementById("taskTableBody");

addBtn.addEventListener("click", function () {
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task name!");
    return;
  }

  var tr = document.createElement("tr");

  var tdDone = document.createElement("td");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tdDone.appendChild(checkbox);

  var tdTask = document.createElement("td");
  tdTask.innerText = taskText;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      tdTask.className = "done-task";
    } else {
      tdTask.className = "";
    }
  });

  var tdDelete = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    var sure = confirm("Are You Sure to delete this task");
    if (sure) {
      tr.remove();
    }
  });

  tdDelete.appendChild(deleteBtn);

  tr.appendChild(tdDone);
  tr.appendChild(tdTask);
  tr.appendChild(tdDelete);

  taskTableBody.appendChild(tr);

  taskInput.value = "";
});
