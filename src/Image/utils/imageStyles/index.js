import { css } from 'styled-components';

export const getStyle = ({ rounded, circle }) => {
  if (rounded) return '10px';
  if (circle) return '50%';
  return '0';
};

export const imageStyles = {
  rounded: css`
    border-radius: 10px;
  `,
  circle: css`
    border-radius: 50%;
  `,
  default: css`
    border-radius: 0;
  `,
};
