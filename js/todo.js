"use strict";

const HIDDEN = "hidden";
const TODOS = "todos";

export default class ToDo {
  constructor(date, clock) {
    this.date = date;
    this.clock = clock;

    this.items = document.querySelector(".items");
    this.todoForm = document.querySelector("#todoForm");
    this.input = document.querySelector("#todoInput");

    this.toDoList = [];
    this.id = 0;

    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onToDoSubmit();
      this.input.value = "";
      this.input.focus();
    });

    this.items.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const target = document.querySelector(`.items li[data-id="${id}"`);

      if (e.target.matches(".delete")) {
        target.remove();
        this.toDoList = this.toDoList.filter(
          (todo) => todo.id !== parseInt(id)
        );
        this.saveToDos();
      } else if (e.target.matches(".finish")) {
        target.classList.toggle("finished");
      }
      this.hideItems();
    });
  }

  onLoad() {
    this.date();
    this.clock();
    this.getSavedToDos();
    this.hideItems();
  }

  onToDoSubmit() {
    const todo = {
      text: this.input.value,
      id: this.id,
      finish: null,
    };
    this.toDoList.push(todo);
    this.createToDo(todo);
    this.saveToDos();
  }

  hideItems() {
    if (this.toDoList.length === 0) {
      this.items.classList.add(HIDDEN);
    }
  }

  showItems() {
    if (this.toDoList.length !== 0) {
      this.items.classList.remove(HIDDEN);
    }
  }

  saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(this.toDoList));
  }

  createToDo = (todo) => {
    const item = document.createElement("li");
    item.setAttribute("class", "box-style");
    item.setAttribute("data-id", todo.id);
    this.items.appendChild(item);
    item.innerHTML = `
      <p class="todoText">${todo.text}</p>
      <span class="todoDate">${this.date()}</span>
      <button title="finish">
          <i class="fa-solid fa-square-check finish" data-id=${todo.id}></i>
      </button>
      <button title="delete" >
          <i class="fa-solid fa-trash-can delete" data-id=${todo.id}></i>
      </button>
      `;
    item.scrollIntoView({ block: "center" });
    this.id++;
    this.showItems();
  };

  getSavedToDos() {
    const savedToDos = localStorage.getItem(TODOS);
    if (savedToDos) {
      const parsedToDos = JSON.parse(savedToDos);
      this.toDoList = parsedToDos;
      this.toDoList.forEach(this.createToDo);
    }
  }
}
