import React from 'react';
import { TestGraph } from './TestGraph';
import { Panel } from 'ro-component-library';

export default { title: 'TestGraph' };

export const basic = () => (
	<div>
		<Panel>Test Graph</Panel>
		<TestGraph />
	</div>
);
