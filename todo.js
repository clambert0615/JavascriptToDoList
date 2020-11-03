let newTask = document.getElementById("newTask");
let addButton = document.getElementById("addButton");
let incompleteTasks = document.getElementById("incompleteTasks");
let completedTasks = document.getElementById("completedTasks");
let clear = document.getElementById("clear");

let addNewTask = function(){
    if(newTask.value == "")
    {
        alert("You need to enter a task to add");
        return;
    }
    let listItem = createNewTask(newTask.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    newTask.value = "";
}
addButton.addEventListener("click", addNewTask);

let createNewTask = function(taskName){
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    checkBox.type = "checkBox";
    editInput.type="text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

   return listItem;

}
let bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}