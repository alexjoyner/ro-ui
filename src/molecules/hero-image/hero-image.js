import React from 'react';
import styled from 'styled-components'
import {ImageOverlay} from "../../atoms/image-overlay/image-overlay";

const Wrapper = styled.div`
    background-size: cover;
    background-image: ${props => `url(${props.imageSrc})`};
    height: ${props => props.height || '100vh'};
`
const HeroImageContent = styled.div`
    color: white;
`
//The hero image is a molecule because it combines
//  the image overlay
export const HeroImage = (props) => {
    return (
        <Wrapper {...props}>
            <ImageOverlay>
                <HeroImageContent>
                    {props.children}
                </HeroImageContent>
            </ImageOverlay>
        </Wrapper>
    )
};