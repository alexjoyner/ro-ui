import styled from 'styled-components';
import { imageSizes } from '../../utils/imageSizes';
import { imageStyles } from '../../utils/imageStyles';

export const Pic = styled.img`
    ${props => imageSizes[props.imgSize] || imageSizes.default};
    ${props => imageStyles[props.imgStyle] || imageStyles.default};
`;
