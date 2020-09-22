const addButton = document.querySelector("#btn-add-item");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#input-add-item");

const calcButton = document.querySelector("#btn-number-check");
const numberOutput = document.querySelector("#number-output");
const inputNumber = document.querySelector("#input-number-check");

window.onload = function () {
    addButton.addEventListener("click", addButtonFunc)

    calcButton.addEventListener("click", calcButtonFunc)
}

let addButtonFunc = function (e) {
    let inputText = input.value;
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(inputText));
    li.addEventListener("click", function (e) {
        todoList.removeChild(e.target);
    })
    todoList.appendChild(li);
    input.value = "";
}

let calcButtonFunc = function (e) {
    let number = inputNumber.value;

    if (number % 2 == 0) {
        numberOutput.textContent = "É par";
        numberOutput.style.color = "green";
    }
    else {
        numberOutput.textContent = "É impar";
        numberOutput.style.color = "red";
    }
}
