import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PageOverlay = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};
