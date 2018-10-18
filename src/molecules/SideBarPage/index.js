import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SideBarBtn } from './particles/SideBarBtn';
import { SideBarContainer } from './particles/SideBarContainer';

const PageWrapper = styled.div`
  position: relative;
  transition: 100ms linear;
  z-index: 0;
  padding-left: ${props => (props.shown ? '300px' : '0px')};
`;
export class SideBarPage extends Component {
  constructor(props) {
    super(props);
    const shouldShow = (window.innerWidth > 1200);
    this.state = {
      shown: shouldShow,
    };
  }

  toggleSidebar() {
    const { shown } = this.state;
    this.setState({
      shown: !shown,
    });
  }

  render() {
    const { shown, sideBarContents, children } = this.state;
    return (
      <div>
        <SideBarContainer {...this.state}>
          <SideBarBtn size="small" {...this.state} color="primary" onClick={() => this.toggleSidebar()}>
            {(shown)
              ? <IoIosArrowBack style={{ textAlign: 'center', fontSize: '20px' }} />
              : <IoIosArrowForward style={{ textAlign: 'center', fontSize: '20px' }} />
            }
          </SideBarBtn>
          {sideBarContents}
        </SideBarContainer>
        <PageWrapper {...this.state}>
          {children}
        </PageWrapper>
      </div>
    );
  }
}
