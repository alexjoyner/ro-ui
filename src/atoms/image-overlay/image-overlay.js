import React from 'react';
import './image-overlay.sass';

export const ImageOverlay = (props) => {
    return (
        <div className={'image-overlay'}>
            {props.children}
        </div>
    );
};
