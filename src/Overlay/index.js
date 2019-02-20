import React from 'react';
import { Overlay as content } from './models/content';
import { Overlay as page } from './models/page';

const Strategies = {
  content,
  page,
  default: content,
};

const Overlay = ({ model = 'content', ...props }) => {
  if (model && typeof model !== 'string') {
    throw TypeError('Header Model Needs To Be Type String');
  }
  const Component = Strategies[model] || Strategies.default;
  return <Component {...props} />;
};

export { Overlay };
