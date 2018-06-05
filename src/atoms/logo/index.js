import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContents = styled.span`
  font-size: ${props => props.fontSize};
`;

const Logo = props => (
  <LogoContents {...props}>{props.logoText}</LogoContents>
);
Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export { Logo };
