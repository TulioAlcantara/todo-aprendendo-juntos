const addButton = document.querySelector("#btn-add-item");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#input-add-item");

window.onload = function () {
    addButton.addEventListener("click", addButtonFunc)
}

let addButtonFunc = function (e) {
    let inputText = input.value;
    let li = document.createElement("li");
    let i = document.createElement("i");

    i.className += "fas fa-trash"
    li.appendChild(document.createTextNode(inputText));
    li.addEventListener("click", function (e) {
        todoList.removeChild(e.target);
    })
    todoList.appendChild(li);
    todoList.appendChild(i);
    input.value = "";
}
