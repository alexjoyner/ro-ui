// @flow
import React from 'react';
import styled from 'styled-components';
import { IoAndroidClose } from 'react-icons/io';
import { Panel } from '../../atoms/Panel';
import { CenteredContent } from '../../atoms/CenteredContent';
import { Button } from '../../main';
import { zIndexes } from '../../utils/zIndexes';

type NotificationProps = {
    onClose: () => {},
    children: any
}

const NotificationWrapper = styled.div`
    position: fixed;
    z-index: ${zIndexes('Notification')};
    top: 40px;
    right: 15px;
    transition: all 0.5s ease;
    ${props => ((props.shown) ? `
        transform: translateX(0)
    ` : `
        transform: translateX(500%)
    `)}
`;


const Notification = (props: NotificationProps) => (
  <NotificationWrapper {...props}>
    <Panel width="300px">
      <CenteredContent>
        {props.children}
        <Button danger small onClick={props.onClose} >
          <IoAndroidClose />
        </Button>
      </CenteredContent>
    </Panel>
  </NotificationWrapper>
);

export { Notification };
