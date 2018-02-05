import React, {Component} from 'react';
import {Button} from "../../atoms/buttons/buttons";
import {IoChevronLeft, IoChevronRight} from 'react-icons/lib/io';
import './sidebar.sass'

export class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            shown: true
        }
    }
    toggleSidebar() {
        console.log(this.state.shown)
        this.setState({
            shown: !this.state.shown
        })
    }
    render() {
        return (
            <div className={`sidebar-container ${(this.state.shown)? 'sidebar-shown': 'sidebar-hidden'}`}>
                <Button primary className={'sidebar-btn'} onClick={() => this.toggleSidebar(null)}>
                    {(this.state.shown)?
                        <IoChevronLeft style={{'text-align': 'center'}}/>:
                        <IoChevronRight style={{'text-align': 'center'}}/>
                    }
                </Button>
                {this.props.children}
            </div>
        )
    }
};