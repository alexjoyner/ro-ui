import styled from 'styled-components';

console.warn('PlainBox will be removed soon!');
export const PlainBox = styled.div`
    ${props => ((props.height || props.width) ? `
        height: ${props.height};
        width: ${props.width};
    ` : `
        height: 100px;
        width: 100px;
    `)}
    ${props => ((props.margin) ? `
        margin: ${props.margin};
    ` : `
        margin: 10px;
    `)}
    min-width: ${props => props.minWidth || '300px'};
    background-color: #c0c0c0;
    display: inline-block;
`;
