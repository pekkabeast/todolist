/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/displayStyles.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/displayStyles.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-container {\n  border: black;\n  background-color: white;\n}\n\n.nameForm {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 1rem;\n}\n\n.form-header {\n  padding: 1rem 0 0.5rem 1rem;\n  border-bottom: 1px solid lightgray;\n}\n\n.nameForm label {\n  padding-bottom: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/displayStyles.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".form-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-container {\n  border: black;\n  background-color: white;\n}\n\n.nameForm {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 1rem;\n}\n\n.form-header {\n  padding: 1rem 0 0.5rem 1rem;\n  border-bottom: 1px solid lightgray;\n}\n\n.nameForm label {\n  padding-bottom: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/displayStyles.css":
/*!***************************************!*\
  !*** ./src/modules/displayStyles.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_displayStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./displayStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/displayStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_displayStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_displayStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_displayStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_displayStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _displayStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayStyles.css */ "./src/modules/displayStyles.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _mainApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainApp */ "./src/modules/mainApp.js");






/*
DOM Logic
*/

const display = (() => {
  const initDisplay = () => {
    //show sidepane
    toggleSideNav();
    initHeaderBtns();
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.initStorage)();
    projectNavDom.initDefaultProject();

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
    const initDefaultProject = () => {
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectStorage)("Default Project");
      displayNewProject();
    };

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
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectStorage)(submitBtn.elements["projectName"].value);
        displayNewProject();
        deleteProjectBtn();
        showProjectContentBtn();
        submitBtn.reset();
        e.preventDefault();
        parentDiv.removeChild(formWrapper);
      });
    };

    const displayNewProject = () => {
      const btnWrapper = document.getElementById("project-btn-wrapper");
      if (btnWrapper != null) {
        const projectArray = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectStorage)();
        for (let i = 0; i < projectArray.length; i++) {
          if (document.getElementById(projectArray[i]) == null) {
            btnWrapper.appendChild(projectTileElement(projectArray[i]));
          }
        }
      }
    };

    const projectTileElement = (tileText) => {
      const tile = document.createElement("div");
      tile.textContent = tileText;
      tile.classList.add("project-tile");
      tile.classList.add("tile");
      if (tileText != "Default Project") {
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.classList.add("delete-tile-btn");
        deleteProjectBtn.classList.add("btn");
        deleteProjectBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill = "white"><title>delete</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
        tile.appendChild(deleteProjectBtn);
      }
      tile.id = tileText;
      return tile;
    };

    const showProjectContentBtn = () => {
      const projectBtns = document.querySelectorAll(".project-tile");
      projectBtns.forEach((button) => {
        if (button.getAttribute("data-showProject") != "true") {
          button.addEventListener("click", (e) => {
            mainContentDom.showProjectContent(e);
          });
          button.setAttribute("data-showProject", "true");
        }
      });
    };

    //Need to add logic to always keep at least 1 project
    const deleteProjectBtn = () => {
      const projectTiles = document.querySelectorAll(".delete-tile-btn");
      const projectTilesArray = [...projectTiles];
      projectTilesArray.forEach((tile) => {
        if (tile.getAttribute("data-deleteListener") != "true") {
          tile.addEventListener("click", () => {
            console.log(tile.parentElement.id);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.removeProjectStorage)(tile.parentElement.id);
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
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Hide Projects</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';
        dropdownProjectsBtn.removeEventListener("click", hideProjects);
        dropdownProjectsBtn.addEventListener("click", showProjects);
      } else {
        dropdownProjectsBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Show Projects</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>';
        dropdownProjectsBtn.removeEventListener("click", showProjects);
        dropdownProjectsBtn.addEventListener("click", hideProjects);
      }
    };

    const showProjects = () => {
      const projectArray = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectStorage)();
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
      showProjectContentBtn();
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
      initDefaultProject,
    };
  })();

  const mainContentDom = (() => {
    const showProjectContent = (projectBtnPressed) => {
      const parentDiv = document.querySelector(".mainContent");
      if (document.querySelector(".content-wrapper") == null) {
        parentDiv.appendChild(mainContentTemplate(projectBtnPressed.target.id));
      }

      tasksDom.addTaskBtnFunc();
    };

    const mainContentTemplate = (title) => {
      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add("content-wrapper");
      const contentTitle = document.createElement("h1");
      contentTitle.classList.add("content-title");
      contentTitle.textContent = title;

      //create new task button
      contentWrapper.append(contentTitle, tasksDom.addTaskBtn());

      //Show Tasks

      return contentWrapper;
    };

    const showTodayContent = () => {};
    const showUpcomingContent = () => {};

    return { showProjectContent };
  })();

  const tasksDom = (() => {
    const addTaskBtn = () => {
      const taskbutton = document.createElement("div");
      taskbutton.textContent = "+ Add Task";
      taskbutton.classList.add("addtask-btn");
      return taskbutton;
    };

    const addTaskBtnFunc = () => {
      const taskbutton = document.querySelector(".addtask-btn");
      taskbutton.addEventListener("click", () => {
        taskbutton.parentElement.insertBefore(taskFormExpanded(), taskbutton);
        addTaskFormSubmitEvent();
        taskbutton.parentElement.removeChild(taskbutton);
      });
    };

    const taskFormExpanded = () => {
      const formWrapper = document.createElement("div");
      formWrapper.classList.add("taskForm-wrapper");
      const taskGenerateForm = document.createElement("form");
      taskGenerateForm.classList.add("taskForm-expanded");
      taskGenerateForm.id = "newTaskForm";
      const taskNameInput = document.createElement("input");
      taskNameInput.type = "text";
      taskNameInput.id = "taskName";
      taskNameInput.placeholder = "Task name";
      const taskDescInput = document.createElement("textarea");
      taskDescInput.id = "taskDesc";
      taskDescInput.maxLength = 350;
      taskDescInput.placeholder = "Description (350 chars max)";
      //Categories
      const taskCategoryWrapper = document.createElement("div");
      taskCategoryWrapper.id = "taskCategory-wrapper";
      const taskDueDateInput = document.createElement("input");
      taskDueDateInput.type = "date";
      taskDueDateInput.id = "taskDueDate";
      taskDueDateInput.placeholder = "Due Date";

      const taskPriorityInput = document.createElement("select");
      taskPriorityInput.id = "taskPriority";

      const lowPriority = document.createElement("option");
      lowPriority.value = "low";
      lowPriority.textContent = "Low";

      const medPriorty = document.createElement("option");
      medPriorty.value = "med";
      medPriorty.textContent = "Medium";

      const highPriorty = document.createElement("option");
      highPriorty.value = "high";
      highPriorty.textContent = "High";

      taskPriorityInput.append(highPriorty, medPriorty, lowPriority);

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.id = "cancelAddTask";
      cancelBtn.classList.add("cancel-task-btn");

      const taskSubmitBtn = document.createElement("input");
      taskSubmitBtn.classList.add("tasksubmit-btn");
      taskSubmitBtn.type = "submit";
      taskSubmitBtn.value = "Create Task";

      taskCategoryWrapper.append(
        taskDueDateInput,
        taskPriorityInput,
        dropDownProjects(),
        cancelBtn,
        taskSubmitBtn
      );
      taskGenerateForm.append(
        taskNameInput,
        taskDescInput,
        taskCategoryWrapper
      );
      formWrapper.appendChild(taskGenerateForm);

      return formWrapper;
    };

    const hideTaskForm = () => {
      const taskForm = document.querySelector(".taskForm-wrapper");
      taskForm.parentElement.insertBefore(addTaskBtn(), taskForm);
      addTaskBtnFunc();
      taskForm.parentElement.removeChild(taskForm);
    };

    const addTaskFormSubmitEvent = () => {
      const addTaskForm = document.getElementById("newTaskForm");
      const taskName = document.getElementById("taskName");
      const taskDesc = document.getElementById("taskDesc");
      const taskDueDate = document.getElementById("taskDueDate");
      const taskPriority = document.getElementById("taskPriority");
      const taskProject = document.getElementById("taskProject");
      addTaskForm.addEventListener("submit", (e) => {
        (0,_mainApp__WEBPACK_IMPORTED_MODULE_3__.createNewTask)(
          taskName.value,
          taskDesc.value,
          taskDueDate.value,
          taskPriority.value,
          taskProject.value
        );

        addTaskForm.reset();
        e.preventDefault();
        hideTaskForm();
      });
    };

    const addTaskFormCancelEvent = () => {
      const cancelBtn = document.getElementById("cancelAddTask");
      const addTaskForm = document.getElementById("newTaskForm");
      cancelBtn.addEventListener("click", () => {
        addTaskForm.reset();
        hideTaskForm();
      });
    };

    const dropDownProjects = () => {
      const projectArray = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectStorage)();
      const projectDropDown = document.createElement("select");
      projectDropDown.classList.add("project-dropdown");
      projectDropDown.id = "taskProject";
      projectArray.forEach((project) => {
        let projectOption = document.createElement("option");
        projectOption.textContent = project;
        projectOption.value = project;
        projectDropDown.appendChild(projectOption);
      });
      return projectDropDown;
    };

    const taskFormHandler = () => {
      //when user fills out ask form, it should take away the add task form
      //it should create a new task and update the storage
      //it should display the new task created in abbreviated form
    };

    return {
      addTaskBtn,
      taskFormExpanded,
      addTaskBtnFunc,
    };
  })();

  return {
    initDisplay,
  };
})();

//init Display function to be called when DOM content is loaded




/***/ }),

/***/ "./src/modules/mainApp.js":
/*!********************************!*\
  !*** ./src/modules/mainApp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/*
Application Logic

*/



const createNewTask = (
  taskName,
  taskDesc,
  taskDueDate,
  taskPriority,
  taskProject
) => {
  //create new task, update storage
  const newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.tasks)(
    taskName,
    taskDesc,
    taskDueDate,
    taskPriority,
    taskProject
  );
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskStorage)(newTask);
};




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* Project Factory Function
- creates a project object containing name and tasks
*/

const project = (name) => {
  //For storage, keys will be project name and values will be the tasks
  const __name = name;
  const __tasks = [];

  const getName = () => __name;

  const changeName = (newName) => {
    __name = newName;
  };

  const addTask = (taskObject) => {
    __tasks.append(taskObject);
  };

  const getAllTasks = () => __tasks;

  const getTodayTasks = () => {};

  const getFutureTasks = () => {};

  return {
    getName,
    changeName,
    addTask,
    getTodayTasks,
    getFutureTasks,
    getAllTasks,
  };
};




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectStorage": () => (/* binding */ getProjectStorage),
/* harmony export */   "getProjectsJSON": () => (/* binding */ getProjectsJSON),
/* harmony export */   "getTaskStorage": () => (/* binding */ getTaskStorage),
/* harmony export */   "getTasksJSON": () => (/* binding */ getTasksJSON),
/* harmony export */   "initStorage": () => (/* binding */ initStorage),
/* harmony export */   "removeProjectStorage": () => (/* binding */ removeProjectStorage),
/* harmony export */   "updateProjectStorage": () => (/* binding */ updateProjectStorage),
/* harmony export */   "updateTaskStorage": () => (/* binding */ updateTaskStorage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");


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
    task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.tasks)(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.project
    );
  });

  return taskArray;
};




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* Factory function for creating tasks
- holds data specific to task

Parameters:
- title
- description
- dueDate
- priority

*/
//function with private variables
const tasks = (title, description, dueDate, priority, project) => {
  let __title = title;
  let __description = description;
  let __dueDate = dueDate;
  let __priority = priority;
  let __project = project;

  const getTitle = () => __title;
  const getDescription = () => __description;
  const getDueDate = () => __dueDate;
  const getPriority = () => __priority;
  const getProject = () => __project;

  const setTitle = (newTitle) => {
    __title = newTitle;
  };

  const setDescription = (newDescription) => {
    __description = newDescription;
  };

  const setDueDate = (newDueDate) => {
    __dueDate = newDueDate;
  };

  const setPriority = (newPriority) => {
    __priority = newPriority;
  };

  function toJSON() {
    return { title, description, dueDate, priority, project };
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getProject,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toJSON,
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");


document.addEventListener("DOMContentLoaded", _modules_display_js__WEBPACK_IMPORTED_MODULE_0__.display.initDisplay);

/* App Features

Header
- thin header bar
- sandwich button to open side pane
- home button to navigate to Today to do list
- plus button to create a to do list
- profile button which opens a drop down list


Side pane
- navigate between today date and upcoming
- a projects drop down which lists all current projects
- a plus button to add new projects


Today main pane
- should show to do items from all projects


Upcoming main pane
- should show to do items for all upcoming from all projects

Projects main pane
- should show all to do items for that project only
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0ErQzs7QUFFL0MsOENBQThDLG9FQUFtQjs7QUFFakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheVN0eWxlcy5jc3M/MjYwYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL21haW5BcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgYm9yZGVyOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmFtZUZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxcmVtIDAgMC41cmVtIDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4ubmFtZUZvcm0gbGFiZWwge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvZGlzcGxheVN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYW1lRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIHBhZGRpbmc6IDFyZW0gMCAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5uYW1lRm9ybSBsYWJlbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXNwbGF5U3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlzcGxheVN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgXCIuL2Rpc3BsYXlTdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgdXBkYXRlUHJvamVjdFN0b3JhZ2UsXG4gIGluaXRTdG9yYWdlLFxuICBnZXRQcm9qZWN0U3RvcmFnZSxcbiAgZ2V0UHJvamVjdHNKU09OLFxuICBnZXRUYXNrc0pTT04sXG4gIHJlbW92ZVByb2plY3RTdG9yYWdlLFxufSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vbWFpbkFwcFwiO1xuXG4vKlxuRE9NIExvZ2ljXG4qL1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgaW5pdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgLy9zaG93IHNpZGVwYW5lXG4gICAgdG9nZ2xlU2lkZU5hdigpO1xuICAgIGluaXRIZWFkZXJCdG5zKCk7XG4gICAgaW5pdFN0b3JhZ2UoKTtcbiAgICBwcm9qZWN0TmF2RG9tLmluaXREZWZhdWx0UHJvamVjdCgpO1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCBidXR0b25zXG4gIH07XG5cbiAgY29uc3QgaW5pdEhlYWRlckJ0bnMgPSAoKSA9PiB7XG4gICAgLy9TYW5kd2ljaCBtZW51IGJ1dHRvblxuICAgIGNvbnN0IHNhbmR3aWNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5kd2ljaE5hdkJ0blwiKTtcbiAgICBzYW5kd2ljaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lkZU5hdik7XG4gIH07XG5cbiAgLy90b2dnbGVzIFNpZGVOYXZQYW5lXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQXBwXCIpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVQYW5lXCIpID09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZGVQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNpZGVQYW5lLmNsYXNzTGlzdC5hZGQoXCJzaWRlUGFuZVwiKTtcbiAgICAgIHNpZGVQYW5lLmlkID0gXCJzaWRlUGFuZVwiO1xuXG4gICAgICBzaWRlUGFuZS5hcHBlbmQoXG4gICAgICAgIGdlbmVyYXRlVG9kb05hdkNvbnRlbnQoKSxcbiAgICAgICAgcHJvamVjdE5hdkRvbS5nZW5lcmF0ZVByb2plY3ROYXZDb250ZW50KClcbiAgICAgICk7XG4gICAgICBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKHNpZGVQYW5lLCBwYXJlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICBwcm9qZWN0TmF2RG9tLmluaXRQcm9qZWN0QnRucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQocGFyZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZVRvZG9OYXZDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9OYXYuY2xhc3NMaXN0LmFkZChcInRvZG8tbmF2XCIpO1xuXG4gICAgY29uc3QgdG9kb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdG9kb0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5hdi1oZWFkaW5nXCIpO1xuICAgIHRvZG9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJUby1kbyBMaXN0XCI7XG5cbiAgICBjb25zdCB0b2RheVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRvZGF5VG9kby5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICB0b2RheVRvZG8uaWQgPSBcInRvZGF5XCI7XG4gICAgdG9kYXlUb2RvLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gICAgY29uc3QgdXBjb21pbmdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB1cGNvbWluZ1RvZG8uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgdXBjb21pbmdUb2RvLmlkID0gXCJ1cGNvbWluZ1wiO1xuICAgIHVwY29taW5nVG9kby50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcblxuICAgIHRvZG9OYXYuYXBwZW5kKHRvZG9IZWFkaW5nLCB0b2RheVRvZG8sIHVwY29taW5nVG9kbyk7XG5cbiAgICByZXR1cm4gdG9kb05hdjtcbiAgfTtcblxuICAvL0FkZCBQcm9qZWN0IERPTSBsb2dpYyBmb3Igc2hvd2luZyBmb3JtIHRvIGFkZCBwcm9qZWN0XG4gIGNvbnN0IHByb2plY3ROYXZEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluaXREZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZVByb2plY3RTdG9yYWdlKFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuICAgICAgZGlzcGxheU5ld1Byb2plY3QoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0TmF2Q29udGVudCA9ICgpID0+IHtcbiAgICAgIC8vTmF2IGZvciBwcm9qZWN0c1xuICAgICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RzV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtd3JhcHBlclwiKTtcblxuICAgICAgY29uc3QgcHJvamVjdHNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdHNOYXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWhlYWRpbmctd3JhcHBlclwiKTtcblxuICAgICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgcHJvamVjdHNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJuYXYtaGVhZGluZ1wiKTtcbiAgICAgIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICAgICAgY29uc3QgcHJvamVjdHNCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdHNCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuc1wiKTtcblxuICAgICAgY29uc3QgYWRkUHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkUHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RzXCIpO1xuICAgICAgYWRkUHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgIGFkZFByb2plY3RzQnRuLmlkID0gXCJhZGRQcm9qZWN0c1wiO1xuICAgICAgYWRkUHJvamVjdHNCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0Jz48dGl0bGU+QWRkIE5ldyBQcm9qZWN0PC90aXRsZT48cGF0aCBkPSdNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWicgLz48L3N2Zz5cIjtcblxuICAgICAgY29uc3QgZHJvcGRvd25Qcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkcm9wZG93blByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93UHJvamVjdHNcIik7XG4gICAgICBkcm9wZG93blByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgICBkcm9wZG93blByb2plY3RzQnRuLmlkID0gXCJzaG93UHJvamVjdHNcIjtcblxuICAgICAgcHJvamVjdHNCdG5Db250YWluZXIuYXBwZW5kKGFkZFByb2plY3RzQnRuLCBkcm9wZG93blByb2plY3RzQnRuKTtcbiAgICAgIHByb2plY3RzTmF2LmFwcGVuZChwcm9qZWN0c0hlYWRpbmcsIHByb2plY3RzQnRuQ29udGFpbmVyKTtcbiAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c05hdik7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0c1dyYXBwZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRQcm9qZWN0QnRucyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RzXCIpO1xuICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdE5hdkRvbS5hZGRQcm9qZWN0Rm9ybSk7XG4gICAgICB0b2dnbGVTaG93UHJvamVjdHNCdG4oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5BcHBcIik7XG4gICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyXCIpO1xuICAgICAgLy9Gb3JtIFdyYXBwZXJcbiAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG4gICAgICAvL0Zvcm0gSGVhZGVyXG4gICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG4gICAgICBmb3JtSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWhlYWRlclwiKTtcbiAgICAgIC8vQ3JlYXRlIEZvcm0gdG8gYWNjZXB0IG5hbWUgZm9yIG5ldyBwcm9qZWN0XG4gICAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgbmFtZUZvcm0uY2xhc3NMaXN0LmFkZChcIm5hbWVGb3JtXCIpO1xuICAgICAgbmFtZUZvcm0uaWQgPSBcInByb2plY3ROYW1lRm9ybVwiO1xuICAgICAgLy9OYW1lIGlucHV0IGZpZWxkXG4gICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBuYW1lSW5wdXQuaWQgPSBcInByb2plY3ROYW1lXCI7XG4gICAgICAvL2NhbmNlbCBidXR0b25cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWxBZGRQcm9qZWN0XCI7XG4gICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG4gICAgICAvL3N1Ym1pdCBidXR0b25cbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRBZGRQcm9qZWN0XCI7XG4gICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgIG5hbWVGb3JtLmFwcGVuZChuYW1lTGFiZWwsIG5hbWVJbnB1dCwgY2FuY2VsQnRuLCBzdWJtaXRCdG4pO1xuICAgICAgZm9ybURpdi5hcHBlbmQoZm9ybUhlYWRlciwgbmFtZUZvcm0pO1xuICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybVdyYXBwZXIpO1xuICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnNcbiAgICAgIGFkZEZvcm1CdG5FdmVudHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkRm9ybUJ0bkV2ZW50cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQWRkUHJvamVjdFwiKTtcbiAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBwZXJcIik7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5BcHBcIik7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lRm9ybVwiKTtcbiAgICAgICAgLy9wcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZUZvcm1cIik7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZShzdWJtaXRCdG4uZWxlbWVudHNbXCJwcm9qZWN0TmFtZVwiXS52YWx1ZSk7XG4gICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4oKTtcbiAgICAgICAgc2hvd1Byb2plY3RDb250ZW50QnRuKCk7XG4gICAgICAgIHN1Ym1pdEJ0bi5yZXNldCgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmVudERpdi5yZW1vdmVDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCIpO1xuICAgICAgaWYgKGJ0bldyYXBwZXIgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBnZXRQcm9qZWN0U3RvcmFnZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0QXJyYXlbaV0pID09IG51bGwpIHtcbiAgICAgICAgICAgIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpbGVFbGVtZW50KHByb2plY3RBcnJheVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0VGlsZUVsZW1lbnQgPSAodGlsZVRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGlsZS50ZXh0Q29udGVudCA9IHRpbGVUZXh0O1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aWxlXCIpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgIGlmICh0aWxlVGV4dCAhPSBcIkRlZmF1bHQgUHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGlsZS1idG5cIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbCA9IFwid2hpdGVcIj48dGl0bGU+ZGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlwiIC8+PC9zdmc+JztcbiAgICAgICAgdGlsZS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIH1cbiAgICAgIHRpbGUuaWQgPSB0aWxlVGV4dDtcbiAgICAgIHJldHVybiB0aWxlO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93UHJvamVjdENvbnRlbnRCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aWxlXCIpO1xuICAgICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93UHJvamVjdFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIG1haW5Db250ZW50RG9tLnNob3dQcm9qZWN0Q29udGVudChlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zaG93UHJvamVjdFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL05lZWQgdG8gYWRkIGxvZ2ljIHRvIGFsd2F5cyBrZWVwIGF0IGxlYXN0IDEgcHJvamVjdFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10aWxlLWJ0blwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaWxlc0FycmF5ID0gWy4uLnByb2plY3RUaWxlc107XG4gICAgICBwcm9qZWN0VGlsZXNBcnJheS5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmICh0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlTGlzdGVuZXJcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdFN0b3JhZ2UodGlsZS5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgIHRpbGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlLnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGVMaXN0ZW5lclwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVNob3dQcm9qZWN0c0J0biA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dQcm9qZWN0c1wiKTtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYnRuLXdyYXBwZXJcIikgPT0gbnVsbCkge1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+SGlkZSBQcm9qZWN0czwvdGl0bGU+PHBhdGggZD1cIk0xNS40MSwxNi41OEwxMC44MywxMkwxNS40MSw3LjQxTDE0LDZMOCwxMkwxNCwxOEwxNS40MSwxNi41OFpcIiAvPjwvc3ZnPic7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0cyk7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+U2hvdyBQcm9qZWN0czwvdGl0bGU+PHBhdGggZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIi8+PC9zdmc+JztcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RzKTtcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gZ2V0UHJvamVjdFN0b3JhZ2UoKTtcbiAgICAgIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBidXR0b25XcmFwcGVyLmlkID0gXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCI7XG4gICAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24td3JhcHBlclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0QXJyYXlbaV0pID09IG51bGwpIHtcbiAgICAgICAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaWxlRWxlbWVudChwcm9qZWN0QXJyYXlbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG4gICAgICB0b2dnbGVTaG93UHJvamVjdHNCdG4oKTtcbiAgICAgIHNob3dQcm9qZWN0Q29udGVudEJ0bigpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bigpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtd3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYnRuLXdyYXBwZXJcIik7XG5cbiAgICAgIHByb2plY3RXcmFwcGVyLnJlbW92ZUNoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgICAgdG9nZ2xlU2hvd1Byb2plY3RzQnRuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRQcm9qZWN0Rm9ybSxcbiAgICAgIHRvZ2dsZVNob3dQcm9qZWN0c0J0bixcbiAgICAgIGdlbmVyYXRlUHJvamVjdE5hdkNvbnRlbnQsXG4gICAgICBpbml0UHJvamVjdEJ0bnMsXG4gICAgICBpbml0RGVmYXVsdFByb2plY3QsXG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCBtYWluQ29udGVudERvbSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1Byb2plY3RDb250ZW50ID0gKHByb2plY3RCdG5QcmVzc2VkKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50XCIpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC13cmFwcGVyXCIpID09IG51bGwpIHtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50VGVtcGxhdGUocHJvamVjdEJ0blByZXNzZWQudGFyZ2V0LmlkKSk7XG4gICAgICB9XG5cbiAgICAgIHRhc2tzRG9tLmFkZFRhc2tCdG5GdW5jKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50VGVtcGxhdGUgPSAodGl0bGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgLy9jcmVhdGUgbmV3IHRhc2sgYnV0dG9uXG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY29udGVudFRpdGxlLCB0YXNrc0RvbS5hZGRUYXNrQnRuKCkpO1xuXG4gICAgICAvL1Nob3cgVGFza3NcblxuICAgICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93VG9kYXlDb250ZW50ID0gKCkgPT4ge307XG4gICAgY29uc3Qgc2hvd1VwY29taW5nQ29udGVudCA9ICgpID0+IHt9O1xuXG4gICAgcmV0dXJuIHsgc2hvd1Byb2plY3RDb250ZW50IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza3NEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tidXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgIHRhc2tidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZHRhc2stYnRuXCIpO1xuICAgICAgcmV0dXJuIHRhc2tidXR0b247XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG5GdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFzay1idG5cIik7XG4gICAgICB0YXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tidXR0b24ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGFza0Zvcm1FeHBhbmRlZCgpLCB0YXNrYnV0dG9uKTtcbiAgICAgICAgYWRkVGFza0Zvcm1TdWJtaXRFdmVudCgpO1xuICAgICAgICB0YXNrYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza2J1dHRvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0Zvcm1FeHBhbmRlZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRm9ybS13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgdGFza0dlbmVyYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgdGFza0dlbmVyYXRlRm9ybS5jbGFzc0xpc3QuYWRkKFwidGFza0Zvcm0tZXhwYW5kZWRcIik7XG4gICAgICB0YXNrR2VuZXJhdGVGb3JtLmlkID0gXCJuZXdUYXNrRm9ybVwiO1xuICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGFza05hbWVJbnB1dC5pZCA9IFwidGFza05hbWVcIjtcbiAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIHRhc2tEZXNjSW5wdXQuaWQgPSBcInRhc2tEZXNjXCI7XG4gICAgICB0YXNrRGVzY0lucHV0Lm1heExlbmd0aCA9IDM1MDtcbiAgICAgIHRhc2tEZXNjSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uICgzNTAgY2hhcnMgbWF4KVwiO1xuICAgICAgLy9DYXRlZ29yaWVzXG4gICAgICBjb25zdCB0YXNrQ2F0ZWdvcnlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tDYXRlZ29yeVdyYXBwZXIuaWQgPSBcInRhc2tDYXRlZ29yeS13cmFwcGVyXCI7XG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0R1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gXCJ0YXNrRHVlRGF0ZVwiO1xuICAgICAgdGFza0R1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIERhdGVcIjtcblxuICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSBcInRhc2tQcmlvcml0eVwiO1xuXG4gICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBsb3dQcmlvcml0eS52YWx1ZSA9IFwibG93XCI7XG4gICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgICAgIGNvbnN0IG1lZFByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgbWVkUHJpb3J0eS52YWx1ZSA9IFwibWVkXCI7XG4gICAgICBtZWRQcmlvcnR5LnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICAgICAgY29uc3QgaGlnaFByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgaGlnaFByaW9ydHkudmFsdWUgPSBcImhpZ2hcIjtcbiAgICAgIGhpZ2hQcmlvcnR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZChoaWdoUHJpb3J0eSwgbWVkUHJpb3J0eSwgbG93UHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgIGNhbmNlbEJ0bi5pZCA9IFwiY2FuY2VsQWRkVGFza1wiO1xuICAgICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtdGFzay1idG5cIik7XG5cbiAgICAgIGNvbnN0IHRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrU3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc3VibWl0LWJ0blwiKTtcbiAgICAgIHRhc2tTdWJtaXRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgICB0YXNrU3VibWl0QnRuLnZhbHVlID0gXCJDcmVhdGUgVGFza1wiO1xuXG4gICAgICB0YXNrQ2F0ZWdvcnlXcmFwcGVyLmFwcGVuZChcbiAgICAgICAgdGFza0R1ZURhdGVJbnB1dCxcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQsXG4gICAgICAgIGRyb3BEb3duUHJvamVjdHMoKSxcbiAgICAgICAgY2FuY2VsQnRuLFxuICAgICAgICB0YXNrU3VibWl0QnRuXG4gICAgICApO1xuICAgICAgdGFza0dlbmVyYXRlRm9ybS5hcHBlbmQoXG4gICAgICAgIHRhc2tOYW1lSW5wdXQsXG4gICAgICAgIHRhc2tEZXNjSW5wdXQsXG4gICAgICAgIHRhc2tDYXRlZ29yeVdyYXBwZXJcbiAgICAgICk7XG4gICAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrR2VuZXJhdGVGb3JtKTtcblxuICAgICAgcmV0dXJuIGZvcm1XcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm0td3JhcHBlclwiKTtcbiAgICAgIHRhc2tGb3JtLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGFkZFRhc2tCdG4oKSwgdGFza0Zvcm0pO1xuICAgICAgYWRkVGFza0J0bkZ1bmMoKTtcbiAgICAgIHRhc2tGb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza0Zvcm0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybVN1Ym1pdEV2ZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpO1xuICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjXCIpO1xuICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1Byb2plY3RcIik7XG4gICAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2soXG4gICAgICAgICAgdGFza05hbWUudmFsdWUsXG4gICAgICAgICAgdGFza0Rlc2MudmFsdWUsXG4gICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gICAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgIHRhc2tQcm9qZWN0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaWRlVGFza0Zvcm0oKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybUNhbmNlbEV2ZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxBZGRUYXNrXCIpO1xuICAgICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRyb3BEb3duUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBnZXRQcm9qZWN0U3RvcmFnZSgpO1xuICAgICAgY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHByb2plY3REcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kcm9wZG93blwiKTtcbiAgICAgIHByb2plY3REcm9wRG93bi5pZCA9IFwidGFza1Byb2plY3RcIjtcbiAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9qZWN0RHJvcERvd247XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tGb3JtSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIC8vd2hlbiB1c2VyIGZpbGxzIG91dCBhc2sgZm9ybSwgaXQgc2hvdWxkIHRha2UgYXdheSB0aGUgYWRkIHRhc2sgZm9ybVxuICAgICAgLy9pdCBzaG91bGQgY3JlYXRlIGEgbmV3IHRhc2sgYW5kIHVwZGF0ZSB0aGUgc3RvcmFnZVxuICAgICAgLy9pdCBzaG91bGQgZGlzcGxheSB0aGUgbmV3IHRhc2sgY3JlYXRlZCBpbiBhYmJyZXZpYXRlZCBmb3JtXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRUYXNrQnRuLFxuICAgICAgdGFza0Zvcm1FeHBhbmRlZCxcbiAgICAgIGFkZFRhc2tCdG5GdW5jLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0RGlzcGxheSxcbiAgfTtcbn0pKCk7XG5cbi8vaW5pdCBEaXNwbGF5IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIERPTSBjb250ZW50IGlzIGxvYWRlZFxuXG5leHBvcnQgeyBkaXNwbGF5IH07XG4iLCIvKlxuQXBwbGljYXRpb24gTG9naWNcblxuKi9cbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAoXG4gIHRhc2tOYW1lLFxuICB0YXNrRGVzYyxcbiAgdGFza0R1ZURhdGUsXG4gIHRhc2tQcmlvcml0eSxcbiAgdGFza1Byb2plY3RcbikgPT4ge1xuICAvL2NyZWF0ZSBuZXcgdGFzaywgdXBkYXRlIHN0b3JhZ2VcbiAgY29uc3QgbmV3VGFzayA9IHRhc2tzKFxuICAgIHRhc2tOYW1lLFxuICAgIHRhc2tEZXNjLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrUHJvamVjdFxuICApO1xuICB1cGRhdGVUYXNrU3RvcmFnZShuZXdUYXNrKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfTtcbiIsIi8qIFByb2plY3QgRmFjdG9yeSBGdW5jdGlvblxuLSBjcmVhdGVzIGEgcHJvamVjdCBvYmplY3QgY29udGFpbmluZyBuYW1lIGFuZCB0YXNrc1xuKi9cblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIC8vRm9yIHN0b3JhZ2UsIGtleXMgd2lsbCBiZSBwcm9qZWN0IG5hbWUgYW5kIHZhbHVlcyB3aWxsIGJlIHRoZSB0YXNrc1xuICBjb25zdCBfX25hbWUgPSBuYW1lO1xuICBjb25zdCBfX3Rhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IF9fbmFtZTtcblxuICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBfX25hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgIF9fdGFza3MuYXBwZW5kKHRhc2tPYmplY3QpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4gX190YXNrcztcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge307XG5cbiAgY29uc3QgZ2V0RnV0dXJlVGFza3MgPSAoKSA9PiB7fTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgY2hhbmdlTmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0RnV0dXJlVGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG4vKlxuaW5pdFN0b3JhZ2UgaWYgZmlyc3QgdGltZSBvbiBwYWdlXG5cbkluaXRpYWxpemUgaW4gbG9jYWwgc3RvcmFnZSBhIHRhc2tzIGFycmF5IHRvIHN0b3JlIGFsbCB0YXNrc1xuSW5pdGlhbGl6ZSBhIHByb2plY3QgbGlzdCBhcnJheSB0byBzdG9yZSBhbGwgcHJvamVjdCBuYW1lc1xuXG4qL1xuY29uc3QgaW5pdFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGlmIChnZXRQcm9qZWN0c0pTT04oKSA9PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfVxufTtcbi8vYWRkIG5ldyBwcm9qZWN0IG5hbWUgaW50byBwcm9qZWN0IGFycmF5IGluIGxvY2FsIHN0b3JhZ2Vcbi8vaWYgZHVwbGljYXRlLCBjb25zb2xlIGxvZ3MgZm9yIG5vd1xuY29uc3QgdXBkYXRlUHJvamVjdFN0b3JhZ2UgPSAobmFtZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gIGxldCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBpZiAoIXByb2plY3RBcnJheS5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbiAgfVxufTtcblxuLy9nZXR0ZXIgZm9yIHByb2plY3QgbmFtZSBhcnJheVxuY29uc3QgZ2V0UHJvamVjdFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIHJldHVybiBwcm9qZWN0QXJyYXk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0c0pTT04gPSAoKSA9PiB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQXJyYXkgPSBnZXRQcm9qZWN0U3RvcmFnZSgpO1xuICBpZiAocHJvamVjdHNBcnJheS5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKHByb2plY3RzQXJyYXkuaW5kZXhPZihrZXkpLCAxKTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbn07XG5cbmNvbnN0IGdldFRhc2tzSlNPTiA9ICgpID0+IHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrU3RvcmFnZSA9IChuZXdUYXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tBcnJheSA9IEpTT04ucGFyc2UoZ2V0VGFza3NKU09OKCkpO1xuICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKTtcbiAgY29uc3QgdGVzdEFycmF5ID0gSlNPTi5wYXJzZShnZXRUYXNrc0pTT04oKSk7XG59O1xuXG5jb25zdCBnZXRUYXNrU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGFza0FycmF5ID0gSlNPTi5wYXJzZShnZXRUYXNrc0pTT04oKSk7XG4gIHRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzayA9IHRhc2tzKFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5wcm9qZWN0XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tBcnJheTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVByb2plY3RTdG9yYWdlLFxuICBpbml0U3RvcmFnZSxcbiAgZ2V0UHJvamVjdFN0b3JhZ2UsXG4gIGdldFByb2plY3RzSlNPTixcbiAgZ2V0VGFza3NKU09OLFxuICByZW1vdmVQcm9qZWN0U3RvcmFnZSxcbiAgdXBkYXRlVGFza1N0b3JhZ2UsXG4gIGdldFRhc2tTdG9yYWdlLFxufTtcbiIsIi8qIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHRhc2tzXG4tIGhvbGRzIGRhdGEgc3BlY2lmaWMgdG8gdGFza1xuXG5QYXJhbWV0ZXJzOlxuLSB0aXRsZVxuLSBkZXNjcmlwdGlvblxuLSBkdWVEYXRlXG4tIHByaW9yaXR5XG5cbiovXG4vL2Z1bmN0aW9uIHdpdGggcHJpdmF0ZSB2YXJpYWJsZXNcbmNvbnN0IHRhc2tzID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgbGV0IF9fdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIGxldCBfX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBfX3Byb2plY3QgPSBwcm9qZWN0O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX190aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfX2Rlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX19kdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9fcHJpb3JpdHk7XG4gIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBfX3Byb2plY3Q7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICBfX3RpdGxlID0gbmV3VGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBfX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgX19kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIF9fcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldFByb2plY3QsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICB0b0pTT04sXG4gIH07XG59O1xuXG5leHBvcnQgeyB0YXNrcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheS5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBkaXNwbGF5LmluaXREaXNwbGF5KTtcblxuLyogQXBwIEZlYXR1cmVzXG5cbkhlYWRlclxuLSB0aGluIGhlYWRlciBiYXJcbi0gc2FuZHdpY2ggYnV0dG9uIHRvIG9wZW4gc2lkZSBwYW5lXG4tIGhvbWUgYnV0dG9uIHRvIG5hdmlnYXRlIHRvIFRvZGF5IHRvIGRvIGxpc3Rcbi0gcGx1cyBidXR0b24gdG8gY3JlYXRlIGEgdG8gZG8gbGlzdFxuLSBwcm9maWxlIGJ1dHRvbiB3aGljaCBvcGVucyBhIGRyb3AgZG93biBsaXN0XG5cblxuU2lkZSBwYW5lXG4tIG5hdmlnYXRlIGJldHdlZW4gdG9kYXkgZGF0ZSBhbmQgdXBjb21pbmdcbi0gYSBwcm9qZWN0cyBkcm9wIGRvd24gd2hpY2ggbGlzdHMgYWxsIGN1cnJlbnQgcHJvamVjdHNcbi0gYSBwbHVzIGJ1dHRvbiB0byBhZGQgbmV3IHByb2plY3RzXG5cblxuVG9kYXkgbWFpbiBwYW5lXG4tIHNob3VsZCBzaG93IHRvIGRvIGl0ZW1zIGZyb20gYWxsIHByb2plY3RzXG5cblxuVXBjb21pbmcgbWFpbiBwYW5lXG4tIHNob3VsZCBzaG93IHRvIGRvIGl0ZW1zIGZvciBhbGwgdXBjb21pbmcgZnJvbSBhbGwgcHJvamVjdHNcblxuUHJvamVjdHMgbWFpbiBwYW5lXG4tIHNob3VsZCBzaG93IGFsbCB0byBkbyBpdGVtcyBmb3IgdGhhdCBwcm9qZWN0IG9ubHlcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=