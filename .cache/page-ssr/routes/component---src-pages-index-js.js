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
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _my_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-styles.css */ "./src/pages/my-styles.css");
/* harmony import */ var _my_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_scrum_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/scrum.jpg */ "./src/images/scrum.jpg");


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
    height: '200px',
    backgroundColor: '#e0e0e0',
    marginLeft: '10px'
  },
  skeleton: {
    width: '48%',
    height: '200px',
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  textContent: {
    width: '48%'
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
    height: '200px',
    background: `url(${_images_scrum_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]}) no-repeat center center`,
    backgroundSize: 'cover',
    marginLeft: '10px'
  },
  skeletonDate: {
    height: '30px',
    width: '19%',
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  skeletonName: {
    height: '30px',
    width: '42%',
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite'
  },
  skeletonParagraph: {
    height: '30px',
    width: '66%',
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
{/* <div style={styles.eventItem}>
 <span style={styles.spanStyle}>
  {date}
 </span>
 <div style={styles.contentRow}>
  <div style={styles.textContent}>
    <h2 style={styles.header2}>{titel}</h2>
    {text.raw}
    <img url={image.url} />
  </div>
 </div>
 </div> */}
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
  }, "We love web overzichtspagina"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.eventItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.spanStyle
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.contentRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.textContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "animation",
    style: styles.header2
  }, titel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.naam
  }, "Lars van Funda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: styles.paragraph
  }, "Lars gaf vandaag een talk in les van de eerstejaars over hoe ze bij Funda de sprint review aan pakken en welke scrum fundamentals zij hiervoor gebruiken.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.photo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Hun belangrijke fundamentals:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "li custom-scrollbar",
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
}
;
const query = "672804204";

/***/ }),

/***/ "./src/pages/my-styles.css":
/*!*********************************!*\
  !*** ./src/pages/my-styles.css ***!
  \*********************************/
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