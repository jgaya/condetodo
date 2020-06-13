webpackHotUpdate("cms",{

/***/ "./src/cms/cms.js":
/*!************************!*\
  !*** ./src/cms/cms.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! netlify-cms */ "./node_modules/netlify-cms/dist/netlify-cms.js");
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(netlify_cms__WEBPACK_IMPORTED_MODULE_0__);
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


netlify_cms__WEBPACK_IMPORTED_MODULE_0___default.a.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'id',
    label: 'Youtube Video ID',
    widget: 'string'
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function fromBlock(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function toBlock(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function toPreview(obj) {
    return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>';
  }
});

/***/ })

})
//# sourceMappingURL=cms.a34aec183cd80ed9ada7.hot-update.js.map