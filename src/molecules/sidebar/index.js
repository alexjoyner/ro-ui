import React, { Component } from 'react';
import { IoChevronLeft, IoChevronRight } from 'react-icons/lib/io';
import { SideBarBtn } from './particles/SideBarBtn';
import { SideBarContainer } from './particles/SideBarContainer';


export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    };
  }
  toggleSidebar() {
    this.setState({
      shown: !this.state.shown,
    });
  }
  render() {
    return (
      <SideBarContainer {...this.state}>
        <SideBarBtn {...this.state} primary onClick={() => this.toggleSidebar(null)}>
          {(this.state.shown) ?
            <IoChevronLeft style={{ textAlign: 'center' }} /> :
            <IoChevronRight style={{ textAlign: 'center' }} />
          }
        </SideBarBtn>
        {this.props.children}
      </SideBarContainer>
    );
  }
}
