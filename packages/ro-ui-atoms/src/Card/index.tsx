import React from 'react';
import styled from 'styled-components';

const CardBorderRadius = '5px'

const Container = styled.div`
display: grid;
& > * {
	padding: 10px;
};
height: 300px;
width: 300px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
border-radius: ${CardBorderRadius};
`;
const Header = styled.div`
grid-row-start: 1;
grid-row-end: 2;
display: flex;
flex-direction: row;
align-items: center;
border-radius: ${CardBorderRadius} ${CardBorderRadius} 0px 0px;
`
const Body = styled.div`
grid-row-start: 2;
grid-row-end: 9;
`
const Footer = styled.div`
grid-row-start: 9;
grid-row-end: 10;
display: flex;
align-items: center;
border-radius: 0px 0px ${CardBorderRadius} ${CardBorderRadius};
`
const Card = ({ children, ...props }) => {
	const renderChildren = () => {
		if (typeof children === 'function') {
			return children({
				Header,
				Body,
				Footer
			})
		}
		return children;
	}
	return (
		<Container {...props}>
			{renderChildren()}
		</Container>
	)
}

export { Card };