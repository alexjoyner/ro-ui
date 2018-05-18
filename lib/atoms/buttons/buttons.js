'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: none;\n    border: none;\n    outline: none;\n    font-size: inherit;\n    margin: 5px;\n'], ['\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: none;\n    border: none;\n    outline: none;\n    font-size: inherit;\n    margin: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    color:  ', ';\n    border: 1px solid ', ';\n    display: inline-block;\n    outline: none;\n    padding: ', ';\n    text-align: center;\n    font-size: ', ';\n    line-height: 1.5;\n    transition: 0.1s linear;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n    &:hover{\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\n    }\n    &:active{\n        box-shadow: none;\n    }\n    ', '\n'], ['\n    background-color: ', ';\n    color:  ', ';\n    border: 1px solid ', ';\n    display: inline-block;\n    outline: none;\n    padding: ', ';\n    text-align: center;\n    font-size: ', ';\n    line-height: 1.5;\n    transition: 0.1s linear;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n    &:hover{\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\n    }\n    &:active{\n        box-shadow: none;\n    }\n    ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBtnTextColor = function getBtnTextColor(_ref) {
    var primary = _ref.primary,
        danger = _ref.danger,
        success = _ref.success;

    if (primary || danger || success) return 'white';
    return 'black';
};
var getBtnBgColoring = function getBtnBgColoring(_ref2) {
    var primary = _ref2.primary,
        warning = _ref2.warning,
        danger = _ref2.danger,
        success = _ref2.success;

    if (primary) return _variables.Colors.primary;
    if (warning) return _variables.Colors.warning;
    if (danger) return _variables.Colors.danger;
    if (success) return _variables.Colors.success;
    return 'white';
};

var StyledButton = _styledComponents2.default.button(_templateObject);
var StyledButtonContent = _styledComponents2.default.span(_templateObject2, function (props) {
    return getBtnBgColoring(props);
}, function (props) {
    return getBtnTextColor(props);
}, function (props) {
    return getBtnBgColoring(props);
}, function (props) {
    if (props.small) return '.25rem .5rem';
    if (props.large) return '.5rem 1rem';
    return '.375rem .75rem';
}, function (props) {
    if (props.small) return '.875rem';
    if (props.large) return '.1.25rem';
    return '1em';
}, function (props) {
    return props.ghost ? '\n        border-width: 1px;\n        color: white;\n        background-color: transparent;\n    ' : '';
});

var Button = exports.Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                StyledButton,
                _extends({}, this.props, { type: 'button' }),
                _react2.default.createElement(
                    StyledButtonContent,
                    _extends({}, this.props, { tabIndex: -1 }),
                    this.props.children
                )
            );
        }
    }]);

    return Button;
}(_react.Component);