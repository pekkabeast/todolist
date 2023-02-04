import { project } from "./project.js";

//add new project name into project array in local storage
//if duplicate, console logs for now
const updateProjectStorage = (name) => {
  const projectName = name.elements["projectName"].value;
  let projectArray = JSON.parse(localStorage.getItem("projects"));
  if (!projectArray.includes(projectName)) {
    projectArray.push(projectName);
    localStorage.setItem("projects", JSON.stringify(projectArray));
  } else {
    console.log("Duplicate");
  }
};

//getter for project name array
const getProjectStorage = () => {
  const projectArray = JSON.parse(localStorage.getItem("projects"));
  return projectArray;
};

/*
initStorage if first time on page

Initialize in local storage a tasks array to store all tasks
Initialize a project list array to store all project names

*/

const getProjectsJSON = () => {
  return localStorage.getItem("projects");
};

const getTasksJSON = () => {
  return localStorage.getItem("tasks");
};

const initStorage = () => {
  if (getProjectsJSON() == null) {
    localStorage.setItem("tasks", JSON.stringify([]));
    localStorage.setItem("projects", JSON.stringify([]));
  }
};

const removeProjectStorage = (key) => {
  const projectsArray = getProjectStorage();
  if (projectsArray.indexOf(key) >= 0) {
    projectsArray.splice(projectsArray.indexOf(key), 1);
  }
  localStorage.setItem("projects", JSON.stringify(projectsArray));
};

export {
  updateProjectStorage,
  initStorage,
  getProjectStorage,
  getProjectsJSON,
  getTasksJSON,
  removeProjectStorage,
};
