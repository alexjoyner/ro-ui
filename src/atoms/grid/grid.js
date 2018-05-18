import React from 'react';
import styled from 'styled-components';

export const roGrid = styled.div`
  display: grid;
  grid-gap: 5px;
`

export const Grid = (props) => (
	<div style={{
		'display': 'grid',
		'gridGap': '5px',
		'gridTemplateColumns': `repeat(${props.columns || '3'}, 1fr)`
	}}>
		{props.children}
	</div>
);