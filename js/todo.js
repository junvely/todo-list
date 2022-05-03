"use strict";

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");

function onAdd(e) {
  e.preventDefault(); // 새로고침 event 막기
  createToDo();
  todoInput.value = "";
  todoInput.focus();
}

function createToDo() {
  const items = document.querySelector(".items");

  //   element 생성
  const item = document.createElement("li");
  const itemText = document.createElement("p");
  const itemDate = document.createElement("span");
  const itemDelete = document.createElement("button");
  const date = new Date();

  // appendChild 자식
  items.appendChild(item);
  item.appendChild(itemText);
  item.appendChild(itemDate);
  item.appendChild(itemDelete);

  // setAttribute 속성
  item.setAttribute("class", "box-style");
  itemText.setAttribute("class", "todoText");
  itemDate.setAttribute("class", "date");
  itemDelete.setAttribute("class", "delete");

  // 날짜, 시간, textContent 텍스트
  itemText.textContent = `${todoInput.value}`;
  itemDate.textContent = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  itemDelete.innerHTML = `<i class="fa-solid fa-trash-can" title="delete"></i>`;

  // finish
  itemText.addEventListener("click", () => {
    item.classList.add("finished");
  });

  // delete
  itemDelete.addEventListener("click", () => {
    item.remove();
    // items.removeChild(item);
  });
}

todoForm.addEventListener("submit", onAdd);
