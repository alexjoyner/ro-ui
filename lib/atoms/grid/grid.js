'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Grid = exports.roGrid = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-gap: 5px;\n'], ['\n  display: grid;\n  grid-gap: 5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var roGrid = exports.roGrid = _styledComponents2.default.div(_templateObject);

var Grid = exports.Grid = function Grid(props) {
	return _react2.default.createElement(
		'div',
		{ style: {
				'display': 'grid',
				'gridGap': '5px',
				'gridTemplateColumns': 'repeat(' + (props.columns || '3') + ', 1fr)'
			} },
		props.children
	);
};