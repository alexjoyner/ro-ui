import React from 'react';
import PropTypes from 'prop-types';
import { LogoContents } from './particles/LogoContents';


const Logo = props => (
  <LogoContents {...props}>{props.logoText}</LogoContents>
);
Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export { Logo };
