import React, {Component} from 'react';
import styled from 'styled-components';
import {colors} from '../colors';
const InputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 50ms linear;
`
const InputGroup = styled.div`
    display: block;
    position: relative;
    margin-right: 20px;
    margin-top: 10px;
    input{
        padding: 15px 0;
    }
    input + label{
    color: ${props => props.error?colors.danger:null};
    ${props => (props.inputValue !== '')? `
        font-size: 12px;
        top: 2px;
        color: ${colors.primary};
    ` : ''}
    }
`
const ComponentInput = styled.input`
    background: none;
    border: none;
    border-bottom: solid 2px ${props => props.error?colors.danger:colors.primary};
    padding: 14px 40px;
    font-size: 18px;
    display: inline-block;
    width: 100%;
    &:focus, &:active{
        outline: none;
    }
    &[type="submit"]{
        border: solid 2px ${colors.primary}
    }
`


export const Input = (props) => {
    return (
    <InputGroup {...props}>
        <ComponentInput
            onBlur={() => props.onBlur()}
            onChange={(e) => props.onBlur(e)}
            {...props}/>
        <InputLabel>{props.labelText}</InputLabel>
    </InputGroup>
    )
}