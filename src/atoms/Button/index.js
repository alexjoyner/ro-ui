import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../colors';

const getBtnTextColor = ({ primary, danger, success }) => {
  if (primary || danger || success) return 'white';
  return 'black';
};
const getBtnBgColoring = ({
  primary, warning, danger, success,
}) => {
  if (primary) return colors.primary;
  if (warning) return colors.warning;
  if (danger) return colors.danger;
  if (success) return colors.success;
  return 'white';
};

const StyledButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none;
  font-size: inherit;
  margin: 5px;
`;
const StyledButtonContent = styled.span`
  background-color: ${props => getBtnBgColoring(props)};
  color: ${props => getBtnTextColor(props)};
  border: 1px solid ${props => getBtnBgColoring(props)};
  display: inline-block;
  outline: none;
  padding: ${(props) => {
    if (props.small) return '.25rem .5rem';
    if (props.large) return '.5rem 1rem';
    return '.375rem .75rem';
  }};
  text-align: center;
  font-size: ${(props) => {
    if (props.small) return '.875rem';
    if (props.large) return '.1.25rem';
    return '1em';
  }};
  line-height: 1.5;
  transition: 0.1s linear;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: none;
  }
  ${props =>
    (props.ghost
      ? `
        border-width: 1px;
        color: white;
        background-color: transparent;
    `
      : '')};
`;

const Button = props => (
  <StyledButton {...props} type="button">
    <StyledButtonContent {...props} tabIndex={-1}>
      {props.children}
    </StyledButtonContent>
  </StyledButton>
);
Button.propTypes = {
  children: PropTypes.element.isRequired,
};
export { Button };

