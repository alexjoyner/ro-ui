import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Panel } from '../../atoms/Panel';
import { PageOverlay } from '../../atoms/PageOverlay';

const slideUp = keyframes`
  from {
    transform: translateY(500%)
  }
`;

const NotificationPanel = styled(Panel)`
    position: relative;
    animation: ${slideUp} 0.8s;
`;

const Modal = (props) => (
  <PageOverlay>
    <NotificationPanel width={props.width} height={props.height}>
      {props.children}
    </NotificationPanel>
  </PageOverlay>
);
Modal.defaultProps = {
  height: 'auto',
  width: '90%',
};

export { Modal };
