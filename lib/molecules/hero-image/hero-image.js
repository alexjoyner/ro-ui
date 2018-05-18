'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroImage = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background-size: cover;\n    background-image: ', ';\n    height: ', ';\n'], ['\n    background-size: cover;\n    background-image: ', ';\n    height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: white;\n'], ['\n    color: white;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _imageOverlay = require('../../atoms/image-overlay/image-overlay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return 'url(' + props.imageSrc + ')';
}, function (props) {
    return props.height || '100vh';
});
var HeroImageContent = _styledComponents2.default.div(_templateObject2);
//The hero image is a molecule because it combines
//  the image overlay
var HeroImage = exports.HeroImage = function HeroImage(props) {
    return _react2.default.createElement(
        Wrapper,
        props,
        _react2.default.createElement(
            _imageOverlay.ImageOverlay,
            null,
            _react2.default.createElement(
                HeroImageContent,
                null,
                props.children
            )
        )
    );
};