import { PageBuilder } from '../src/page-builder';

test('exists', () => {
	expect(PageBuilder).toBeDefined();
});

describe('Page Builder Class', () => {
	let MyTestPage;
	beforeEach(() => {
		MyTestPage = new PageBuilder();
	});
});
