"use strict";

import DateTime from "./date.js";
import ToDo from "./todo.js";

const today = new DateTime();
const toDoList = new ToDo(today.updateDate, today.updateClock);
toDoList.onLoad();
