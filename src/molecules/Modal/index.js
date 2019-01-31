import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Panel } from '../../atoms/Panel';
import { Overlay } from '../../atoms/Overlay';

const slideUp = keyframes`
  from {
    transform: translateY(500%)
  }
`;

const NotificationPanel = styled(Panel)`
    position: relative;
    animation: ${slideUp} 0.8s;
`;
const Modal = ({ width, height, children }) => (
  <Overlay model="page">
    <NotificationPanel width={width} height={height}>
      {children}
    </NotificationPanel>
  </Overlay>
);
const { string } = PropTypes;
Modal.propTypes = {
  height: string,
  width: string,
};
Modal.defaultProps = {
  height: 'auto',
  width: '90%',
};

export { Modal };
