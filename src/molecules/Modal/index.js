import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Panel} from '../../atoms/Panel';
import {PageOverlay} from '../../atoms/PageOverlay';

const slideUp = keyframes`
  from {
    top: 1000px;
  }

  to {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const NotificationPanel = styled(Panel)`
    position: absolute;
    animation: ${slideUp} 0.8s;
`

export const Modal = (props) => {
    return (
        <PageOverlay>
            <NotificationPanel width={'500px'}>
                {props.children}
            </NotificationPanel>
        </PageOverlay>
    )
}