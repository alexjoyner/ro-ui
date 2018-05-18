"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BasicLayout = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactGridLayout = require("react-grid-layout");

var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout2.default);

var BasicLayout = exports.BasicLayout = function (_React$PureComponent) {
    _inherits(BasicLayout, _React$PureComponent);

    function BasicLayout(props) {
        _classCallCheck(this, BasicLayout);

        var _this = _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call(this, props));

        var layout = _this.generateLayout();
        _this.state = { layout: layout };
        return _this;
    }

    _createClass(BasicLayout, [{
        key: "generateLayout",
        value: function generateLayout() {
            var p = this.props;
            return _lodash2.default.map(new Array(p.items), function (item, i) {
                var y = _lodash2.default.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
                return {
                    x: i * 2 % 12,
                    y: Math.floor(i / 6) * y,
                    w: 2,
                    h: y,
                    i: i.toString()
                };
            });
        }
    }, {
        key: "onLayoutChange",
        value: function onLayoutChange(layout) {
            this.props.onLayoutChange(layout);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                ReactGridLayout,
                _extends({
                    layout: this.state.layout,
                    onLayoutChange: this.onLayoutChange
                }, this.props),
                this.props.children
            );
        }
    }]);

    return BasicLayout;
}(_react2.default.PureComponent);

BasicLayout.defaultProps = {
    className: "layout",
    items: 10,
    rowHeight: 30,
    onLayoutChange: function onLayoutChange() {},
    cols: 12
};