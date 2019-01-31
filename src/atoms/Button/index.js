import React from 'react';
import { Button as classic } from './models/classic';
import { Button as baseUI } from './models/baseUI';

const Strategies = {
  classic,
  baseUI,
  default: classic,
};

const Button = ({ model = 'classic', ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Button Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies.default;
  return <Component {...props} />;
};

export { Button };
