// @flow
import * as React from 'react';
import styled from 'styled-components';
import { IoChevronLeft, IoChevronRight } from 'react-icons/io';
import { SideBarBtn } from './particles/SideBarBtn';
import { SideBarContainer } from './particles/SideBarContainer';

const PageWrapper = styled.div`
  position: relative;
  transition: 100ms linear;
  z-index: 0;
  padding-left: ${props => (props.shown ? '300px' : '0px')};
`;
type Props = {
  sideBarContents: React.ComponentType<>,
  children: any
}
type State = {
    shown: boolean
}
export class SideBarPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    const shouldShow: boolean = (window.innerWidth > 1200);
    this.state = {
      shown: shouldShow,
    };
  }
  toggleSidebar() {
    this.setState({
      shown: !this.state.shown,
    });
  }
  render() {
    return (
      <div>
        <SideBarContainer {...this.state}>
          <SideBarBtn small {...this.state} primary onClick={() => this.toggleSidebar()}>
            {(this.state.shown) ?
              <IoChevronLeft style={{ textAlign: 'center' }} /> :
              <IoChevronRight style={{ textAlign: 'center' }} />
            }
          </SideBarBtn>
          {this.props.sideBarContents}
        </SideBarContainer>
        <PageWrapper {...this.state}>
          {this.props.children}
        </PageWrapper>
      </div>
    );
  }
}
