import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Panel} from '../../atoms/Panel';
import {PageOverlay} from '../../atoms/PageOverlay';

const slideUp = keyframes`
  from {
    transform: translateY(500%);
  }
`;

const NotificationPanel = styled(Panel)`
    position: relative;
    animation: ${slideUp} 0.8s;
`

export const Modal = (props) => {
    return (
        <PageOverlay>
            <NotificationPanel width={'40%'}>
                {props.children}
            </NotificationPanel>
        </PageOverlay>
    )
}