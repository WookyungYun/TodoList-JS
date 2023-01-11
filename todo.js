const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todos = document.querySelector(".todos");

let todoList = [];

function editTodo(e, todoItem) {
  const todoItemId = todoItem.parentNode.id;
  const editValue = todoItem.value;
  let editDate = new Date();
  if (e.target.innerHTML === "수정") {
    e.target.innerHTML = "저장";
    todoItem.removeAttribute("disabled");
    todoItem.focus();
  } else {
    todoList = todoList.map((todo) =>
      todo.id === +todoItemId
        ? { ...todo, text: editValue, date: editDate }
        : todo
    );
    localStorage.setItem("todoList", JSON.stringify(todoList));
    todoItem.setAttribute("disabled", true);
    e.target.innerHTML = "수정";
  }
}

function deleteTodo(e) {
  const removeTodo = e.target.parentNode;
  todos.removeChild(removeTodo);
  todoList = todoList.filter((todo) => todo.id !== +removeTodo.id);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo(todo) {
  const list = document.createElement("li");
  const todoItem = document.createElement("input");
  todoItem.value = todo;
  todoItem.setAttribute("disabled", true);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "삭제";
  deleteBtn.addEventListener("click", deleteTodo);
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "수정";
  editBtn.addEventListener("click", (e) => editTodo(e, todoItem));
  list.appendChild(todoItem);
  list.appendChild(editBtn);
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
