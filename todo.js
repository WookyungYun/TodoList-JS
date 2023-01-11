const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todos = document.querySelector(".todos");

let todoList = [];

function addTodo(todo) {
  const list = document.createElement("li");
  const todoItem = document.createElement("span");
  todoItem.innerHTML = todo;
  list.appendChild(todoItem);
  todos.appendChild(list);
}

function createTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  addTodo(todo);
  const todoObj = {
    text: todo,
    id: todoList.length + 1,
  };
  todoList.push(todoObj);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  todoInput.value = "";
}

function init() {
  todoForm.addEventListener("submit", createTodo);
}
init();
