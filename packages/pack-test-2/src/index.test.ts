import { ping, sum, subtract } from 'pack-test-1';

test('testing works', () => {
	expect(2 + 5).toEqual(7);
});

test('imports test correctly', () => {
	expect(ping()).toEqual('pong');
	expect(sum(1, 1)).toEqual(2);
	expect(subtract(1, 1)).toEqual(2);
});
