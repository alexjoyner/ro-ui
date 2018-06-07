import styled from 'styled-components';

export const ImageOverlayWrapper = styled.div`
    background: rgba(0,0,0,0.6);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        &:hover{
            box-shadow: none;
            transform: scale(1.05);
        }
        &:active{
            transform: scale(0.99);
        }
    }
`;
