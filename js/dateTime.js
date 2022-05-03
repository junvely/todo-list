"use strict";

const today = document.querySelector(".today");
const clock = document.querySelector(".clock");

function updateDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  today.textContent = `${year}년 ${month}월 ${day}일`;
  return `${year}.${month}.${day}`;
}

function updateClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.textContent = `${hour}:${minute}:${second}`;
}
