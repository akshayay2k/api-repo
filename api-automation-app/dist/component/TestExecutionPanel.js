"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./css/TestExecutionPanel.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Import CSS file

const TestExecutionPanel = _ref => {
  let {
    testCases,
    setTestCases,
    runTests
  } = _ref;
  const [testCase, setTestCase] = (0, _react.useState)({
    method: 'GET',
    url: '',
    data: ''
  });
  const addTestCase = () => {
    // Create a new test case object with the current method, URL, and data
    const newTestCase = {
      method: testCase.method,
      url: testCase.url,
      data: testCase.data
    };

    // Update the testCases state by adding the new test case
    setTestCases(prevTestCases => [...prevTestCases, newTestCase]);

    // Reset testCase state to default values
    setTestCase({
      method: 'GET',
      url: '',
      data: ''
    });
  };
  const handleMethodChange = e => {
    // Update the method value in testCase state
    setTestCase({
      ...testCase,
      method: e.target.value
    });
  };
  const handleUrlChange = e => {
    // Update the url value in testCase state
    setTestCase({
      ...testCase,
      url: e.target.value
    });
  };
  const handleDataChange = e => {
    // Update the data value in testCase state
    setTestCase({
      ...testCase,
      data: e.target.value
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-execution-panel"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Test Execution Panel"), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Method:"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-control",
    value: testCase.method,
    onChange: handleMethodChange // Use the method change handler
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "GET"
  }, "GET"), /*#__PURE__*/_react.default.createElement("option", {
    value: "POST"
  }, "POST"), /*#__PURE__*/_react.default.createElement("option", {
    value: "PUT"
  }, "PUT"), /*#__PURE__*/_react.default.createElement("option", {
    value: "DELETE"
  }, "DELETE"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "URL:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: testCase.url,
    onChange: handleUrlChange // Use the url change handler
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Data:"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control",
    value: testCase.data,
    onChange: handleDataChange // Use the data change handler
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    onClick: addTestCase
  }, "Add Test Case"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-success",
    onClick: runTests
  }, "Run Tests"));
};
var _default = exports.default = TestExecutionPanel;