import styled from 'styled-components';
import { zIndexes } from '../../../../../../utils/zIndexes';

export const PageOverlayWrapper = styled.div`
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: ${zIndexes.PageOverlay};
`;
