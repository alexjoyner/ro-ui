import styled from 'styled-components';
import { Button } from '../../../../atoms/Button';

export const SideBarBtn = styled(Button)`
  margin-left: 0;
  transition: 100ms linear;
  position: fixed;
  ${props => ((props.shown) ? 'left: 270px;' : 'left: 0px;')};
`;
