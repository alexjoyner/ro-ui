'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var gaugeSettings = exports.gaugeSettings = {
	gauge: {
		label: {
			format: function format(value) {
				return value + '\xB0F';
			}
		}
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
			values: [30, 70, 78, 100]
		}
	}
};