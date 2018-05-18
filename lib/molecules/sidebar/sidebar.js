'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SideBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    transition: 100ms linear;\n    height: 100vh;\n    width: 250px;\n    background-color: ', ';\n    color: white;\n    position: fixed;\n    font-size: 20px;\n    padding: 10px;\n    ul{\n        list-style: none;\n    }\n    ', ';\n'], ['\n    transition: 100ms linear;\n    height: 100vh;\n    width: 250px;\n    background-color: ', ';\n    color: white;\n    position: fixed;\n    font-size: 20px;\n    padding: 10px;\n    ul{\n        list-style: none;\n    }\n    ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-left: 0;\n    transition: 100ms linear;\n    position: fixed;\n    ', ';\n\n'], ['\n    margin-left: 0;\n    transition: 100ms linear;\n    position: fixed;\n    ', ';\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttons = require('../../atoms/buttons/buttons');

var _io = require('react-icons/lib/io');

var _variables = require('../../styles/variables');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, _variables.Colors.primary, function (props) {
    return props.shown ? 'left: 0;' : 'left: -270px;';
});
var SideBarBtn = (0, _styledComponents2.default)(_buttons.Button)(_templateObject2, function (props) {
    return props.shown ? 'left: 270px;' : 'left: 0px;';
});

var SideBar = exports.SideBar = function (_Component) {
    _inherits(SideBar, _Component);

    function SideBar(props) {
        _classCallCheck(this, SideBar);

        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

        _this.state = {
            shown: true
        };
        return _this;
    }

    _createClass(SideBar, [{
        key: 'toggleSidebar',
        value: function toggleSidebar() {
            this.setState({
                shown: !this.state.shown
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Container,
                this.state,
                _react2.default.createElement(
                    SideBarBtn,
                    _extends({}, this.state, { primary: true, onClick: function onClick() {
                            return _this2.toggleSidebar(null);
                        } }),
                    this.state.shown ? _react2.default.createElement(_io.IoChevronLeft, { style: { 'textAlign': 'center' } }) : _react2.default.createElement(_io.IoChevronRight, { style: { 'textAlign': 'center' } })
                ),
                this.props.children
            );
        }
    }]);

    return SideBar;
}(_react.Component);

;