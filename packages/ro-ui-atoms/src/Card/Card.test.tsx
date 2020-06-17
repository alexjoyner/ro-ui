import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './';


describe('Card', () => {
	it('should display content', () => {
		const { getByText } = render(<Card>Hello World</Card>);
		expect(getByText('Hello World')).toBeInTheDocument();
	})
})