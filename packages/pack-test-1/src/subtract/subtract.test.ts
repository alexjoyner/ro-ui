import { subtract } from './subtract';

describe('subtract', () => {
	it('should subtract two numbers', () => {
		expect(subtract(5, 2)).toEqual(3);
	});
});
