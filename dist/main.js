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
      } else if (
        document.querySelector(".content-wrapper").firstChild.id !=
        projectBtnPressed.target.id
      ) {
        while (parentDiv.firstChild) {
          parentDiv.removeChild(parentDiv.lastChild);
        }
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
        addTaskFormCancelEvent();
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
      cancelBtn.addEventListener("click", (e) => {
        addTaskForm.reset();
        hideTaskForm();
        e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBK0M7O0FBRS9DLDhDQUE4QyxvRUFBbUI7O0FBRWpFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5U3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTdHlsZXMuY3NzPzI2MGMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9tYWluQXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0td3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGJvcmRlcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hbWVGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgcGFkZGluZzogMXJlbSAwIDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLm5hbWVGb3JtIGxhYmVsIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9ybS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgYm9yZGVyOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmFtZUZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxcmVtIDAgMC41cmVtIDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4ubmFtZUZvcm0gbGFiZWwge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlzcGxheVN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXlTdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFwiLi9kaXNwbGF5U3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7XG4gIHVwZGF0ZVByb2plY3RTdG9yYWdlLFxuICBpbml0U3RvcmFnZSxcbiAgZ2V0UHJvamVjdFN0b3JhZ2UsXG4gIGdldFByb2plY3RzSlNPTixcbiAgZ2V0VGFza3NKU09OLFxuICByZW1vdmVQcm9qZWN0U3RvcmFnZSxcbn0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL21haW5BcHBcIjtcblxuLypcbkRPTSBMb2dpY1xuKi9cblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXREaXNwbGF5ID0gKCkgPT4ge1xuICAgIC8vc2hvdyBzaWRlcGFuZVxuICAgIHRvZ2dsZVNpZGVOYXYoKTtcbiAgICBpbml0SGVhZGVyQnRucygpO1xuICAgIGluaXRTdG9yYWdlKCk7XG4gICAgcHJvamVjdE5hdkRvbS5pbml0RGVmYXVsdFByb2plY3QoKTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgYnV0dG9uc1xuICB9O1xuXG4gIGNvbnN0IGluaXRIZWFkZXJCdG5zID0gKCkgPT4ge1xuICAgIC8vU2FuZHdpY2ggbWVudSBidXR0b25cbiAgICBjb25zdCBzYW5kd2ljaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZHdpY2hOYXZCdG5cIik7XG4gICAgc2FuZHdpY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVNpZGVOYXYpO1xuICB9O1xuXG4gIC8vdG9nZ2xlcyBTaWRlTmF2UGFuZVxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkFwcFwiKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlUGFuZVwiKSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaWRlUGFuZS5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVcIik7XG4gICAgICBzaWRlUGFuZS5pZCA9IFwic2lkZVBhbmVcIjtcblxuICAgICAgc2lkZVBhbmUuYXBwZW5kKFxuICAgICAgICBnZW5lcmF0ZVRvZG9OYXZDb250ZW50KCksXG4gICAgICAgIHByb2plY3ROYXZEb20uZ2VuZXJhdGVQcm9qZWN0TmF2Q29udGVudCgpXG4gICAgICApO1xuICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzaWRlUGFuZSwgcGFyZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgcHJvamVjdE5hdkRvbS5pbml0UHJvamVjdEJ0bnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHBhcmVudERpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVUb2RvTmF2Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTmF2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hdlwiKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRvZG9IZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJuYXYtaGVhZGluZ1wiKTtcbiAgICB0b2RvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG8tZG8gTGlzdFwiO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RheVRvZG8uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgdG9kYXlUb2RvLmlkID0gXCJ0b2RheVwiO1xuICAgIHRvZGF5VG9kby50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIGNvbnN0IHVwY29taW5nVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdXBjb21pbmdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuICAgIHVwY29taW5nVG9kby5pZCA9IFwidXBjb21pbmdcIjtcbiAgICB1cGNvbWluZ1RvZG8udGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG5cbiAgICB0b2RvTmF2LmFwcGVuZCh0b2RvSGVhZGluZywgdG9kYXlUb2RvLCB1cGNvbWluZ1RvZG8pO1xuXG4gICAgcmV0dXJuIHRvZG9OYXY7XG4gIH07XG5cbiAgLy9BZGQgUHJvamVjdCBET00gbG9naWMgZm9yIHNob3dpbmcgZm9ybSB0byBhZGQgcHJvamVjdFxuICBjb25zdCBwcm9qZWN0TmF2RG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZShcIkRlZmF1bHQgUHJvamVjdFwiKTtcbiAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdE5hdkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAvL05hdiBmb3IgcHJvamVjdHNcbiAgICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXdyYXBwZXJcIik7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RzTmF2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1oZWFkaW5nLXdyYXBwZXJcIik7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIHByb2plY3RzSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwibmF2LWhlYWRpbmdcIik7XG4gICAgICBwcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RzQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0bnNcIik7XG5cbiAgICAgIGNvbnN0IGFkZFByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFkZFByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0c1wiKTtcbiAgICAgIGFkZFByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgICBhZGRQcm9qZWN0c0J0bi5pZCA9IFwiYWRkUHJvamVjdHNcIjtcbiAgICAgIGFkZFByb2plY3RzQnRuLmlubmVySFRNTCA9XG4gICAgICAgIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHRpdGxlPkFkZCBOZXcgUHJvamVjdDwvdGl0bGU+PHBhdGggZD0nTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1onIC8+PC9zdmc+XCI7XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duUHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwic2hvd1Byb2plY3RzXCIpO1xuICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5pZCA9IFwic2hvd1Byb2plY3RzXCI7XG5cbiAgICAgIHByb2plY3RzQnRuQ29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0c0J0biwgZHJvcGRvd25Qcm9qZWN0c0J0bik7XG4gICAgICBwcm9qZWN0c05hdi5hcHBlbmQocHJvamVjdHNIZWFkaW5nLCBwcm9qZWN0c0J0bkNvbnRhaW5lcik7XG4gICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNOYXYpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdHNXcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0UHJvamVjdEJ0bnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0c1wiKTtcbiAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3ROYXZEb20uYWRkUHJvamVjdEZvcm0pO1xuICAgICAgdG9nZ2xlU2hvd1Byb2plY3RzQnRuKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQXBwXCIpO1xuICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcm0td3JhcHBlclwiKTtcbiAgICAgIC8vRm9ybSBXcmFwcGVyXG4gICAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgICAgLy9Gb3JtIEhlYWRlclxuICAgICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiO1xuICAgICAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1oZWFkZXJcIik7XG4gICAgICAvL0NyZWF0ZSBGb3JtIHRvIGFjY2VwdCBuYW1lIGZvciBuZXcgcHJvamVjdFxuICAgICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIG5hbWVGb3JtLmNsYXNzTGlzdC5hZGQoXCJuYW1lRm9ybVwiKTtcbiAgICAgIG5hbWVGb3JtLmlkID0gXCJwcm9qZWN0TmFtZUZvcm1cIjtcbiAgICAgIC8vTmFtZSBpbnB1dCBmaWVsZFxuICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdE5hbWVcIik7XG4gICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgbmFtZUlucHV0LmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgICAgLy9jYW5jZWwgYnV0dG9uXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgIGNhbmNlbEJ0bi5pZCA9IFwiY2FuY2VsQWRkUHJvamVjdFwiO1xuICAgICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuICAgICAgLy9zdWJtaXQgYnV0dG9uXG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIHN1Ym1pdEJ0bi5pZCA9IFwic3VibWl0QWRkUHJvamVjdFwiO1xuICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBuYW1lRm9ybS5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQsIGNhbmNlbEJ0biwgc3VibWl0QnRuKTtcbiAgICAgIGZvcm1EaXYuYXBwZW5kKGZvcm1IZWFkZXIsIG5hbWVGb3JtKTtcbiAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zXG4gICAgICBhZGRGb3JtQnRuRXZlbnRzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZEZvcm1CdG5FdmVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEFkZFByb2plY3RcIik7XG4gICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQXBwXCIpO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvL2NvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZUZvcm1cIik7XG4gICAgICAgIC8vcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmVudERpdi5yZW1vdmVDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVGb3JtXCIpO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgdXBkYXRlUHJvamVjdFN0b3JhZ2Uoc3VibWl0QnRuLmVsZW1lbnRzW1wicHJvamVjdE5hbWVcIl0udmFsdWUpO1xuICAgICAgICBkaXNwbGF5TmV3UHJvamVjdCgpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuKCk7XG4gICAgICAgIHNob3dQcm9qZWN0Q29udGVudEJ0bigpO1xuICAgICAgICBzdWJtaXRCdG4ucmVzZXQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQoZm9ybVdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1idG4td3JhcHBlclwiKTtcbiAgICAgIGlmIChidG5XcmFwcGVyICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gZ2V0UHJvamVjdFN0b3JhZ2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdEFycmF5W2ldKSA9PSBudWxsKSB7XG4gICAgICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaWxlRWxlbWVudChwcm9qZWN0QXJyYXlbaV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdFRpbGVFbGVtZW50ID0gKHRpbGVUZXh0KSA9PiB7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpbGUudGV4dENvbnRlbnQgPSB0aWxlVGV4dDtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGlsZVwiKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgICBpZiAodGlsZVRleHQgIT0gXCJEZWZhdWx0IFByb2plY3RcIikge1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRpbGUtYnRuXCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGwgPSBcIndoaXRlXCI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD1cIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcIiAvPjwvc3ZnPic7XG4gICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgICB9XG4gICAgICB0aWxlLmlkID0gdGlsZVRleHQ7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RDb250ZW50QnRuID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGlsZVwiKTtcbiAgICAgIHByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd1Byb2plY3RcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBtYWluQ29udGVudERvbS5zaG93UHJvamVjdENvbnRlbnQoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc2hvd1Byb2plY3RcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9OZWVkIHRvIGFkZCBsb2dpYyB0byBhbHdheXMga2VlcCBhdCBsZWFzdCAxIHByb2plY3RcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGlsZS1idG5cIik7XG4gICAgICBjb25zdCBwcm9qZWN0VGlsZXNBcnJheSA9IFsuLi5wcm9qZWN0VGlsZXNdO1xuICAgICAgcHJvamVjdFRpbGVzQXJyYXkuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICBpZiAodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZUxpc3RlbmVyXCIpICE9IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGlsZS5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3RTdG9yYWdlKHRpbGUucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICB0aWxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGlsZS5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlTGlzdGVuZXJcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVTaG93UHJvamVjdHNCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93blByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93UHJvamVjdHNcIik7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCIpID09IG51bGwpIHtcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkhpZGUgUHJvamVjdHM8L3RpdGxlPjxwYXRoIGQ9XCJNMTUuNDEsMTYuNThMMTAuODMsMTJMMTUuNDEsNy40MUwxNCw2TDgsMTJMMTQsMThMMTUuNDEsMTYuNThaXCIgLz48L3N2Zz4nO1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdHMpO1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPlNob3cgUHJvamVjdHM8L3RpdGxlPjxwYXRoIGQ9XCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXCIvPjwvc3ZnPic7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0cyk7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGdldFByb2plY3RTdG9yYWdlKCk7XG4gICAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtd3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnV0dG9uV3JhcHBlci5pZCA9IFwicHJvamVjdC1idG4td3JhcHBlclwiO1xuICAgICAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXdyYXBwZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdEFycmF5W2ldKSA9PSBudWxsKSB7XG4gICAgICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0VGlsZUVsZW1lbnQocHJvamVjdEFycmF5W2ldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgICAgdG9nZ2xlU2hvd1Byb2plY3RzQnRuKCk7XG4gICAgICBzaG93UHJvamVjdENvbnRlbnRCdG4oKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXdyYXBwZXJcIik7XG4gICAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCIpO1xuXG4gICAgICBwcm9qZWN0V3JhcHBlci5yZW1vdmVDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgICAgIHRvZ2dsZVNob3dQcm9qZWN0c0J0bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkUHJvamVjdEZvcm0sXG4gICAgICB0b2dnbGVTaG93UHJvamVjdHNCdG4sXG4gICAgICBnZW5lcmF0ZVByb2plY3ROYXZDb250ZW50LFxuICAgICAgaW5pdFByb2plY3RCdG5zLFxuICAgICAgaW5pdERlZmF1bHRQcm9qZWN0LFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnREb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNob3dQcm9qZWN0Q29udGVudCA9IChwcm9qZWN0QnRuUHJlc3NlZCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtd3JhcHBlclwiKSA9PSBudWxsKSB7XG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudFRlbXBsYXRlKHByb2plY3RCdG5QcmVzc2VkLnRhcmdldC5pZCkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXdyYXBwZXJcIikuZmlyc3RDaGlsZC5pZCAhPVxuICAgICAgICBwcm9qZWN0QnRuUHJlc3NlZC50YXJnZXQuaWRcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAocGFyZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQocGFyZW50RGl2Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50VGVtcGxhdGUocHJvamVjdEJ0blByZXNzZWQudGFyZ2V0LmlkKSk7XG4gICAgICB9XG5cbiAgICAgIHRhc2tzRG9tLmFkZFRhc2tCdG5GdW5jKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50VGVtcGxhdGUgPSAodGl0bGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgLy9jcmVhdGUgbmV3IHRhc2sgYnV0dG9uXG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY29udGVudFRpdGxlLCB0YXNrc0RvbS5hZGRUYXNrQnRuKCkpO1xuXG4gICAgICAvL1Nob3cgVGFza3NcblxuICAgICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93VG9kYXlDb250ZW50ID0gKCkgPT4ge307XG4gICAgY29uc3Qgc2hvd1VwY29taW5nQ29udGVudCA9ICgpID0+IHt9O1xuXG4gICAgcmV0dXJuIHsgc2hvd1Byb2plY3RDb250ZW50IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza3NEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tidXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgIHRhc2tidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZHRhc2stYnRuXCIpO1xuICAgICAgcmV0dXJuIHRhc2tidXR0b247XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG5GdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFzay1idG5cIik7XG4gICAgICB0YXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tidXR0b24ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGFza0Zvcm1FeHBhbmRlZCgpLCB0YXNrYnV0dG9uKTtcbiAgICAgICAgYWRkVGFza0Zvcm1TdWJtaXRFdmVudCgpO1xuICAgICAgICBhZGRUYXNrRm9ybUNhbmNlbEV2ZW50KCk7XG4gICAgICAgIHRhc2tidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrYnV0dG9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrRm9ybUV4cGFuZGVkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtLXdyYXBwZXJcIik7XG4gICAgICBjb25zdCB0YXNrR2VuZXJhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICB0YXNrR2VuZXJhdGVGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRm9ybS1leHBhbmRlZFwiKTtcbiAgICAgIHRhc2tHZW5lcmF0ZUZvcm0uaWQgPSBcIm5ld1Rhc2tGb3JtXCI7XG4gICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICB0YXNrTmFtZUlucHV0LmlkID0gXCJ0YXNrTmFtZVwiO1xuICAgICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG4gICAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgdGFza0Rlc2NJbnB1dC5pZCA9IFwidGFza0Rlc2NcIjtcbiAgICAgIHRhc2tEZXNjSW5wdXQubWF4TGVuZ3RoID0gMzUwO1xuICAgICAgdGFza0Rlc2NJbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb24gKDM1MCBjaGFycyBtYXgpXCI7XG4gICAgICAvL0NhdGVnb3JpZXNcbiAgICAgIGNvbnN0IHRhc2tDYXRlZ29yeVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0NhdGVnb3J5V3JhcHBlci5pZCA9IFwidGFza0NhdGVnb3J5LXdyYXBwZXJcIjtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgIHRhc2tEdWVEYXRlSW5wdXQuaWQgPSBcInRhc2tEdWVEYXRlXCI7XG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xuXG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9IFwidGFza1ByaW9yaXR5XCI7XG5cbiAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIGxvd1ByaW9yaXR5LnZhbHVlID0gXCJsb3dcIjtcbiAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcblxuICAgICAgY29uc3QgbWVkUHJpb3J0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBtZWRQcmlvcnR5LnZhbHVlID0gXCJtZWRcIjtcbiAgICAgIG1lZFByaW9ydHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gICAgICBjb25zdCBoaWdoUHJpb3J0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBoaWdoUHJpb3J0eS52YWx1ZSA9IFwiaGlnaFwiO1xuICAgICAgaGlnaFByaW9ydHkudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kKGhpZ2hQcmlvcnR5LCBtZWRQcmlvcnR5LCBsb3dQcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWxBZGRUYXNrXCI7XG4gICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC10YXNrLWJ0blwiKTtcblxuICAgICAgY29uc3QgdGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tTdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tzdWJtaXQtYnRuXCIpO1xuICAgICAgdGFza1N1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgIHRhc2tTdWJtaXRCdG4udmFsdWUgPSBcIkNyZWF0ZSBUYXNrXCI7XG5cbiAgICAgIHRhc2tDYXRlZ29yeVdyYXBwZXIuYXBwZW5kKFxuICAgICAgICB0YXNrRHVlRGF0ZUlucHV0LFxuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dCxcbiAgICAgICAgZHJvcERvd25Qcm9qZWN0cygpLFxuICAgICAgICBjYW5jZWxCdG4sXG4gICAgICAgIHRhc2tTdWJtaXRCdG5cbiAgICAgICk7XG4gICAgICB0YXNrR2VuZXJhdGVGb3JtLmFwcGVuZChcbiAgICAgICAgdGFza05hbWVJbnB1dCxcbiAgICAgICAgdGFza0Rlc2NJbnB1dCxcbiAgICAgICAgdGFza0NhdGVnb3J5V3JhcHBlclxuICAgICAgKTtcbiAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tHZW5lcmF0ZUZvcm0pO1xuXG4gICAgICByZXR1cm4gZm9ybVdyYXBwZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybS13cmFwcGVyXCIpO1xuICAgICAgdGFza0Zvcm0ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoYWRkVGFza0J0bigpLCB0YXNrRm9ybSk7XG4gICAgICBhZGRUYXNrQnRuRnVuYygpO1xuICAgICAgdGFza0Zvcm0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrRm9ybSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtU3VibWl0RXZlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIik7XG4gICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NcIik7XG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKTtcbiAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJvamVjdFwiKTtcbiAgICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlTmV3VGFzayhcbiAgICAgICAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgICB0YXNrRGVzYy52YWx1ZSxcbiAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgdGFza1Byb2plY3QudmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtQ2FuY2VsRXZlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEFkZFRhc2tcIik7XG4gICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZHJvcERvd25Qcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGdldFByb2plY3RTdG9yYWdlKCk7XG4gICAgICBjb25zdCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgcHJvamVjdERyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRyb3Bkb3duXCIpO1xuICAgICAgcHJvamVjdERyb3BEb3duLmlkID0gXCJ0YXNrUHJvamVjdFwiO1xuICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb2plY3REcm9wRG93bjtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0Zvcm1IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgLy93aGVuIHVzZXIgZmlsbHMgb3V0IGFzayBmb3JtLCBpdCBzaG91bGQgdGFrZSBhd2F5IHRoZSBhZGQgdGFzayBmb3JtXG4gICAgICAvL2l0IHNob3VsZCBjcmVhdGUgYSBuZXcgdGFzayBhbmQgdXBkYXRlIHRoZSBzdG9yYWdlXG4gICAgICAvL2l0IHNob3VsZCBkaXNwbGF5IHRoZSBuZXcgdGFzayBjcmVhdGVkIGluIGFiYnJldmlhdGVkIGZvcm1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZFRhc2tCdG4sXG4gICAgICB0YXNrRm9ybUV4cGFuZGVkLFxuICAgICAgYWRkVGFza0J0bkZ1bmMsXG4gICAgfTtcbiAgfSkoKTtcblxuICByZXR1cm4ge1xuICAgIGluaXREaXNwbGF5LFxuICB9O1xufSkoKTtcblxuLy9pbml0IERpc3BsYXkgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5cbmV4cG9ydCB7IGRpc3BsYXkgfTtcbiIsIi8qXG5BcHBsaWNhdGlvbiBMb2dpY1xuXG4qL1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgY3JlYXRlTmV3VGFzayA9IChcbiAgdGFza05hbWUsXG4gIHRhc2tEZXNjLFxuICB0YXNrRHVlRGF0ZSxcbiAgdGFza1ByaW9yaXR5LFxuICB0YXNrUHJvamVjdFxuKSA9PiB7XG4gIC8vY3JlYXRlIG5ldyB0YXNrLCB1cGRhdGUgc3RvcmFnZVxuICBjb25zdCBuZXdUYXNrID0gdGFza3MoXG4gICAgdGFza05hbWUsXG4gICAgdGFza0Rlc2MsXG4gICAgdGFza0R1ZURhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tQcm9qZWN0XG4gICk7XG4gIHVwZGF0ZVRhc2tTdG9yYWdlKG5ld1Rhc2spO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmV3VGFzayB9O1xuIiwiLyogUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG4tIGNyZWF0ZXMgYSBwcm9qZWN0IG9iamVjdCBjb250YWluaW5nIG5hbWUgYW5kIHRhc2tzXG4qL1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgLy9Gb3Igc3RvcmFnZSwga2V5cyB3aWxsIGJlIHByb2plY3QgbmFtZSBhbmQgdmFsdWVzIHdpbGwgYmUgdGhlIHRhc2tzXG4gIGNvbnN0IF9fbmFtZSA9IG5hbWU7XG4gIGNvbnN0IF9fdGFza3MgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gX19uYW1lO1xuXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIF9fbmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrT2JqZWN0KSA9PiB7XG4gICAgX190YXNrcy5hcHBlbmQodGFza09iamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiBfX3Rhc2tzO1xuXG4gIGNvbnN0IGdldFRvZGF5VGFza3MgPSAoKSA9PiB7fTtcblxuICBjb25zdCBnZXRGdXR1cmVUYXNrcyA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBjaGFuZ2VOYW1lLFxuICAgIGFkZFRhc2ssXG4gICAgZ2V0VG9kYXlUYXNrcyxcbiAgICBnZXRGdXR1cmVUYXNrcyxcbiAgICBnZXRBbGxUYXNrcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3QgfTtcbiIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL3Rhc2suanNcIjtcbi8qXG5pbml0U3RvcmFnZSBpZiBmaXJzdCB0aW1lIG9uIHBhZ2VcblxuSW5pdGlhbGl6ZSBpbiBsb2NhbCBzdG9yYWdlIGEgdGFza3MgYXJyYXkgdG8gc3RvcmUgYWxsIHRhc2tzXG5Jbml0aWFsaXplIGEgcHJvamVjdCBsaXN0IGFycmF5IHRvIHN0b3JlIGFsbCBwcm9qZWN0IG5hbWVzXG5cbiovXG5jb25zdCBpbml0U3RvcmFnZSA9ICgpID0+IHtcbiAgaWYgKGdldFByb2plY3RzSlNPTigpID09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICB9XG59O1xuLy9hZGQgbmV3IHByb2plY3QgbmFtZSBpbnRvIHByb2plY3QgYXJyYXkgaW4gbG9jYWwgc3RvcmFnZVxuLy9pZiBkdXBsaWNhdGUsIGNvbnNvbGUgbG9ncyBmb3Igbm93XG5jb25zdCB1cGRhdGVQcm9qZWN0U3RvcmFnZSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgbGV0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGlmICghcHJvamVjdEFycmF5LmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuICB9XG59O1xuXG4vL2dldHRlciBmb3IgcHJvamVjdCBuYW1lIGFycmF5XG5jb25zdCBnZXRQcm9qZWN0U3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgcmV0dXJuIHByb2plY3RBcnJheTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RzSlNPTiA9ICgpID0+IHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0U3RvcmFnZSA9IChrZXkpID0+IHtcbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IGdldFByb2plY3RTdG9yYWdlKCk7XG4gIGlmIChwcm9qZWN0c0FycmF5LmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgcHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdHNBcnJheS5pbmRleE9mKGtleSksIDEpO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufTtcblxuY29uc3QgZ2V0VGFza3NKU09OID0gKCkgPT4ge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdG9yYWdlID0gKG5ld1Rhc2spID0+IHtcbiAgY29uc3QgdGFza0FycmF5ID0gSlNPTi5wYXJzZShnZXRUYXNrc0pTT04oKSk7XG4gIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tBcnJheSkpO1xuICBjb25zdCB0ZXN0QXJyYXkgPSBKU09OLnBhcnNlKGdldFRhc2tzSlNPTigpKTtcbn07XG5cbmNvbnN0IGdldFRhc2tTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCB0YXNrQXJyYXkgPSBKU09OLnBhcnNlKGdldFRhc2tzSlNPTigpKTtcbiAgdGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrID0gdGFza3MoXG4gICAgICB0YXNrLnRpdGxlLFxuICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICB0YXNrLnByb2plY3RcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGFza0FycmF5O1xufTtcblxuZXhwb3J0IHtcbiAgdXBkYXRlUHJvamVjdFN0b3JhZ2UsXG4gIGluaXRTdG9yYWdlLFxuICBnZXRQcm9qZWN0U3RvcmFnZSxcbiAgZ2V0UHJvamVjdHNKU09OLFxuICBnZXRUYXNrc0pTT04sXG4gIHJlbW92ZVByb2plY3RTdG9yYWdlLFxuICB1cGRhdGVUYXNrU3RvcmFnZSxcbiAgZ2V0VGFza1N0b3JhZ2UsXG59O1xuIiwiLyogRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGFza3Ncbi0gaG9sZHMgZGF0YSBzcGVjaWZpYyB0byB0YXNrXG5cblBhcmFtZXRlcnM6XG4tIHRpdGxlXG4tIGRlc2NyaXB0aW9uXG4tIGR1ZURhdGVcbi0gcHJpb3JpdHlcblxuKi9cbi8vZnVuY3Rpb24gd2l0aCBwcml2YXRlIHZhcmlhYmxlc1xuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICBsZXQgX190aXRsZSA9IHRpdGxlO1xuICBsZXQgX19kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX19kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IF9fcHJvamVjdCA9IHByb2plY3Q7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfX3RpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9fZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfX2R1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX19wcmlvcml0eTtcbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IF9fcHJvamVjdDtcblxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIF9fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIF9fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICBfX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgX19wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0UHJvamVjdCxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBzZXREdWVEYXRlLFxuICAgIHNldFByaW9yaXR5LFxuICAgIHRvSlNPTixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRpc3BsYXkuaW5pdERpc3BsYXkpO1xuXG4vKiBBcHAgRmVhdHVyZXNcblxuSGVhZGVyXG4tIHRoaW4gaGVhZGVyIGJhclxuLSBzYW5kd2ljaCBidXR0b24gdG8gb3BlbiBzaWRlIHBhbmVcbi0gaG9tZSBidXR0b24gdG8gbmF2aWdhdGUgdG8gVG9kYXkgdG8gZG8gbGlzdFxuLSBwbHVzIGJ1dHRvbiB0byBjcmVhdGUgYSB0byBkbyBsaXN0XG4tIHByb2ZpbGUgYnV0dG9uIHdoaWNoIG9wZW5zIGEgZHJvcCBkb3duIGxpc3RcblxuXG5TaWRlIHBhbmVcbi0gbmF2aWdhdGUgYmV0d2VlbiB0b2RheSBkYXRlIGFuZCB1cGNvbWluZ1xuLSBhIHByb2plY3RzIGRyb3AgZG93biB3aGljaCBsaXN0cyBhbGwgY3VycmVudCBwcm9qZWN0c1xuLSBhIHBsdXMgYnV0dG9uIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuXG5Ub2RheSBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgdG8gZG8gaXRlbXMgZnJvbSBhbGwgcHJvamVjdHNcblxuXG5VcGNvbWluZyBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgdG8gZG8gaXRlbXMgZm9yIGFsbCB1cGNvbWluZyBmcm9tIGFsbCBwcm9qZWN0c1xuXG5Qcm9qZWN0cyBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgYWxsIHRvIGRvIGl0ZW1zIGZvciB0aGF0IHByb2plY3Qgb25seVxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==