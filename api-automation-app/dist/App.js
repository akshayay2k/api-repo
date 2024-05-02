"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CollectionsContainer = _interopRequireDefault(require("./component/containers/CollectionsContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// App.js

const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "API Automation Tool"), /*#__PURE__*/_react.default.createElement(_CollectionsContainer.default, null));
};
var _default = exports.default = App;