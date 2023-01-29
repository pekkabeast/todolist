import { project } from "./project.js";

const populateStorage = (name) => {
  const projectName = name.elements["projectName"].value;
  if (!localStorage.getItem(projectName)) {
    const newProject = project(projectName);
    localStorage.setItem(projectName, newProject);
  } else {
    console.log("Duplicate");
  }
};

export { populateStorage };
