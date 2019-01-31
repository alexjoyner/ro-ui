import styled from 'styled-components';
import { colors } from '../../../../../../_depreciated/colors';

export const ComponentInput = styled.input`
    background: none;
    border: none;
    border-bottom: solid 2px ${props => (props.error ? colors.danger : colors.primary)};
    padding: 14px 40px;
    font-size: 18px;
    display: inline-block;
    width: 100%;
    &:focus, &:active{
        outline: none;
    }
    &[type="submit"]{
        border: solid 2px ${colors.primary}
    }
`;
