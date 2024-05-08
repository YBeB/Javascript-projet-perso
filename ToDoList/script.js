let buttonCreate = document.querySelector(".create");
let buttonDelete = document.querySelector(".delete");

function addToDolist() {
  let todoListColumn = document.getElementById("todolist--column");
  let inputTodo = document.getElementById("toDoListLineCreate").value;

  console.log(inputTodo);
  if (!inputTodo) {
    alert("No text");
  } else {
    let parapgrapheToDo = document.createElement("p");
    let checkBoxInput = document.createElement("INPUT");
    checkBoxInput.setAttribute("type", "checkbox");
    parapgrapheToDo.textContent = `${inputTodo}`;
    let divTodo = document.createElement("div");
    divTodo.classList.add("ToDoListLineA");
    todoListColumn.appendChild(divTodo);
    divTodo.appendChild(checkBoxInput);
    divTodo.appendChild(parapgrapheToDo);
  }
}

function deleteToDolist() {
  let divTodo = document.querySelectorAll(".ToDoListLineA");
  let lastDivChil = divTodo[divTodo.length - 1];
  if (divTodo.length > 0) {
    lastDivChil.remove();
  } else {
    alert("No entry to delete");
  }
}
buttonCreate.addEventListener("click", addToDolist);
buttonDelete.addEventListener("click", deleteToDolist);
