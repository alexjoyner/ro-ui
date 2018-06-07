import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel } from './particles/InputLabel';
import { ComponentInput } from './particles/ComponentInput';
import { InputGroup } from './particles/InputGroup';


const Input = props => (
  <InputGroup {...props}>
    <ComponentInput
      onBlur={() => props.onBlur()}
      onChange={e => props.onBlur(e)}
      {...props}
    />
    <InputLabel>{props.labelText}</InputLabel>
  </InputGroup>
);

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
};
Input.defaultProps = {
  onBlur: () => {},
};

export { Input };
