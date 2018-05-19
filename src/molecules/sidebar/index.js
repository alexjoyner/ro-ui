import React, {Component} from 'react';
import {IoChevronLeft, IoChevronRight} from 'react-icons/lib/io';
import {Button} from "../../atoms/Button";
import {colors} from '../../atoms/colors';
import styled from 'styled-components';


const Container = styled.div`
    transition: 100ms linear;
    height: 100vh;
    width: 250px;
    background-color: ${colors.primary};
    color: white;
    position: fixed;
    font-size: 20px;
    padding: 10px;
    ul{
        list-style: none;
    }
    ${props => (props.shown)? 'left: 0;' : 'left: -270px;'};
`;
const SideBarBtn = styled(Button)`
    margin-left: 0;
    transition: 100ms linear;
    position: fixed;
    ${props => (props.shown)? `left: 270px;`: `left: 0px;`};

`;
export class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            shown: true
        }
    }
    toggleSidebar() {
        this.setState({
            shown: !this.state.shown
        })
    }
    render() {
        return (
            <Container  {...this.state}>
                <SideBarBtn {...this.state} primary onClick={() => this.toggleSidebar(null)}>
                    {(this.state.shown)?
                        <IoChevronLeft style={{'textAlign': 'center'}}/>:
                        <IoChevronRight style={{'textAlign': 'center'}}/>
                    }
                </SideBarBtn>
                {this.props.children}
            </Container>
        )
    }
};