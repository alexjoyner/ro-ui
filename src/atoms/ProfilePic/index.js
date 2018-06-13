import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './particles/Container';
import { Pic } from './particles/Pic';


const ProfilePic = props => (
  <Container>
    <Pic src={props.imgSrc} {...props} />
  </Container>
);

ProfilePic.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
export { ProfilePic };
