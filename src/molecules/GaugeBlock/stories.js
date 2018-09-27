import React, { Component } from 'react';
import { Molecules } from '../_molecules.stories';
import { GaugeBlock } from './';

export class TestGaugeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      units: '°F',
      max: 100,
      min: 0,
      ranges: [{
        lowerValue: 0,
        upperValue: 20,
        color: '#95a5a6',
      }, {
        lowerValue: 20,
        upperValue: 30,
        color: '#9b59b6',
      }, {
        lowerValue: 30,
        upperValue: 50,
        color: '#f1c40f',
      }, {
        lowerValue: 50,
        upperValue: 80,
        color: '#2ecc71',
      }, {
        lowerValue: 80,
        upperValue: 100,
        color: '#e74c3c',
      }],
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.value === 100) return;
      this.setState({
        value: this.state.value + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <GaugeBlock
          id={1}
          {...this.state}
          label="Sensor 1"
          onSettingsClick={() => console.log('onSettingsClick')}
          onChartClick={() => console.log('onChartClick')}
        />
        <GaugeBlock
          id={2}
          {...this.state}
          multiSelected
          label="Sensor 1"
          onSettingsClick={() => console.log('onSettingsClick')}
          onChartClick={() => console.log('onChartClick')}
        />
      </div>
    );
  }
}


Molecules
  .add('GaugeBlock', () => (
    <TestGaugeBlock />
  ));
