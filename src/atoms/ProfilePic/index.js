import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './particles/Container';
import { Pic } from './particles/Pic';


const ProfilePic = ({ imgSrc, ...props }) => (
  <Container>
    <Pic src={imgSrc} {...props} />
  </Container>
);

ProfilePic.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
export { ProfilePic };
