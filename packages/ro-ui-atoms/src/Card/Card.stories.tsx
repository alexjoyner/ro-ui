import React from 'react';
import { Card } from './';
import { Button } from '../Button';

export default { title: 'ro-ui-atoms/Card' }

export const Basic = () => (
	<Card>Hello World</Card>
)
export const WithSubComponents = () => (
	<Card>
		{({ Header, Footer, Body }) => (
			<>
				<Header>Header</Header>
				<Body>Body Contents</Body>
				<Footer>Footer Contents</Footer>
			</>
		)}
	</Card>
)

export const WithAlignedItems = () => (
	<Card>
		{({ Header, Footer, Body }) => (
			<>
				<Header>
					<Button style={{ marginRight: 'auto' }}>Left</Button>
					<Button>Center</Button>
					<Button style={{ marginLeft: 'auto' }}>Right</Button>
				</Header>
				<Body>Body Contents</Body>
				<Footer>
					<Button style={{ marginRight: 'auto' }}>Left</Button>
					<Button>Center</Button>
					<Button style={{ marginLeft: 'auto' }}>Right</Button>
				</Footer>
			</>
		)}
	</Card>
)