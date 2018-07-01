// @flow
import React from 'react';
import styled from 'styled-components';
import { IoAndroidClose } from 'react-icons/lib/io';
import { Panel } from '../../atoms/Panel';
import { CenteredContent } from '../../atoms/CenteredContent';
import { Button } from '../../main';

type NotificationProps = {
    onClose: () => {},
    children: any
}

const NotificationWrapper = styled.div`
    position: fixed;
    top: 40px;
    right: 15px;
    transition: all 0.5s ease;
    ${props => ((props.shown) ? `
        transform: translateX(500%)
    ` : `
        transform: translateX(0)
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
