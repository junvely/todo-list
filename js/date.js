"use strict";

export default class DateTime {
  constructor() {
    this.date = document.querySelector(".date");
    this.clock = document.querySelector(".clock");
  }

  updateDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.date.textContent = `${year}년 ${month}월 ${day}일`;
    return `${year}.${month}.${day}`;
  };

  updateClock = () => {
    setInterval(() => {
      const date = new Date();
      const hour = String(date.getHours()).padStart(2, "0");
      const minute = String(date.getMinutes()).padStart(2, "0");
      const second = String(date.getSeconds()).padStart(2, "0");
      this.clock.textContent = `${hour}:${minute}:${second}`;
    }, 1000);
  };
}
