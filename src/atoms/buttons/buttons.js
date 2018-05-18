import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Colors} from '../../styles/variables';
const getBtnTextColor = ({primary, danger, success}) => {
    if(primary || danger || success) return 'white';
    return 'black';
}
const getBtnBgColoring = ({primary, warning, danger, success}) => {
    if(primary) return Colors.primary;
    if(warning) return Colors.warning;
    if(danger) return Colors.danger;
    if(success) return Colors.success;
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
`
const StyledButtonContent = styled.span`
    background-color: ${props => getBtnBgColoring(props)};
    color:  ${props => getBtnTextColor(props)};
    border: 1px solid ${props => getBtnBgColoring(props)};
    display: inline-block;
    outline: none;
    padding: ${props => {
        if(props.small) return '.25rem .5rem';
        if(props.large) return '.5rem 1rem';
        return '.375rem .75rem';
    }};
    text-align: center;
    font-size: ${props => {
        if(props.small) return '.875rem';
        if(props.large) return '.1.25rem';
        return '1em';
    }};
    line-height: 1.5;
    transition: 0.1s linear;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    &:hover{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }
    &:active{
        box-shadow: none;
    }
    ${props => props.ghost? `
        border-width: 1px;
        color: white;
        background-color: transparent;
    ` : ''}
`

export class Button extends Component {
    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.string,
        ghost: PropTypes.bool
    };

    render() {
        return (
            <StyledButton {...this.props} type="button">
                <StyledButtonContent {...this.props} tabIndex={-1}>
                    {this.props.children}
                </StyledButtonContent>
            </StyledButton>
        )
    }
}