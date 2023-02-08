/*
Application Logic

*/
import { tasks } from "./task.js";
import { updateTaskStorage, getTaskStorage } from "./storage.js";
import _ from "lodash";

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

const checkExistingTask = (
  taskName,
  taskDesc,
  taskDueDate,
  taskPriority,
  taskProject
) => {
  const newTask = tasks(
    taskName,
    taskDesc,
    taskDueDate,
    taskPriority,
    taskProject
  );
  const taskArray = getTaskStorage();

  if (taskArray.length != 0) {
    const newArray = taskArray.filter((taskStorage) => {
      if (!_.isEqual(JSON.parse(JSON.stringify(newTask)), taskStorage)) {
        return newTask;
      }
    });
    return newArray.length == taskArray.length ? true : false;
  } else {
    return true;
  }
};

export { createNewTask, checkExistingTask };
