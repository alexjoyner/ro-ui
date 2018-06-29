// @flow
import React, { Component } from 'react';
import { InputLabel } from './particles/InputLabel';
import { ComponentInput } from './particles/ComponentInput';
import { InputGroup } from './particles/InputGroup';

type InputProps = {
  labelText: string,
  blurred: boolean,
}

class Input extends Component<InputProps> { // eslint-disable-line react/prefer-stateless-function
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
