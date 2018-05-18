'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Panel = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    margin: 10px;\n    padding: 10px;\n    background-color: #fafafa;\n    border: 1px solid #EEEEEE;\n    radius: 5px;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);\n'], ['\n    margin: 10px;\n    padding: 10px;\n    background-color: #fafafa;\n    border: 1px solid #EEEEEE;\n    radius: 5px;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PanelContainer = _styledComponents2.default.div(_templateObject);
var Panel = exports.Panel = function Panel(props) {
    return _react2.default.createElement(
        PanelContainer,
        null,
        props.children
    );
};