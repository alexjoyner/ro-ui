import styled from 'styled-components';
import { Button } from '../../../../atoms/Button';

export const SideBarBtn = styled(Button)`
  margin-left: 0;
  transition: 100ms linear;
  position: fixed;
  margin-top: 2px;
  ${props => ((props.shown) ? 'left: 260px;' : 'left: 7px;')}; 
`;
