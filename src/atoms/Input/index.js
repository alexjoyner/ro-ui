import React, { Component } from 'react';
import { InputLabel } from './particles/InputLabel';
import { ComponentInput } from './particles/ComponentInput';
import { InputGroup } from './particles/InputGroup';

class Input extends Component {
  render() {
    return (
      <InputGroup>
        <ComponentInput
          {...this.props}
        />
        <InputLabel {...this.props}>{this.props.labelText}</InputLabel>
      </InputGroup>
    );
  }
}

export { Input };
