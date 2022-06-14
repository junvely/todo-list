"use strict";

const items = document.querySelector(".items");
const todoForm = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");

let toDoList = [];
let id = 0;

const HIDDEN = "hidden";
const TODOS = "todos";

function onLoad() {
  updateDate();
  updateClock();
  getSavedToDos();
  hideItems();
}

function onToDoSubmit() {
  const todo = {
    text: input.value,
    id: id,
    finish: null,
  };
  toDoList.push(todo);
  createToDo(todo);
  saveToDos();
}

function hideItems() {
  if (toDoList.length === 0) {
    items.classList.add(HIDDEN);
  }
}

function showItems() {
  if (toDoList.length !== 0) {
    items.classList.remove(HIDDEN);
  }
}

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDoList));
}

function createToDo(todo) {
  const item = document.createElement("li");
  item.setAttribute("class", "box-style");
  item.setAttribute("data-id", todo.id);
  items.appendChild(item);
  item.innerHTML = `
    <p class="todoText">${todo.text}</p>
    <span class="date">${updateDate()}</span>
    <button title="delete" >
        <i class="fa-solid fa-trash-can delete" data-id=${todo.id}></i>
    </button>
    <button title="finish">
        <i class="fa-solid fa-square-check finish" data-id=${todo.id}></i>
    </button>
    `;
  item.scrollIntoView({ block: "center" });
  id++;
  showItems();
}

function getSavedToDos() {
  const savedToDos = localStorage.getItem(TODOS);
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDoList = parsedToDos;
    toDoList.forEach(createToDo);
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  onToDoSubmit();
  input.value = "";
  input.focus();
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const target = document.querySelector(`.items li[data-id="${id}"`);

  if (e.target.matches(".delete")) {
    target.remove();
    toDoList = toDoList.filter((todo) => todo.id !== parseInt(id));
    saveToDos();
  } else if (e.target.matches(".finish")) {
    target.classList.toggle("finished");
  }
  hideItems();
});

onLoad();
