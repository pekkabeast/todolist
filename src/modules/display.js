import { add } from "date-fns";
import "./displayStyles.css";
import { project } from "./project";
import {
  updateProjectStorage,
  initStorage,
  getProjectStorage,
  getProjectsJSON,
  getTasksJSON,
  removeProjectStorage,
} from "./storage.js";

/*
DOM Logic
*/

const display = (() => {
  const initDisplay = () => {
    //show sidepane
    toggleSideNav();
    initHeaderBtns();
    initStorage();

    //add event listeners to all buttons
  };

  const initHeaderBtns = () => {
    //Sandwich menu button
    const sandwichBtn = document.getElementById("sandwichNavBtn");
    sandwichBtn.addEventListener("click", toggleSideNav);
  };

  //toggles SideNavPane
  const toggleSideNav = () => {
    const parentDiv = document.getElementById("mainApp");
    if (document.getElementById("sidePane") == null) {
      const sidePane = document.createElement("div");
      sidePane.classList.add("sidePane");
      sidePane.id = "sidePane";

      sidePane.append(
        generateTodoNavContent(),
        projectNavDom.generateProjectNavContent()
      );
      parentDiv.insertBefore(sidePane, parentDiv.firstChild);
      projectNavDom.initProjectBtns();
    } else {
      parentDiv.removeChild(parentDiv.firstChild);
    }
  };

  const generateTodoNavContent = () => {
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

    return todoNav;
  };

  //Add Project DOM logic for showing form to add project
  const projectNavDom = (() => {
    const generateProjectNavContent = () => {
      //Nav for projects
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
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>Add New Project</title><path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>";

      const dropdownProjectsBtn = document.createElement("button");
      dropdownProjectsBtn.classList.add("showProjects");
      dropdownProjectsBtn.classList.add("btn");
      dropdownProjectsBtn.id = "showProjects";

      projectsBtnContainer.append(addProjectsBtn, dropdownProjectsBtn);
      projectsNav.append(projectsHeading, projectsBtnContainer);
      projectsWrapper.appendChild(projectsNav);

      return projectsWrapper;
    };

    const initProjectBtns = () => {
      const addProjectBtn = document.getElementById("addProjects");
      addProjectBtn.addEventListener("click", projectNavDom.addProjectForm);
      toggleShowProjectsBtn();
    };

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
        displayNewProject();
        deleteProjectBtn();
        submitBtn.reset();
        e.preventDefault();
        parentDiv.removeChild(formWrapper);
      });
      const displayNewProject = () => {
        const btnWrapper = document.getElementById("project-btn-wrapper");
        if (btnWrapper != null) {
          const projectArray = getProjectStorage();
          for (let i = 0; i < projectArray.length; i++) {
            if (document.getElementById(projectArray[i]) == null) {
              btnWrapper.appendChild(projectTileElement(projectArray[i]));
            }
          }
        }
      };
    };

    const projectTileElement = (tileText) => {
      const tile = document.createElement("div");
      tile.textContent = tileText;
      tile.classList.add("project-tile");
      tile.classList.add("tile");

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.classList.add("delete-tile-btn");
      deleteProjectBtn.classList.add("btn");
      deleteProjectBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
      tile.appendChild(deleteProjectBtn);
      tile.id = tileText;
      return tile;
    };

    const deleteProjectBtn = () => {
      const projectTiles = document.querySelectorAll(".delete-tile-btn");
      const projectTilesArray = [...projectTiles];
      projectTilesArray.forEach((tile) => {
        if (tile.getAttribute("data-deleteListener") != "true") {
          tile.addEventListener("click", () => {
            console.log(tile.parentElement.id);
            removeProjectStorage(tile.parentElement.id);
            tile.parentElement.parentElement.removeChild(
              document.getElementById(tile.parentElement.id)
            );
          });
          tile.setAttribute("data-deleteListener", true);
        }
      });
    };

    const toggleShowProjectsBtn = () => {
      const dropdownProjectsBtn = document.getElementById("showProjects");
      if (document.getElementById("project-btn-wrapper") == null) {
        dropdownProjectsBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Show Projects</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>';
        dropdownProjectsBtn.removeEventListener("click", hideProjects);
        dropdownProjectsBtn.addEventListener("click", showProjects);
      } else {
        dropdownProjectsBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Hide Projects</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';
        dropdownProjectsBtn.removeEventListener("click", showProjects);
        dropdownProjectsBtn.addEventListener("click", hideProjects);
      }
    };

    const showProjects = () => {
      const projectArray = getProjectStorage();
      const projectWrapper = document.querySelector(".projects-wrapper");
      const buttonWrapper = document.createElement("div");
      buttonWrapper.id = "project-btn-wrapper";
      buttonWrapper.classList.add("button-wrapper");
      for (let i = 0; i < projectArray.length; i++) {
        if (document.getElementById(projectArray[i]) == null) {
          buttonWrapper.appendChild(projectTileElement(projectArray[i]));
        }
      }
      projectWrapper.appendChild(buttonWrapper);
      toggleShowProjectsBtn();
      deleteProjectBtn();
    };

    const hideProjects = () => {
      const projectWrapper = document.querySelector(".projects-wrapper");
      const buttonWrapper = document.getElementById("project-btn-wrapper");

      projectWrapper.removeChild(buttonWrapper);
      toggleShowProjectsBtn();
    };

    return {
      addProjectForm,
      toggleShowProjectsBtn,
      generateProjectNavContent,
      initProjectBtns,
    };
  })();

  return {
    initDisplay,
  };
})();

//init Display function to be called when DOM content is loaded

export { display };
