import React from 'react';
import './hero-image.sass'
import {ImageOverlay} from "../../atoms/image-overlay/image-overlay";

//The hero image is a molecule because it combines
//  the image overlay
export const HeroImage = (props) => {
    const heroImageStyle = {
        'backgroundImage': `url(${props.imageSrc})`,
        'height': props.height || '100vh'
    };
    return (
        <div className={'hero-image'} style={heroImageStyle}>
            <ImageOverlay>
                <div className="hero-image-content">
                    {props.children}
                </div>
            </ImageOverlay>
        </div>
    )
};