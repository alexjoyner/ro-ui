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
  <InputGroup>
    <ComponentInput
      {...props}
    />
    <InputLabel {...props}>{props.labelText}</InputLabel>
  </InputGroup>
);

export { Input };
