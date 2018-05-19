import React, {Component} from 'react';
import styled from 'styled-components';

const LogoContents = styled.span`
	font-size: ${props => props.fontSize};
`

export const Logo = (props) => {
	return (
		<LogoContents {...props}>{props.logoText}</LogoContents>
	)
};