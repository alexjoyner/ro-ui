'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('`error-boundary`', function () {
    var component = void 0;
    beforeEach(function () {
        component = (0, _enzyme.mount)(_react2.default.createElement(
            _index.ErrorBoundary,
            null,
            _react2.default.createElement(
                'h4',
                null,
                'Hello'
            )
        ));
    });
    it('renders without exploding', function () {
        expect(component).toMatchSnapshot();
    });
    it('renders an h4 if there is no error', function () {
        expect(component.find('h4').exists()).toBe(true);
    });
    describe('When there is an error', function () {
        it('should render an h1 if there is an error', function () {
            component.setState({ hasError: true });
            expect(component.find('h1').exists()).toBe(true);
        });
    });
});