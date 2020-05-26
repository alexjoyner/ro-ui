import { sum } from 'pack-test-1';

test('testing works', () => {
	expect(2 + 5).toEqual(7);
});

test('imports test correctly', () => {
	expect(sum(1, 1)).toEqual(2);
});
