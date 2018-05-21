import React, {Component} from 'react';
import {Molecules} from '../_molecules.stories';
import {GaugeBlock} from './';
import styled from 'styled-components';
import {CenteredContent} from '../../atoms/CenteredContent';

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
            <CenteredContent>
                <GaugeBlock id={1} {...this.state} label={'Sensor 1'}></GaugeBlock>
                <GaugeBlock id={2} {...this.state} label={'Sensor 2'}></GaugeBlock>
                <GaugeBlock id={3} {...this.state} label={'Sensor 3'}></GaugeBlock>
                <GaugeBlock id={4} {...this.state} label={'Sensor 4'}></GaugeBlock>
                <GaugeBlock id={5} {...this.state} label={'Sensor 5'}></GaugeBlock>
                <GaugeBlock id={6} {...this.state} label={'Sensor 6'}></GaugeBlock>
                <GaugeBlock id={7} {...this.state} label={'Sensor 7'}></GaugeBlock>
                <GaugeBlock id={8} {...this.state} label={'Sensor 8'}></GaugeBlock>
                <GaugeBlock id={9} {...this.state} label={'Sensor 9'}></GaugeBlock>
            </CenteredContent>
        )
    }
}


Molecules
    .add('GaugeBlock', () => (
        <Test></Test>
    ))