webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App/App.js":
/*!*******************************!*\
  !*** ./components/App/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar */ "./components/NavBar/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Content */ "./components/Content/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cover */ "./components/Cover/index.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../themes */ "./themes/index.js");
/* harmony import */ var _AppGlobalStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppGlobalStyled */ "./components/App/AppGlobalStyled.js");
/* harmony import */ var _AppStyled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppStyled */ "./components/App/AppStyled.js");
var _jsxFileName = "/home/enp.local/bsiudak/cdn/siudak/components/App/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function App(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      _ref$content$footer = _ref$content.footer,
      footerId = _ref$content$footer.id,
      footerTitle = _ref$content$footer.title,
      _ref$content$head = _ref$content.head,
      titleHeader = _ref$content$head.title,
      description = _ref$content$head.description,
      keywords = _ref$content$head.keywords;
  var tabIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("title", {
    key: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, titleHeader), __jsx("meta", {
    name: "description",
    content: description,
    key: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: keywords,
    key: "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "http://siudak.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _themes__WEBPACK_IMPORTED_MODULE_8__["main"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_AppGlobalStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_Cover__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_AppStyled__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: content,
    tabIndexRef: tabIndexRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: content,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: footerId,
    title: footerTitle,
    titleHeader: titleHeader,
    tabIndexRef: tabIndexRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);
App.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    head: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
      description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
      keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    }).isRequired,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    })).isRequired,
    footer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
      title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
    })
  }).isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.5349f7efd062fc8232a7.hot-update.js.map