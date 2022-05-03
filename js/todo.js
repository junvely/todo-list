"use strict";

const items = document.querySelector(".items");
const todoForm = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");

function onLoad() {
  updateDate();
  updateClock();
  setInterval(updateClock, 1000);
}

function onAdd(e) {
  showItems();
  createToDo();
  input.value = "";
  input.focus();
}

function showItems() {
  items.classList.remove("hidden");
}

let id = 0;
function createToDo() {
  const item = document.createElement("li");
  item.setAttribute("class", "box-style");
  item.setAttribute("data-id", id);
  items.appendChild(item);
  item.innerHTML = `
    <p class="todoText">${input.value}</p>
    <span class="date">${updateDate()}</span>
    <button title="delete" >
        <i class="fa-solid fa-trash-can delete" data-id=${id}></i>
    </button>
    <button title="finish">
        <i class="fa-solid fa-square-check finish" data-id=${id}></i>
    </button>
    `;
  item.scrollIntoView({ block: "center" });
  id++;
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  onAdd(e);
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const target = document.querySelector(`.items li[data-id="${id}"`);

  if (e.target.matches(".delete")) {
    target.remove();
  } else if (e.target.matches(".finish")) {
    target.classList.toggle("finished");
  }
});

onLoad();
