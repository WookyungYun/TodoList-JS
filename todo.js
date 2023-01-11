const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todos = document.querySelector(".todos");

let todoList = [];
function deleteTodo(e) {
  const removeTodo = e.target.parentNode;
  todos.removeChild(removeTodo);
  todoList = todoList.filter((todo) => todo.id !== +removeTodo.id);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo(todo) {
  const list = document.createElement("li");
  const todoItem = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "삭제";
  deleteBtn.addEventListener("click", deleteTodo);
  todoItem.innerHTML = todo;
  list.appendChild(todoItem);
  list.appendChild(deleteBtn);
  list.id = todoList.length + 1;
  todos.appendChild(list);
}

function createTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  addTodo(todo);
  let date = new Date();
  const todoObj = {
    id: todoList.length + 1,
    text: todo,
    date: date,
  };
  todoList.push(todoObj);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  todoInput.value = "";
}

function init() {
  todoForm.addEventListener("submit", createTodo);
}
init();
