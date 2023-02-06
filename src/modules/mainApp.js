/*
Application Logic

*/
import { tasks } from "./task.js";
import { updateTaskStorage } from "./storage.js";

const createNewTask = (
  taskName,
  taskDesc,
  taskDueDate,
  taskPriority,
  taskProject
) => {
  //create new task, update storage
  const newTask = tasks(
    taskName,
    taskDesc,
    taskDueDate,
    taskPriority,
    taskProject
  );
  updateTaskStorage(newTask);
};

export { createNewTask };
