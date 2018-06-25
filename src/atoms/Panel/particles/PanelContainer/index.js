import styled from 'styled-components';
import { colors } from '../../../colors';

export const PanelContainer = styled.div`
    ${props => (props.width ? `
        display: inline-block;
        width: ${props.width};
    ` : `
        display: block;
    `)}
    height: ${props => (props.height || '100%')}
    min-width: ${props => props.minWidth || '280px'};
    margin: 10px;
    padding: 10px;
    background-color: ${colors.greyLight};
    border: 1px solid #EEEEEE;
    radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
`;
