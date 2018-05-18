'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 50%;\n    left: 0px;\n    transform: translateY(-50%);\n    pointer-events: none;\n    transition: 50ms linear;\n'], ['\n    position: absolute;\n    top: 50%;\n    left: 0px;\n    transform: translateY(-50%);\n    pointer-events: none;\n    transition: 50ms linear;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-block;\n    position: relative;\n    margin-right: 20px;\n    input{\n        padding: 15px 0;\n    }\n    input + label{\n    ', '\n    }\n'], ['\n    display: inline-block;\n    position: relative;\n    margin-right: 20px;\n    input{\n        padding: 15px 0;\n    }\n    input + label{\n    ', '\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background: none;\n    border: none;\n    border-bottom: solid 2px ', ';\n    padding: 14px 40px;\n    font-size: 18px;\n    display: inline-block;\n    &:focus, &:active{\n        outline: none;\n    }\n    &[type="submit"]{\n        border: solid 2px ', '\n    }\n'], ['\n    background: none;\n    border: none;\n    border-bottom: solid 2px ', ';\n    padding: 14px 40px;\n    font-size: 18px;\n    display: inline-block;\n    &:focus, &:active{\n        outline: none;\n    }\n    &[type="submit"]{\n        border: solid 2px ', '\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputLabel = _styledComponents2.default.label(_templateObject);
var InputGroup = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.inputValue !== '' ? '\n        font-size: 12px;\n        top: 2px;\n        color: ' + _variables.Colors.primary + ';\n    ' : '';
});
var ComponentInput = _styledComponents2.default.input(_templateObject3, _variables.Colors.primary, _variables.Colors.primary);

var Input = exports.Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            inputValue: '',
            blurred: false
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            var value = e.target.value;
            this.setState({
                inputValue: value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                InputGroup,
                this.state,
                _react2.default.createElement(ComponentInput, _extends({}, this.state, {
                    onBlur: function onBlur() {
                        return _this2.setState({ blurred: true });
                    },
                    onChange: function onChange(e) {
                        return _this2.handleInputChange(e);
                    },
                    type: this.props.type })),
                _react2.default.createElement(
                    InputLabel,
                    null,
                    this.props.placeholder
                )
            );
        }
    }]);

    return Input;
}(_react.Component);