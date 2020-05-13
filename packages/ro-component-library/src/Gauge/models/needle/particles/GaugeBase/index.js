import React from 'react';

export const GaugeBase = ({ children, ...rest }) => (
  <svg
    height="100%"
    viewBox="0 0 250 180"
    {...rest}
  >
    {children}
  </svg>
);
