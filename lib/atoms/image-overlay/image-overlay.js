'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageOverlay = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background: rgba(0,0,0,0.6);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    button {\n        &:hover{\n            box-shadow: none;\n            transform: scale(1.05);\n        }\n        &:active{\n            transform: scale(0.99);\n        }\n    }\n'], ['\n    background: rgba(0,0,0,0.6);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    button {\n        &:hover{\n            box-shadow: none;\n            transform: scale(1.05);\n        }\n        &:active{\n            transform: scale(0.99);\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);
var ImageOverlay = exports.ImageOverlay = function ImageOverlay(props) {
    return _react2.default.createElement(
        Wrapper,
        null,
        props.children
    );
};