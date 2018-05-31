import React, {Component} from 'react';
import {Atoms} from "../_atoms.stories";
import {Panel} from "../../atoms/Panel";
import {Gauge} from "./";
import {Grid} from "../../atoms/Grid";


class TestGauge extends Component{
    state = {
        value: 20,
        units: '°F',
        max: 100,
        min: 0,
        ranges: [{
            lowerValue: 0,
            upperValue: 63,
            color: "#3498db"
        },{
            lowerValue: 63,
            upperValue: 80,
            color: "#2ecc71"
        },{
            lowerValue: 80,
            upperValue: 100,
            color: "#e74c3c"
        }]
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.value < 100){
                this.setState({
                    value: this.state.value ++,
                    ...this.state
                })
            }
        }, 1000)
    }
    render(){
        return (
            <Gauge {...this.state} height="400px" width="400px"/>
        );
    }
}


Atoms
    .add('Gauge', () => {
        return (
            <div>
            <Panel>
                <TestGauge />
            </Panel>
            </div>
        )
    });