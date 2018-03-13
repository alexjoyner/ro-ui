import React from 'react';
import './grid.sass';

export const Grid = (props) => (
	<div className="ro-grid">
		{props.children}
	</div>
);
export const HalfRow = (props) => (
	<div style={{width: '50%', display: 'inline-block'}}>
		{props.children}
	</div>
);