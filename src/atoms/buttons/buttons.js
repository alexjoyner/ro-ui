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
const getBtnSizing = ({small, medium, large, bar}) => {
    let size = '';
    size += (small)? ' btn-small': '';
    size += (medium)? ' btn-medium': '';
    size += (large)? ' btn-large': '';
    size += (bar)? ' btn-bar': '';
    return size;
};

const getClassString = (props) => {
    let classNames = 'btn';
    classNames += getBtnColoring(props);
    classNames += getBtnSizing(props);
    classNames += (props.ghost) ? ' btn-ghost' : '';
    return classNames;
};

export const Button = (props) => {
    return <button className={getClassString(props)}>{props.children}</button>
};