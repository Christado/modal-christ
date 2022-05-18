"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _xmark = _interopRequireDefault(require("./xmark.svg"));

require("./modal.css");

var Modal = function Modal(props) {
  var closeModal = props.closeModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    name: "times",
    onClick: closeModal,
    "aria-label": "close icon",
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _xmark.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("p", null, props.str)));
};

var _default = Modal;
exports.default = _default;