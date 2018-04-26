import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './buttons.sass';

const getBtnColoring = ({color}) => {
    let theme = '';
    theme += (color === 'primary') ? ' btn-primary' : '';
    theme += (color === 'warning') ? ' btn-warning' : '';
    theme += (color === 'danger') ? ' btn-danger' : '';
    theme += (color === 'success') ? ' btn-success' : '';
    return theme;
};
const getBtnSizing = ({small, large}) => {
    let size = '';
    size += (small) ? ' btn-small' : '';
    size += (large) ? ' btn-large' : '';
    return size;
};
const getClassString = (props) => {
    let classNames = 'btn-content';
    classNames += getBtnColoring(props);
    classNames += getBtnSizing(props);
    classNames += (props.ghost) ? ' btn-ghost' : '';
    return classNames;
};

export class Button extends Component {
    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.string,
        ghost: PropTypes.bool
    };

    render() {
        return (
            <button {...this.props} type="button" className={`btn ${this.props.className}`}>
            <span className={getClassString(this.props)} tabIndex={-1}>
                {this.props.children}
            </span>
            </button>
        )
    }
}