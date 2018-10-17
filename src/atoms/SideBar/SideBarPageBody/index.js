import styled from 'styled-components';

const BasicSideBarPageBody = styled.div`
  margin-left: ${props => ((props.sideBarShown) ? ' 300px;' : '0px')};
  min-height: 10px;
`;

export const HeaderSideBarPageBody = styled(BasicSideBarPageBody)`
  margin-top: 56px;
`;

export default BasicSideBarPageBody;
