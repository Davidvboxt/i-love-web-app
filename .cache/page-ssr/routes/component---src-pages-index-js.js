exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsource_bruno_ace_sc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/bruno-ace-sc */ "./node_modules/@fontsource/bruno-ace-sc/index.css");
/* harmony import */ var _fontsource_bruno_ace_sc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_bruno_ace_sc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_scrum_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/scrum.jpg */ "./src/images/scrum.jpg");


 // Adjust the path to where you saved the image

const styles = {
  container: {
    // Use a lighter shade for the background to give a fresh look
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Use shadows for a subtle 3D effect
    // Other styles remain the same
    // ...
  },

  eventItem: {
    // Add a transition for hover effects
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    // Other styles remain the same
    // ...
  },

  header1: {
    // Increase the font size slightly for more impact
    fontSize: '2.4em'
    // Other styles remain the same
    // ...
  },

  header2: {
    // Adjust the color to a deeper blue for better contrast
    color: '#34495e'
    // Other styles remain the same
    // ...
  },

  textContent: {
    // Add padding to the text content for better readability
    padding: '0 15px'
    // Other styles remain the same
    // ...
  },

  paragraph: {
    // Adjust line height for better readability
    lineHeight: '1.8'
    // Other styles remain the same
    // ...
  },

  list: {
    // Add more space around list items
    marginTop: '25px'
    // Other styles remain the same
    // ...
  },

  listItem: {
    // Smooth background transition on hover
    transition: 'background-color 0.3s',
    // Hover effect for list items
    ':hover': {
      backgroundColor: '#e9ecef'
    }
    // Other styles remain the same
    // ...
  },

  // Your skeleton classes remain unchanged
  // ...

  // Remove duplicate key 'photo' and merge the styles
  photo: {
    width: '100%',
    // Full width for a better visual impact
    height: 'auto',
    // Keep aspect ratio
    background: `url(${_images_scrum_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]}) no-repeat center center`,
    backgroundSize: 'cover',
    borderRadius: '8px',
    // Rounded corners for the photo
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    // Subtle shadow for depth
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    // Smooth transition for hover effects
    ':hover': {
      transform: 'scale(1.03)',
      // Slightly scale up the image on hover
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' // Increase shadow on hover
    },

    marginLeft: '0' // Adjust margin if necessary
  },

  // ... Rest of your code ...

  skeletonDate: {
    height: '30px',
    width: '19%',
    // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  skeletonName: {
    height: '30px',
    width: '42%',
    // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  skeletonParagraph: {
    height: '30px',
    width: '66%',
    // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    margin: '5px 0',
    padding: '10px',
    borderLeft: '5px solid #0056b3'
  }
};

// Generate 10 events with skeleton content
const events = Array.from({
  length: 8
}, (_, index) => ({
  id: index,
  title: `Event ${index + 1}`
}));
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: styles.header1
  }, "We love web overzichtspagina"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.eventItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.spanStyle
  }, "Woensdag 29 november"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.contentRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.textContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: styles.header2
  }, "Scrum crash course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.naam
  }, "Lars van Funda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: styles.paragraph
  }, "Lars gaf vandaag een talk in les van de eerstejaars over hoe ze bij Funda de sprint review aan pakken en welke scrum fundamentals zij hiervoor gebruiken.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.photo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Hun belangrijke fundamentals:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: styles.list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Sprint reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Sprint retrospective"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Backlog refilement "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Daily scrum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Sprint planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Backlog refinement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Waar bestaat hun scrum team allemaal uit?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: styles.list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Developers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Scrum master"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: styles.listItem
  }, "Product owner   "))), events.map(event => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: event.id,
    style: styles.eventItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.spanStyle
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.contentRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.textContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: styles.header2
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: styles.skeletonName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: styles.skeletonParagraph
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.skeleton
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Events Overview");

/***/ }),

/***/ "./node_modules/@fontsource/bruno-ace-sc/index.css":
/*!*********************************************************!*\
  !*** ./node_modules/@fontsource/bruno-ace-sc/index.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/scrum.jpg":
/*!******************************!*\
  !*** ./src/images/scrum.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/scrum-0519d9bc2962e5116baeb621441868cf.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map