import styled from 'styled-components';
import { colors } from '../../../../../colors';

export const InputLabel = styled.label`
    position: absolute;
    left: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 50ms linear;
    color: ${props => (props.error ? colors.danger : colors.primary)};
    ${props => ((props.inputValue !== '') ? `
      font-size: 12px;
      top: 2px;
    ` : `
      top: 50%;
    `)}
`;
