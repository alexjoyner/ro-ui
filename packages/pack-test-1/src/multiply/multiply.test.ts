import { multiply } from './multiply';

describe('multiply', () => {
	test('should multiply 2 numbers', () => {
		expect(multiply(5, 5)).toEqual(25);
	});
});
