'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfilePic = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    text-align: center;\n    margin: 5px;\n'], ['\n    display: inline-block;\n    text-align: center;\n    margin: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: ', ';\n    width: ', ';\n    border-radius: ', ';\n'], ['\n    height: ', ';\n    width: ', ';\n    border-radius: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSize = function getSize(_ref) {
    var small = _ref.small,
        large = _ref.large;

    if (small) return '50px';
    if (large) return '150px';
    return '100px';
};
var getStyle = function getStyle(_ref2) {
    var rounded = _ref2.rounded,
        circle = _ref2.circle;

    if (rounded) return '10px';
    if (circle) return '50%';
    return '0';
};
var Container = _styledComponents2.default.div(_templateObject);
var Pic = _styledComponents2.default.img(_templateObject2, function (props) {
    return getSize(props);
}, function (props) {
    return getSize(props);
}, function (props) {
    return getStyle(props);
});

var ProfilePic = exports.ProfilePic = function ProfilePic(props) {
    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(Pic, _extends({ src: props.imgSrc }, props))
    );
};