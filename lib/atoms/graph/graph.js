'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Graph = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('c3/c3.css');

var _index = require('../../utils/error-boundary/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//let connect;
var c3 = void 0;
if (typeof window !== 'undefined') {
    //connect = require("../socket-connection/connection").connect;
    require('d3');
    c3 = require('c3');
}

var Graph = exports.Graph = function (_React$Component) {
    _inherits(Graph, _React$Component);

    function Graph(props) {
        _classCallCheck(this, Graph);

        var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

        _this.chart = {};
        return _this;
    }

    _createClass(Graph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // connect.getLogsSubscription((err, log) => {
            //     console.log('log returned to feature/graph');
            //     this.chart.load({
            //         columns: [['Data', log.value]],
            //     });
            // });
            this.initChart();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return false;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.initChart();
        }
    }, {
        key: 'initChart',
        value: function initChart() {
            this.chart = c3.generate(_extends({
                bindto: '#' + this.props.chartID,
                data: {
                    type: 'gauge',
                    columns: [['Data', 0]]
                }
            }, this.props.chartOpts));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _index.ErrorBoundary,
                null,
                _react2.default.createElement('div', { id: this.props.chartID })
            );
        }
    }]);

    return Graph;
}(_react2.default.Component);