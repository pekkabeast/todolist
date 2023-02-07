import { project } from "./project.js";
import { tasks } from "./task.js";
/*
initStorage if first time on page

Initialize in local storage a tasks array to store all tasks
Initialize a project list array to store all project names

*/
const initStorage = () => {
  if (getProjectsJSON() == null) {
    localStorage.setItem("tasks", JSON.stringify([]));
    localStorage.setItem("projects", JSON.stringify([]));
  }
};
//add new project name into project array in local storage
//if duplicate, console logs for now
const updateProjectStorage = (name) => {
  const projectName = name;
  let projectArray = JSON.parse(localStorage.getItem("projects"));
  if (!projectArray.includes(projectName)) {
    projectArray.push(projectName);
    localStorage.setItem("projects", JSON.stringify(projectArray));
  }
};

//getter for project name array
const getProjectStorage = () => {
  const projectArray = JSON.parse(localStorage.getItem("projects"));
  return projectArray;
};

const getProjectsJSON = () => {
  return localStorage.getItem("projects");
};

const removeProjectStorage = (key) => {
  const projectsArray = getProjectStorage();
  if (projectsArray.indexOf(key) >= 0) {
    projectsArray.splice(projectsArray.indexOf(key), 1);
  }
  localStorage.setItem("projects", JSON.stringify(projectsArray));
};

const getTasksJSON = () => {
  return localStorage.getItem("tasks");
};

const updateTaskStorage = (newTask) => {
  const taskArray = JSON.parse(getTasksJSON());
  taskArray.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  const testArray = JSON.parse(getTasksJSON());
};

const getTaskStorage = () => {
  const taskArray = JSON.parse(getTasksJSON());
  taskArray.forEach((task) => {
    task = tasks(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.project
    );
  });

  return taskArray;
};

export {
  updateProjectStorage,
  initStorage,
  getProjectStorage,
  getProjectsJSON,
  getTasksJSON,
  removeProjectStorage,
  updateTaskStorage,
  getTaskStorage,
};
