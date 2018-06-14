import styled from 'styled-components';
import { Logo } from '../../../../atoms/Logo';

export const HeaderLogo = styled(Logo)`
    padding-left: 20px;
    color: ${props => props.fontColor || 'white'};
`;
