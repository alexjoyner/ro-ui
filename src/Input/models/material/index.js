import React from 'react';
import { InputLabel } from './particles/InputLabel';
import { ComponentInput } from './particles/ComponentInput';
import { InputGroup } from './particles/InputGroup';

const Input = ({ labelText, ...props }) => (
  <InputGroup>
    <ComponentInput
      {...props}
    />
    <InputLabel {...props}>{labelText}</InputLabel>
  </InputGroup>
);

export { Input };
