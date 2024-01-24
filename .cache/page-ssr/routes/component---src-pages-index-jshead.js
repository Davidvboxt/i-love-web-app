"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_scrum_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/scrum.jpg */ "./src/images/scrum.jpg");

 // Adjust the path to where you saved the image

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: '"Nova square", Arial, sans-serif'
  },
  eventItem: {
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px'
  },
  eventDate: {
    color: '#0056b3',
    fontSize: '1.5em',
    marginTop: '0px',
    cursor: 'pointer'
  },
  header1: {
    fontFamily: '"Bruno Ace SC", Arial, sans-serif'
  },
  header2: {
    color: '#0056b3',
    fontSize: '1.5em',
    marginTop: '0px',
    marginBottom: '10px',
    fontFamily: '"Bruno Ace SC", Arial, sans-serif'
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  photo: {
    width: '48%',
    // Approximately half the container width
    height: '200px',
    // Adjust as needed
    backgroundColor: '#e0e0e0',
    // Gray color for the skeleton photo
    marginLeft: '10px' // Adjusted for right alignment
  },

  skeleton: {
    width: '48%',
    // Approximately half the container width
    height: '200px',
    // Adjust as needed
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  textContent: {
    width: '48%' // Approximately half the container width
  },

  spanStyle: {
    display: 'block',
    marginBottom: '10px',
    color: '#ff8c00'
  },
  naam: {
    display: 'block',
    marginBottom: '10px',
    color: '#666'
  },
  photo: {
    width: '48%',
    // Approximately half the container width
    height: '200px',
    // Adjust as needed
    background: `url({image.file.url}) no-repeat center center`,
    // Use the imported image here
    backgroundSize: 'cover',
    // This will cover the entire area of the div
    marginLeft: '10px' // Adjusted for right alignment
  },

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
function IndexPage({
  data
}) {
  console.log(data);
  const {
    titel,
    text,
    date,
    image
  } = data.contentfulPost;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: styles.header1
  }, "We love web website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.eventItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.spanStyle
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.contentRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.textContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: styles.header2
  }, titel), text.raw, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    url: image.url
  })))), events.map(event => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
}
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Events Overview");
const query = "672804204";

/***/ }),

/***/ "./src/images/scrum.jpg":
/*!******************************!*\
  !*** ./src/images/scrum.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/scrum-0519d9bc2962e5116baeb621441868cf.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map