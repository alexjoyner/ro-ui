import React from 'react';
import './profile-pic.sass'

const getPicSizing = ({small, large}) => {
    let size = '';
    size += (small) ? ' pic-small' : '';
    size += (large) ? ' pic-large' : '';
    return size;
};
const getPicStyle = ({rounded, circle}) => {
    let style = '';
    style += (rounded) ? ' pic-rounded' : '';
    style += (circle) ? ' pic-circle' : '';
    return style;
};
const getClassString = (props) => {
    let classNames = 'pic-profile';
    classNames += getPicSizing(props);
    classNames += getPicStyle(props);
    return classNames;
};

export const ProfilePic = (props) => {
    return (
        <div className={'pic-container'}>
            <img className={getClassString(props)} src={props.imgSrc}/>
        </div>
    );
};