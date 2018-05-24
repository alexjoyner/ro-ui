import React, {Component} from 'react';
import {Atoms} from "../_atoms.stories";
import {Input} from "./";
import {Panel} from "../Panel";


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
                placeholder={'Email Input'}
                />
            <Input 
                {...this.state}
                onBlur={() => this.setState({blurred: true})}
                onChange={(e) => this.handleInputChange(e)}
                type={'text'}
                placeholder={'Text Input'}
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
                    <TestInputs />
                </Panel>
            </div>
        )
    });