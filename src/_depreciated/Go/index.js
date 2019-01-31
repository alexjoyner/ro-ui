import React from 'react';
import styled from 'styled-components';

const Template = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const Go = ({ to, children, ...props }) => (
  <Template href={to} {...props}>
    {children}
  </Template>
);
