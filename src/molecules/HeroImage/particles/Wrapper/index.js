import styled from 'styled-components';


const Wrapper = styled.div`
  background-size: cover;
  background-image: ${props => ((props.imageSrc) ? `url(${props.imageSrc})` : null)};
  height: ${props => props.height || '100vh'};
`;

export { Wrapper };
