// @flow
import React from 'react';
import { InputLabel } from './particles/InputLabel';
import { ComponentInput } from './particles/ComponentInput';
import { InputGroup } from './particles/InputGroup';

type InputProps = {
  labelText: string,
  blurred: boolean,
}

const Input = (props: InputProps) => (
  <InputGroup {...props}>
    <ComponentInput
      {...props}
    />
    <InputLabel>{props.labelText}</InputLabel>
  </InputGroup>
);

export { Input };
