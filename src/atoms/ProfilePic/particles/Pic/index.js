import styled from 'styled-components';
import { getSize } from '../../utils/getSize';
import { getStyle } from '../../utils/getStyle';

export const Pic = styled.img`
    height: ${props => getSize(props)};
    width: ${props => getSize(props)};
    border-radius: ${props => getStyle(props)};
`;
