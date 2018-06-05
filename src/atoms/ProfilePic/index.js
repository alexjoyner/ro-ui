import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getSize = ({ small, large }) => {
  if (small) return '50px';
  if (large) return '150px';
  return '100px';
};
const getStyle = ({ rounded, circle }) => {
  if (rounded) return '10px';
  if (circle) return '50%';
  return '0';
};
const Container = styled.div`
    display: inline-block;
    text-align: center;
    margin: 5px;
`;
const Pic = styled.img`
    height: ${props => getSize(props)};
    width: ${props => getSize(props)};
    border-radius: ${props => getStyle(props)};
`;

const ProfilePic = props => (
  <Container>
    <Pic src={props.imgSrc} {...props} />
  </Container>
);

ProfilePic.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
export { ProfilePic };
