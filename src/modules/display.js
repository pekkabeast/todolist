import { add } from "date-fns";
import "./displayStyles.css";
import { project } from "./project";
import {
  updateProjectStorage,
  initStorage,
  getProjectStorage,
  getProjectsJSON,
  getTasksJSON,
} from "./storage.js";

/*
DOM Logic
*/

const display = (() => {
  const initDisplay = () => {
    //show sidepane
    toggleSideNav();
    initBtns();
    if (getProjectsJSON == null) {
      initStorage();
    }

    //add event listeners to all buttons
  };

  const initBtns = () => {
    //Sandwich menu button
    const sandwichBtn = document.getElementById("sandwichNavBtn");
    sandwichBtn.addEventListener("click", toggleSideNav);

    //Project plus button
    const addProjectBtn = document.getElementById("addProjects");
    addProjectBtn.addEventListener("click", addProject.addProjectForm);

    const showProjectBtn = document.getElementById("showProjects");
    showProjectBtn.addEventListener("click", showProjects);
  };

  //toggles SideNavPane
  const toggleSideNav = () => {
    const parentDiv = document.getElementById("mainApp");
    if (document.getElementById("sidePane") == null) {
      const sidePane = document.createElement("div");
      sidePane.classList.add("sidePane");
      sidePane.id = "sidePane";

      const todoNav = document.createElement("div");
      todoNav.classList.add("todo-nav");

      const todoHeading = document.createElement("h2");
      todoHeading.classList.add("nav-heading");
      todoHeading.textContent = "To-do List";

      const todayTodo = document.createElement("button");
      todayTodo.classList.add("tile");
      todayTodo.id = "today";
      todayTodo.textContent = "Today";

      const upcomingTodo = document.createElement("button");
      upcomingTodo.classList.add("tile");
      upcomingTodo.id = "upcoming";
      upcomingTodo.textContent = "Upcoming";

      todoNav.append(todoHeading, todayTodo, upcomingTodo);

      const projectsWrapper = document.createElement("div");
      projectsWrapper.classList.add("projects-wrapper");

      const projectsNav = document.createElement("div");
      projectsNav.classList.add("projects-heading-wrapper");

      const projectsHeading = document.createElement("h2");
      projectsHeading.classList.add("nav-heading");
      projectsHeading.textContent = "Projects";

      const projectsBtnContainer = document.createElement("div");
      projectsBtnContainer.classList.add("project-btns");

      const addProjectsBtn = document.createElement("button");
      addProjectsBtn.classList.add("addProjects");
      addProjectsBtn.classList.add("btn");
      addProjectsBtn.id = "addProjects";
      addProjectsBtn.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>plus</title><path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>";

      const dropdownProjectsBtn = document.createElement("button");
      dropdownProjectsBtn.classList.add("showProjects");
      dropdownProjectsBtn.classList.add("btn");
      dropdownProjectsBtn.id = "showProjects";
      dropdownProjectsBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>';

      projectsBtnContainer.append(addProjectsBtn, dropdownProjectsBtn);

      projectsNav.append(projectsHeading, projectsBtnContainer);
      projectsWrapper.appendChild(projectsNav);
      sidePane.append(todoNav, projectsWrapper);
      parentDiv.insertBefore(sidePane, parentDiv.firstChild);
    } else {
      parentDiv.removeChild(parentDiv.firstChild);
    }
  };

  //Add Project DOM logic for showing form to add project
  const addProject = (() => {
    const addProjectForm = () => {
      const parentDiv = document.getElementById("mainApp");
      const formWrapper = document.createElement("div");
      formWrapper.classList.add("form-wrapper");
      //Form Wrapper
      const formDiv = document.createElement("div");
      formDiv.classList.add("form-container");
      //Form Header
      const formHeader = document.createElement("div");
      formHeader.textContent = "Add project";
      formHeader.classList.add("form-header");
      //Create Form to accept name for new project
      const nameForm = document.createElement("form");
      nameForm.classList.add("nameForm");
      nameForm.id = "projectNameForm";
      //Name input field
      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Name";
      nameLabel.setAttribute("for", "projectName");
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "projectName";
      //cancel button
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.id = "cancelAddProject";
      cancelBtn.classList.add("cancel-btn");
      //submit button
      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.id = "submitAddProject";
      submitBtn.setAttribute("type", "submit");
      nameForm.append(nameLabel, nameInput, cancelBtn, submitBtn);
      formDiv.append(formHeader, nameForm);
      formWrapper.appendChild(formDiv);
      parentDiv.appendChild(formWrapper);
      //add event listeners to buttons
      addFormBtnEvents();
    };

    const addFormBtnEvents = () => {
      const cancelBtn = document.getElementById("cancelAddProject");
      const formWrapper = document.querySelector(".form-wrapper");
      const parentDiv = document.getElementById("mainApp");
      cancelBtn.addEventListener("click", (e) => {
        //const projectForm = document.getElementById("projectNameForm");
        //projectForm.reset();
        //e.preventDefault();
        parentDiv.removeChild(formWrapper);
      });
      const submitBtn = document.getElementById("projectNameForm");
      submitBtn.addEventListener("submit", (e) => {
        updateProjectStorage(submitBtn);
        submitBtn.reset();
        e.preventDefault();
        parentDiv.removeChild(formWrapper);
      });
    };

    return {
      addProjectForm,
    };
  })();

  const showProjects = () => {
    const projectArray = getProjectStorage();
    const projectWrapper = document.querySelector(".projects-wrapper");
    for (let i = 0; i < projectArray.length; i++) {
      let tile = document.createElement("button");
      tile.textContent = projectArray[i];
      tile.classList.add("project-tile");
      tile.classList.add("tile");
      projectWrapper.appendChild(tile);
    }
  };

  return {
    initDisplay,
  };
})();

//init Display function to be called when DOM content is loaded

export { display };
