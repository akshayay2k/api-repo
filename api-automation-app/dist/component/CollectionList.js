"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// components/CollectionList.js

const CollectionList = _ref => {
  let {
    collections
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Collections"), /*#__PURE__*/_react.default.createElement("ul", null, collections.map(collection => /*#__PURE__*/_react.default.createElement("li", {
    key: collection.id
  }, collection.name))));
};
var _default = exports.default = CollectionList;