import React from 'react';
import PropTypes from 'prop-types';
import { LogoContents } from './particles/LogoContents';

console.warn('Logo will be removed soon!');
const Logo = ({ logoText, ...props }) => (
  <LogoContents {...props}>{logoText}</LogoContents>
);
Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export { Logo };
