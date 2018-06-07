import styled from 'styled-components';
import { colors } from '../../../colors';


export const InputGroup = styled.div`
    display: block;
    position: relative;
    margin-right: 20px;
    margin-top: 10px;
    input{
        padding: 15px 0;
    }
    input + label{
    color: ${props => (props.error ? colors.danger : null)};
    ${props => ((props.inputValue !== '') ? `
        font-size: 12px;
        top: 2px;
        color: ${colors.primary};
    ` : '')}
    }
`;

