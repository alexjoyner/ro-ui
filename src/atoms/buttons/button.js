import React, {Component} from 'react';
import './style.sass';
export class Button extends Component {
    render() {
        return (
            <button className={'button'}>{this.props.children}</button>
        );
    }
}

export default Button;
