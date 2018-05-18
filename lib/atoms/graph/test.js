'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Features/Graph', function () {
    var component = void 0;
    beforeEach(function () {
        component = (0, _enzyme.shallow)(_react2.default.createElement(_.Graph, { chartID: 'test-chart', chartOpts: {} }));
    });
    it('renders without exploding', function () {
        expect(component).toMatchSnapshot();
    });
    describe('analog gauge graph', function () {
        it('should render if called with analog gauge as prop type');
    });
    describe('line graph', function () {
        it('should render if called with line graph as prop type');
    });
});