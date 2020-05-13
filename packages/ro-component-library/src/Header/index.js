import React from 'react';
import { Header as classic } from './models/classic';
import { Header as baseUI } from './models/baseUI';

const Strategies = {
  classic,
  baseUI,
  default: classic,
};

const Header = ({ model = 'classic', ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Header Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies.default;
  return <Component {...props} />;
};

export { Header };
