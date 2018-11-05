import React from 'react';
import styled from 'styled-components';

const Template = styled.a`
    text-decoration: none;
`;

export const Go = ({ to, children, ...props }) => (
  <Template href={to} {...props}>
    {children}
  </Template>
);
