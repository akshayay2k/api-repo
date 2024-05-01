"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./css/styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import CSS file for styling

const TestResultPanel = _ref => {
  let {
    testResults
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-result-panel"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Test Result Panel"), /*#__PURE__*/_react.default.createElement("ul", null, testResults.map((result, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: "test-case"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Test Case ", index + 1), /*#__PURE__*/_react.default.createElement("div", {
    className: "test-details"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Method:"), " ", result.testCase.method), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "URL:"), " ", result.testCase.url)), /*#__PURE__*/_react.default.createElement("div", {
    className: "response"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Response:")), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(result.response, null, 2)))))));
};
var _default = exports.default = TestResultPanel;