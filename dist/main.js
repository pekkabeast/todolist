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
    mainContentDom.showProjectContent(1);

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
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectStorage)(submitBtn);
        displayNewProject();
        deleteProjectBtn();
        showProjectContentBtn();
        submitBtn.reset();
        e.preventDefault();
        parentDiv.removeChild(formWrapper);
      });
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
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill = "white"><title>delete</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
      tile.appendChild(deleteProjectBtn);
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
    };
  })();

  const mainContentDom = (() => {
    const showProjectContent = (projectBtnPressed) => {
      const parentDiv = document.querySelector(".mainContent");
      parentDiv.appendChild(
        mainContentTemplate("Project 1" /*projectBtnPressed.target.id*/)
      );

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

      const taskSubmitBtn = document.createElement("input");
      taskSubmitBtn.classList.add("tasksubmit-btn");
      taskSubmitBtn.type = "submit";
      taskSubmitBtn.value = "Create Task";

      taskCategoryWrapper.append(
        taskDueDateInput,
        taskPriorityInput,
        dropDownProjects(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YrQjtBQUNGO0FBQ087QUFRZDtBQUNvQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQStDOztBQUUvQyw4Q0FBOEMsb0VBQW1COztBQUVqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheVN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5U3R5bGVzLmNzcz8yNjBjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvbWFpbkFwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYW1lRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIHBhZGRpbmc6IDFyZW0gMCAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5uYW1lRm9ybSBsYWJlbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9kaXNwbGF5U3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm0td3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGJvcmRlcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hbWVGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgcGFkZGluZzogMXJlbSAwIDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLm5hbWVGb3JtIGxhYmVsIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXlTdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXNwbGF5U3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBcIi4vZGlzcGxheVN0eWxlcy5jc3NcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICB1cGRhdGVQcm9qZWN0U3RvcmFnZSxcbiAgaW5pdFN0b3JhZ2UsXG4gIGdldFByb2plY3RTdG9yYWdlLFxuICBnZXRQcm9qZWN0c0pTT04sXG4gIGdldFRhc2tzSlNPTixcbiAgcmVtb3ZlUHJvamVjdFN0b3JhZ2UsXG59IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9tYWluQXBwXCI7XG5cbi8qXG5ET00gTG9naWNcbiovXG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0RGlzcGxheSA9ICgpID0+IHtcbiAgICAvL3Nob3cgc2lkZXBhbmVcbiAgICB0b2dnbGVTaWRlTmF2KCk7XG4gICAgaW5pdEhlYWRlckJ0bnMoKTtcbiAgICBpbml0U3RvcmFnZSgpO1xuICAgIG1haW5Db250ZW50RG9tLnNob3dQcm9qZWN0Q29udGVudCgxKTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgYnV0dG9uc1xuICB9O1xuXG4gIGNvbnN0IGluaXRIZWFkZXJCdG5zID0gKCkgPT4ge1xuICAgIC8vU2FuZHdpY2ggbWVudSBidXR0b25cbiAgICBjb25zdCBzYW5kd2ljaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuZHdpY2hOYXZCdG5cIik7XG4gICAgc2FuZHdpY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVNpZGVOYXYpO1xuICB9O1xuXG4gIC8vdG9nZ2xlcyBTaWRlTmF2UGFuZVxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkFwcFwiKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlUGFuZVwiKSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaWRlUGFuZS5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVcIik7XG4gICAgICBzaWRlUGFuZS5pZCA9IFwic2lkZVBhbmVcIjtcblxuICAgICAgc2lkZVBhbmUuYXBwZW5kKFxuICAgICAgICBnZW5lcmF0ZVRvZG9OYXZDb250ZW50KCksXG4gICAgICAgIHByb2plY3ROYXZEb20uZ2VuZXJhdGVQcm9qZWN0TmF2Q29udGVudCgpXG4gICAgICApO1xuICAgICAgcGFyZW50RGl2Lmluc2VydEJlZm9yZShzaWRlUGFuZSwgcGFyZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgcHJvamVjdE5hdkRvbS5pbml0UHJvamVjdEJ0bnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHBhcmVudERpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVUb2RvTmF2Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTmF2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hdlwiKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRvZG9IZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJuYXYtaGVhZGluZ1wiKTtcbiAgICB0b2RvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG8tZG8gTGlzdFwiO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RheVRvZG8uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgdG9kYXlUb2RvLmlkID0gXCJ0b2RheVwiO1xuICAgIHRvZGF5VG9kby50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIGNvbnN0IHVwY29taW5nVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdXBjb21pbmdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuICAgIHVwY29taW5nVG9kby5pZCA9IFwidXBjb21pbmdcIjtcbiAgICB1cGNvbWluZ1RvZG8udGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG5cbiAgICB0b2RvTmF2LmFwcGVuZCh0b2RvSGVhZGluZywgdG9kYXlUb2RvLCB1cGNvbWluZ1RvZG8pO1xuXG4gICAgcmV0dXJuIHRvZG9OYXY7XG4gIH07XG5cbiAgLy9BZGQgUHJvamVjdCBET00gbG9naWMgZm9yIHNob3dpbmcgZm9ybSB0byBhZGQgcHJvamVjdFxuICBjb25zdCBwcm9qZWN0TmF2RG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3ROYXZDb250ZW50ID0gKCkgPT4ge1xuICAgICAgLy9OYXYgZm9yIHByb2plY3RzXG4gICAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy13cmFwcGVyXCIpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0c05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0c05hdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaGVhZGluZy13cmFwcGVyXCIpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5hdi1oZWFkaW5nXCIpO1xuICAgICAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgICBjb25zdCBwcm9qZWN0c0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0c0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5zXCIpO1xuXG4gICAgICBjb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGRQcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdHNcIik7XG4gICAgICBhZGRQcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgICAgYWRkUHJvamVjdHNCdG4uaWQgPSBcImFkZFByb2plY3RzXCI7XG4gICAgICBhZGRQcm9qZWN0c0J0bi5pbm5lckhUTUwgPVxuICAgICAgICBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPjx0aXRsZT5BZGQgTmV3IFByb2plY3Q8L3RpdGxlPjxwYXRoIGQ9J00xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaJyAvPjwvc3ZnPlwiO1xuXG4gICAgICBjb25zdCBkcm9wZG93blByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcInNob3dQcm9qZWN0c1wiKTtcbiAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uaWQgPSBcInNob3dQcm9qZWN0c1wiO1xuXG4gICAgICBwcm9qZWN0c0J0bkNvbnRhaW5lci5hcHBlbmQoYWRkUHJvamVjdHNCdG4sIGRyb3Bkb3duUHJvamVjdHNCdG4pO1xuICAgICAgcHJvamVjdHNOYXYuYXBwZW5kKHByb2plY3RzSGVhZGluZywgcHJvamVjdHNCdG5Db250YWluZXIpO1xuICAgICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzTmF2KTtcblxuICAgICAgcmV0dXJuIHByb2plY3RzV3JhcHBlcjtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdFByb2plY3RCdG5zID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdHNcIik7XG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0TmF2RG9tLmFkZFByb2plY3RGb3JtKTtcbiAgICAgIHRvZ2dsZVNob3dQcm9qZWN0c0J0bigpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkFwcFwiKTtcbiAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXJcIik7XG4gICAgICAvL0Zvcm0gV3JhcHBlclxuICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICAgIC8vRm9ybSBIZWFkZXJcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgICAgIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZChcImZvcm0taGVhZGVyXCIpO1xuICAgICAgLy9DcmVhdGUgRm9ybSB0byBhY2NlcHQgbmFtZSBmb3IgbmV3IHByb2plY3RcbiAgICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBuYW1lRm9ybS5jbGFzc0xpc3QuYWRkKFwibmFtZUZvcm1cIik7XG4gICAgICBuYW1lRm9ybS5pZCA9IFwicHJvamVjdE5hbWVGb3JtXCI7XG4gICAgICAvL05hbWUgaW5wdXQgZmllbGRcbiAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIG5hbWVJbnB1dC5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICAgIC8vY2FuY2VsIGJ1dHRvblxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICBjYW5jZWxCdG4uaWQgPSBcImNhbmNlbEFkZFByb2plY3RcIjtcbiAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcbiAgICAgIC8vc3VibWl0IGJ1dHRvblxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdEFkZFByb2plY3RcIjtcbiAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgbmFtZUZvcm0uYXBwZW5kKG5hbWVMYWJlbCwgbmFtZUlucHV0LCBjYW5jZWxCdG4sIHN1Ym1pdEJ0bik7XG4gICAgICBmb3JtRGl2LmFwcGVuZChmb3JtSGVhZGVyLCBuYW1lRm9ybSk7XG4gICAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuICAgICAgYWRkRm9ybUJ0bkV2ZW50cygpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRGb3JtQnRuRXZlbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxBZGRQcm9qZWN0XCIpO1xuICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkFwcFwiKTtcbiAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy9jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVGb3JtXCIpO1xuICAgICAgICAvL3Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQoZm9ybVdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lRm9ybVwiKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIHVwZGF0ZVByb2plY3RTdG9yYWdlKHN1Ym1pdEJ0bik7XG4gICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4oKTtcbiAgICAgICAgc2hvd1Byb2plY3RDb250ZW50QnRuKCk7XG4gICAgICAgIHN1Ym1pdEJ0bi5yZXNldCgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmVudERpdi5yZW1vdmVDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCIpO1xuICAgICAgICBpZiAoYnRuV3JhcHBlciAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gZ2V0UHJvamVjdFN0b3JhZ2UoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RBcnJheVtpXSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaWxlRWxlbWVudChwcm9qZWN0QXJyYXlbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RUaWxlRWxlbWVudCA9ICh0aWxlVGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aWxlLnRleHRDb250ZW50ID0gdGlsZVRleHQ7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpbGVcIik7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuXG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10aWxlLWJ0blwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsID0gXCJ3aGl0ZVwiPjx0aXRsZT5kZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz48L3N2Zz4nO1xuICAgICAgdGlsZS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIHRpbGUuaWQgPSB0aWxlVGV4dDtcbiAgICAgIHJldHVybiB0aWxlO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93UHJvamVjdENvbnRlbnRCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aWxlXCIpO1xuICAgICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93UHJvamVjdFwiKSAhPSBcInRydWVcIikge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIG1haW5Db250ZW50RG9tLnNob3dQcm9qZWN0Q29udGVudChlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zaG93UHJvamVjdFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL05lZWQgdG8gYWRkIGxvZ2ljIHRvIGFsd2F5cyBrZWVwIGF0IGxlYXN0IDEgcHJvamVjdFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10aWxlLWJ0blwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaWxlc0FycmF5ID0gWy4uLnByb2plY3RUaWxlc107XG4gICAgICBwcm9qZWN0VGlsZXNBcnJheS5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmICh0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlTGlzdGVuZXJcIikgIT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdFN0b3JhZ2UodGlsZS5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgIHRpbGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlLnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGVMaXN0ZW5lclwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVNob3dQcm9qZWN0c0J0biA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dQcm9qZWN0c1wiKTtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYnRuLXdyYXBwZXJcIikgPT0gbnVsbCkge1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+SGlkZSBQcm9qZWN0czwvdGl0bGU+PHBhdGggZD1cIk0xNS40MSwxNi41OEwxMC44MywxMkwxNS40MSw3LjQxTDE0LDZMOCwxMkwxNCwxOEwxNS40MSwxNi41OFpcIiAvPjwvc3ZnPic7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0cyk7XG4gICAgICAgIGRyb3Bkb3duUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wZG93blByb2plY3RzQnRuLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+U2hvdyBQcm9qZWN0czwvdGl0bGU+PHBhdGggZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIi8+PC9zdmc+JztcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RzKTtcbiAgICAgICAgZHJvcGRvd25Qcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gZ2V0UHJvamVjdFN0b3JhZ2UoKTtcbiAgICAgIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBidXR0b25XcmFwcGVyLmlkID0gXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCI7XG4gICAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24td3JhcHBlclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0QXJyYXlbaV0pID09IG51bGwpIHtcbiAgICAgICAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaWxlRWxlbWVudChwcm9qZWN0QXJyYXlbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG4gICAgICB0b2dnbGVTaG93UHJvamVjdHNCdG4oKTtcbiAgICAgIHNob3dQcm9qZWN0Q29udGVudEJ0bigpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bigpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtd3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYnRuLXdyYXBwZXJcIik7XG5cbiAgICAgIHByb2plY3RXcmFwcGVyLnJlbW92ZUNoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgICAgdG9nZ2xlU2hvd1Byb2plY3RzQnRuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRQcm9qZWN0Rm9ybSxcbiAgICAgIHRvZ2dsZVNob3dQcm9qZWN0c0J0bixcbiAgICAgIGdlbmVyYXRlUHJvamVjdE5hdkNvbnRlbnQsXG4gICAgICBpbml0UHJvamVjdEJ0bnMsXG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCBtYWluQ29udGVudERvbSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1Byb2plY3RDb250ZW50ID0gKHByb2plY3RCdG5QcmVzc2VkKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50XCIpO1xuICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKFxuICAgICAgICBtYWluQ29udGVudFRlbXBsYXRlKFwiUHJvamVjdCAxXCIgLypwcm9qZWN0QnRuUHJlc3NlZC50YXJnZXQuaWQqLylcbiAgICAgICk7XG5cbiAgICAgIHRhc2tzRG9tLmFkZFRhc2tCdG5GdW5jKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50VGVtcGxhdGUgPSAodGl0bGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXdyYXBwZXJcIik7XG4gICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVcIik7XG4gICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgLy9jcmVhdGUgbmV3IHRhc2sgYnV0dG9uXG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY29udGVudFRpdGxlLCB0YXNrc0RvbS5hZGRUYXNrQnRuKCkpO1xuXG4gICAgICAvL1Nob3cgVGFza3NcblxuICAgICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93VG9kYXlDb250ZW50ID0gKCkgPT4ge307XG4gICAgY29uc3Qgc2hvd1VwY29taW5nQ29udGVudCA9ICgpID0+IHt9O1xuXG4gICAgcmV0dXJuIHsgc2hvd1Byb2plY3RDb250ZW50IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza3NEb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tidXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICAgIHRhc2tidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZHRhc2stYnRuXCIpO1xuICAgICAgcmV0dXJuIHRhc2tidXR0b247XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG5GdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGFza2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFzay1idG5cIik7XG4gICAgICB0YXNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tidXR0b24ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGFza0Zvcm1FeHBhbmRlZCgpLCB0YXNrYnV0dG9uKTtcbiAgICAgICAgYWRkVGFza0Zvcm1TdWJtaXRFdmVudCgpO1xuICAgICAgICB0YXNrYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza2J1dHRvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0Zvcm1FeHBhbmRlZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRm9ybS13cmFwcGVyXCIpO1xuICAgICAgY29uc3QgdGFza0dlbmVyYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgdGFza0dlbmVyYXRlRm9ybS5jbGFzc0xpc3QuYWRkKFwidGFza0Zvcm0tZXhwYW5kZWRcIik7XG4gICAgICB0YXNrR2VuZXJhdGVGb3JtLmlkID0gXCJuZXdUYXNrRm9ybVwiO1xuICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGFza05hbWVJbnB1dC5pZCA9IFwidGFza05hbWVcIjtcbiAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuICAgICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIHRhc2tEZXNjSW5wdXQuaWQgPSBcInRhc2tEZXNjXCI7XG4gICAgICB0YXNrRGVzY0lucHV0Lm1heExlbmd0aCA9IDM1MDtcbiAgICAgIHRhc2tEZXNjSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uICgzNTAgY2hhcnMgbWF4KVwiO1xuICAgICAgLy9DYXRlZ29yaWVzXG4gICAgICBjb25zdCB0YXNrQ2F0ZWdvcnlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tDYXRlZ29yeVdyYXBwZXIuaWQgPSBcInRhc2tDYXRlZ29yeS13cmFwcGVyXCI7XG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0R1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gXCJ0YXNrRHVlRGF0ZVwiO1xuICAgICAgdGFza0R1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIERhdGVcIjtcblxuICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSBcInRhc2tQcmlvcml0eVwiO1xuXG4gICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBsb3dQcmlvcml0eS52YWx1ZSA9IFwibG93XCI7XG4gICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgICAgIGNvbnN0IG1lZFByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgbWVkUHJpb3J0eS52YWx1ZSA9IFwibWVkXCI7XG4gICAgICBtZWRQcmlvcnR5LnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICAgICAgY29uc3QgaGlnaFByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgaGlnaFByaW9ydHkudmFsdWUgPSBcImhpZ2hcIjtcbiAgICAgIGhpZ2hQcmlvcnR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZChoaWdoUHJpb3J0eSwgbWVkUHJpb3J0eSwgbG93UHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza1N1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza3N1Ym1pdC1idG5cIik7XG4gICAgICB0YXNrU3VibWl0QnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgdGFza1N1Ym1pdEJ0bi52YWx1ZSA9IFwiQ3JlYXRlIFRhc2tcIjtcblxuICAgICAgdGFza0NhdGVnb3J5V3JhcHBlci5hcHBlbmQoXG4gICAgICAgIHRhc2tEdWVEYXRlSW5wdXQsXG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LFxuICAgICAgICBkcm9wRG93blByb2plY3RzKCksXG4gICAgICAgIHRhc2tTdWJtaXRCdG5cbiAgICAgICk7XG4gICAgICB0YXNrR2VuZXJhdGVGb3JtLmFwcGVuZChcbiAgICAgICAgdGFza05hbWVJbnB1dCxcbiAgICAgICAgdGFza0Rlc2NJbnB1dCxcbiAgICAgICAgdGFza0NhdGVnb3J5V3JhcHBlclxuICAgICAgKTtcbiAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tHZW5lcmF0ZUZvcm0pO1xuXG4gICAgICByZXR1cm4gZm9ybVdyYXBwZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybS13cmFwcGVyXCIpO1xuICAgICAgdGFza0Zvcm0ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoYWRkVGFza0J0bigpLCB0YXNrRm9ybSk7XG4gICAgICBhZGRUYXNrQnRuRnVuYygpO1xuICAgICAgdGFza0Zvcm0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0YXNrRm9ybSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2tGb3JtU3VibWl0RXZlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIik7XG4gICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NcIik7XG4gICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKTtcbiAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJvamVjdFwiKTtcbiAgICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgY3JlYXRlTmV3VGFzayhcbiAgICAgICAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgICB0YXNrRGVzYy52YWx1ZSxcbiAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgdGFza1Byb2plY3QudmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRyb3BEb3duUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBnZXRQcm9qZWN0U3RvcmFnZSgpO1xuICAgICAgY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHByb2plY3REcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kcm9wZG93blwiKTtcbiAgICAgIHByb2plY3REcm9wRG93bi5pZCA9IFwidGFza1Byb2plY3RcIjtcbiAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9qZWN0RHJvcERvd247XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tGb3JtSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIC8vd2hlbiB1c2VyIGZpbGxzIG91dCBhc2sgZm9ybSwgaXQgc2hvdWxkIHRha2UgYXdheSB0aGUgYWRkIHRhc2sgZm9ybVxuICAgICAgLy9pdCBzaG91bGQgY3JlYXRlIGEgbmV3IHRhc2sgYW5kIHVwZGF0ZSB0aGUgc3RvcmFnZVxuICAgICAgLy9pdCBzaG91bGQgZGlzcGxheSB0aGUgbmV3IHRhc2sgY3JlYXRlZCBpbiBhYmJyZXZpYXRlZCBmb3JtXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRUYXNrQnRuLFxuICAgICAgdGFza0Zvcm1FeHBhbmRlZCxcbiAgICAgIGFkZFRhc2tCdG5GdW5jLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0RGlzcGxheSxcbiAgfTtcbn0pKCk7XG5cbi8vaW5pdCBEaXNwbGF5IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIERPTSBjb250ZW50IGlzIGxvYWRlZFxuXG5leHBvcnQgeyBkaXNwbGF5IH07XG4iLCIvKlxuQXBwbGljYXRpb24gTG9naWNcblxuKi9cbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAoXG4gIHRhc2tOYW1lLFxuICB0YXNrRGVzYyxcbiAgdGFza0R1ZURhdGUsXG4gIHRhc2tQcmlvcml0eSxcbiAgdGFza1Byb2plY3RcbikgPT4ge1xuICAvL2NyZWF0ZSBuZXcgdGFzaywgdXBkYXRlIHN0b3JhZ2VcbiAgY29uc3QgbmV3VGFzayA9IHRhc2tzKFxuICAgIHRhc2tOYW1lLFxuICAgIHRhc2tEZXNjLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrUHJvamVjdFxuICApO1xuICB1cGRhdGVUYXNrU3RvcmFnZShuZXdUYXNrKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfTtcbiIsIi8qIFByb2plY3QgRmFjdG9yeSBGdW5jdGlvblxuLSBjcmVhdGVzIGEgcHJvamVjdCBvYmplY3QgY29udGFpbmluZyBuYW1lIGFuZCB0YXNrc1xuKi9cblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIC8vRm9yIHN0b3JhZ2UsIGtleXMgd2lsbCBiZSBwcm9qZWN0IG5hbWUgYW5kIHZhbHVlcyB3aWxsIGJlIHRoZSB0YXNrc1xuICBjb25zdCBfX25hbWUgPSBuYW1lO1xuICBjb25zdCBfX3Rhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IF9fbmFtZTtcblxuICBjb25zdCBjaGFuZ2VOYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBfX25hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgIF9fdGFza3MuYXBwZW5kKHRhc2tPYmplY3QpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4gX190YXNrcztcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge307XG5cbiAgY29uc3QgZ2V0RnV0dXJlVGFza3MgPSAoKSA9PiB7fTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgY2hhbmdlTmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRvZGF5VGFza3MsXG4gICAgZ2V0RnV0dXJlVGFza3MsXG4gICAgZ2V0QWxsVGFza3MsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG4vKlxuaW5pdFN0b3JhZ2UgaWYgZmlyc3QgdGltZSBvbiBwYWdlXG5cbkluaXRpYWxpemUgaW4gbG9jYWwgc3RvcmFnZSBhIHRhc2tzIGFycmF5IHRvIHN0b3JlIGFsbCB0YXNrc1xuSW5pdGlhbGl6ZSBhIHByb2plY3QgbGlzdCBhcnJheSB0byBzdG9yZSBhbGwgcHJvamVjdCBuYW1lc1xuXG4qL1xuY29uc3QgaW5pdFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGlmIChnZXRQcm9qZWN0c0pTT04oKSA9PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfVxufTtcbi8vYWRkIG5ldyBwcm9qZWN0IG5hbWUgaW50byBwcm9qZWN0IGFycmF5IGluIGxvY2FsIHN0b3JhZ2Vcbi8vaWYgZHVwbGljYXRlLCBjb25zb2xlIGxvZ3MgZm9yIG5vd1xuY29uc3QgdXBkYXRlUHJvamVjdFN0b3JhZ2UgPSAobmFtZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWUuZWxlbWVudHNbXCJwcm9qZWN0TmFtZVwiXS52YWx1ZTtcbiAgbGV0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGlmICghcHJvamVjdEFycmF5LmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiRHVwbGljYXRlXCIpO1xuICB9XG59O1xuXG4vL2dldHRlciBmb3IgcHJvamVjdCBuYW1lIGFycmF5XG5jb25zdCBnZXRQcm9qZWN0U3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgcmV0dXJuIHByb2plY3RBcnJheTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RzSlNPTiA9ICgpID0+IHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0U3RvcmFnZSA9IChrZXkpID0+IHtcbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IGdldFByb2plY3RTdG9yYWdlKCk7XG4gIGlmIChwcm9qZWN0c0FycmF5LmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgcHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdHNBcnJheS5pbmRleE9mKGtleSksIDEpO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufTtcblxuY29uc3QgZ2V0VGFza3NKU09OID0gKCkgPT4ge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdG9yYWdlID0gKG5ld1Rhc2spID0+IHtcbiAgY29uc3QgdGFza0FycmF5ID0gSlNPTi5wYXJzZShnZXRUYXNrc0pTT04oKSk7XG4gIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tBcnJheSkpO1xuICBjb25zdCB0ZXN0QXJyYXkgPSBKU09OLnBhcnNlKGdldFRhc2tzSlNPTigpKTtcbn07XG5cbmNvbnN0IGdldFRhc2tTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCB0YXNrQXJyYXkgPSBKU09OLnBhcnNlKGdldFRhc2tzSlNPTigpKTtcbiAgdGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrID0gdGFza3MoXG4gICAgICB0YXNrLnRpdGxlLFxuICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICB0YXNrLnByb2plY3RcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGFza0FycmF5O1xufTtcblxuZXhwb3J0IHtcbiAgdXBkYXRlUHJvamVjdFN0b3JhZ2UsXG4gIGluaXRTdG9yYWdlLFxuICBnZXRQcm9qZWN0U3RvcmFnZSxcbiAgZ2V0UHJvamVjdHNKU09OLFxuICBnZXRUYXNrc0pTT04sXG4gIHJlbW92ZVByb2plY3RTdG9yYWdlLFxuICB1cGRhdGVUYXNrU3RvcmFnZSxcbiAgZ2V0VGFza1N0b3JhZ2UsXG59O1xuIiwiLyogRmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGFza3Ncbi0gaG9sZHMgZGF0YSBzcGVjaWZpYyB0byB0YXNrXG5cblBhcmFtZXRlcnM6XG4tIHRpdGxlXG4tIGRlc2NyaXB0aW9uXG4tIGR1ZURhdGVcbi0gcHJpb3JpdHlcblxuKi9cbi8vZnVuY3Rpb24gd2l0aCBwcml2YXRlIHZhcmlhYmxlc1xuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICBsZXQgX190aXRsZSA9IHRpdGxlO1xuICBsZXQgX19kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX19kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IF9fcHJvamVjdCA9IHByb2plY3Q7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfX3RpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9fZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfX2R1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX19wcmlvcml0eTtcbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IF9fcHJvamVjdDtcblxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIF9fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIF9fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICBfX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgX19wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0UHJvamVjdCxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBzZXREdWVEYXRlLFxuICAgIHNldFByaW9yaXR5LFxuICAgIHRvSlNPTixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRpc3BsYXkuaW5pdERpc3BsYXkpO1xuXG4vKiBBcHAgRmVhdHVyZXNcblxuSGVhZGVyXG4tIHRoaW4gaGVhZGVyIGJhclxuLSBzYW5kd2ljaCBidXR0b24gdG8gb3BlbiBzaWRlIHBhbmVcbi0gaG9tZSBidXR0b24gdG8gbmF2aWdhdGUgdG8gVG9kYXkgdG8gZG8gbGlzdFxuLSBwbHVzIGJ1dHRvbiB0byBjcmVhdGUgYSB0byBkbyBsaXN0XG4tIHByb2ZpbGUgYnV0dG9uIHdoaWNoIG9wZW5zIGEgZHJvcCBkb3duIGxpc3RcblxuXG5TaWRlIHBhbmVcbi0gbmF2aWdhdGUgYmV0d2VlbiB0b2RheSBkYXRlIGFuZCB1cGNvbWluZ1xuLSBhIHByb2plY3RzIGRyb3AgZG93biB3aGljaCBsaXN0cyBhbGwgY3VycmVudCBwcm9qZWN0c1xuLSBhIHBsdXMgYnV0dG9uIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuXG5Ub2RheSBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgdG8gZG8gaXRlbXMgZnJvbSBhbGwgcHJvamVjdHNcblxuXG5VcGNvbWluZyBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgdG8gZG8gaXRlbXMgZm9yIGFsbCB1cGNvbWluZyBmcm9tIGFsbCBwcm9qZWN0c1xuXG5Qcm9qZWN0cyBtYWluIHBhbmVcbi0gc2hvdWxkIHNob3cgYWxsIHRvIGRvIGl0ZW1zIGZvciB0aGF0IHByb2plY3Qgb25seVxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==