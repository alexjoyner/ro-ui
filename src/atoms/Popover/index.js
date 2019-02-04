import React from 'react';
import { Popover as basic } from './models/basic';

const defaultModel = 'basic';
const Strategies = {
  basic,
  default: basic,
};

const Popover = ({ model = defaultModel, ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Popover Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies[defaultModel];
  return <Component {...props} />;
};


export { Popover };
