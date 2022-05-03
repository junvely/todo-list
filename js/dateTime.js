"use strict";

// today
const date = new Date();
const today = document.querySelector(".today");
today.textContent = `${date.getFullYear()}년 ${
  date.getMonth() + 1
}월 ${date.getDate()}일`;

// clock
const clock = document.querySelector(".clock");
function updateClock() {
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  let second = String(date.getSeconds()).padStart(2, "0");
  clock.textContent = `${hour}:${minute}:${second}`;
}
updateClock();
setInterval(updateClock, 1000);
