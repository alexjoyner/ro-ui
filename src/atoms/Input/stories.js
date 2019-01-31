import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Input } from '.';
import { Panel } from '../Panel';

export class TestInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      blurred: false,
    };
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <div>
        <Input
          {...this.state}
          onBlur={() => this.setState({ blurred: true })}
          onChange={e => this.handleInputChange(e)}
          type="email"
          labelText="Email Input"
        />
        <Input
          {...this.state}
          onBlur={() => this.setState({ blurred: true })}
          onChange={e => this.handleInputChange(e)}
          type="text"
          labelText="Text Input"
        />
        <Input
          {...this.state}
          onBlur={() => this.setState({ blurred: true })}
          onChange={e => this.handleInputChange(e)}
          type="text"
          labelText="Text Input"
          error
        />
      </div>
    );
  }
}


storiesOf('Atoms', module)
  .add('Input', () => (
    <div>
      <Panel>
        <h1>Note: Always pass placeholder as (labelText) to get the shifting placeholder</h1>
        <TestInputs />
      </Panel>
    </div>
  ));
