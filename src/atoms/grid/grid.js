import React from 'react';
import './grid.sass';

export const Grid = (props) => (
	<div style={{
		'display': 'grid',
		'gridGap': '5px',
		'gridTemplateColumns': `repeat(${props.columns || '3'}, 1fr)`
	}}>
		{props.children}
	</div>
);