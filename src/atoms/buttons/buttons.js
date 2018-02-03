import React, {Component} from 'react';
import './buttons.sass';
const getBtnColoring = ({primary, warning, danger, success}) => {
    let theme = '';
    theme += (primary)? ' btn-primary': '';
    theme += (warning)? ' btn-warning': '';
    theme += (danger)? ' btn-danger': '';
    theme += (success)? ' btn-success': '';
    return theme;
};
const getBtnSizing = ({small, large}) => {
    let size = '';
    size += (small)? ' btn-small': '';
    size += (large)? ' btn-large': '';
    return size;
};
const getClassString = (props) => {
    let classNames = 'btn-content';
    classNames += getBtnColoring(props);
    classNames += getBtnSizing(props);
    classNames += (props.ghost) ? ' btn-ghost' : '';
    return classNames;
};

export const Button = (props) => {
    return (
        <button type="button" className={'btn'}>
            <span className={getClassString(props)} tabIndex={-1}>
                {props.children}
            </span>
        </button>
    )
};