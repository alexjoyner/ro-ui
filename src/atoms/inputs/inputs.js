import React, {Component} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styles/variables';
const colorPrimary = Colors.colorPrimary;
const InputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 50ms linear;
`
const InputGroup = styled.div`
    display: inline-block;
    position: relative;
    margin-right: 20px;
    input{
        padding: 15px 0;
    }
    input + label{
    ${props => (props.inputValue !== '')? `
        font-size: 12px;
        top: 2px;
        color: ${colorPrimary};
    ` : ''}
    }
`
const ComponentInput = styled.input`
    background: none;
    border: none;
    border-bottom: solid 2px ${colorPrimary};
    padding: 14px 40px;
    font-size: 18px;
    display: inline-block;
    &:focus, &:active{
        outline: none;
    }
    &[type="submit"]{
        border: solid 2px colorPrimary
    }
`


export class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            blurred: false
        }
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    render(){
        return (
            <InputGroup {...this.state}>
                <ComponentInput {...this.state}
                    onBlur={() => this.setState({blurred: true})}
                    onChange={(e) => this.handleInputChange(e)}
                    type={this.props.type}/>
                <InputLabel>{this.props.placeholder}</InputLabel>
            </InputGroup>
        )
    }
}