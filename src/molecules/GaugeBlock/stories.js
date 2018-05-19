import React, {Component} from 'react';
import {Molecules} from '../_molecules.stories';
import {GaugeBlock} from './';
import styled from 'styled-components';
const CenteredArray = styled.div`
    text-align: center;
`

class Test extends Component{
    state = {
        'value': 1
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.value === 100) return;
            this.setState({
                'value': this.state.value + 1
            })
        }, 1000)
    }
    render(){
        return (
            <CenteredArray>
                <GaugeBlock id={1} {...this.state} label={'Sensor 1'}></GaugeBlock>
                <GaugeBlock id={2} {...this.state} label={'Sensor 2'}></GaugeBlock>
                <GaugeBlock id={3} {...this.state} label={'Sensor 3'}></GaugeBlock>
            </CenteredArray>
        )
    }
}


Molecules
    .add('GaugeBlock', () => (
        <Test></Test>
    ))