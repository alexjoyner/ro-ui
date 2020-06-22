import styled from 'styled-components';

const COLORS = {
	default: '#171a22'
}

const getColor = props => (props.color && COLORS[props.color]) || COLORS.default;

const Button = styled.button`
	color: ${getColor};
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	border-radius: 3px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	border: 2px solid transparent;
	font-size: 1.2em;
`

export { Button };