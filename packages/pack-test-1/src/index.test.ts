import { ping } from './index';

test('allows pinging package', () => {
	expect(ping()).toEqual('pong');
});
