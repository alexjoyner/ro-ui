import styled from 'styled-components';

export const BasicSideBarPageBody = styled.div`
  transition: 100ms linear;
  margin-left: ${props => ((props.sideBarShown) ? ' 300px;' : '0px')};
  min-height: 10px;
`;

export const HeaderSideBarPageBody = styled(BasicSideBarPageBody)`
  margin-top: 56px;
`;
