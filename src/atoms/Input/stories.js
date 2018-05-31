import React, {Component} from 'react';
import {Atoms} from "../_atoms.stories";
import {Input} from "./";
import {Panel} from "../Panel";
import {Button} from '../Button';

export class TestInputs extends Component{
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
            <div>
            <Input 
                {...this.state}
                onBlur={() => this.setState({blurred: true})}
                onChange={(e) => this.handleInputChange(e)}
                type={'email'}
                labelText={'Email Input'}
                />
            <Input 
                {...this.state}
                onBlur={() => this.setState({blurred: true})}
                onChange={(e) => this.handleInputChange(e)}
                type={'text'}
                labelText={'Text Input'}
                />
            <Input 
                {...this.state}
                onBlur={() => this.setState({blurred: true})}
                onChange={(e) => this.handleInputChange(e)}
                type={'text'}
                labelText={'Text Input'}
                error
                />
            </div>
        )
    }
}



Atoms
    .add('Input', () => {
        return (
            <div>
                <Panel>
                    <h1>Note: Always pass placeholder as 'labelText' to get the shifting placeholder</h1>
                    <TestInputs />
                </Panel>
            </div>
        )
    });