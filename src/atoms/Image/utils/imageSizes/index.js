import { css } from 'styled-components';

export const getSize = ({ small, large }) => {
  if (small) return '50px';
  if (large) return '150px';
  return '100px';
};
export const imageSizes = {
  small: css`
    height: 50px;
    width: 50px;
  `,
  large: css`
    height: 150px;
    width: 150px;
  `,
  fillWidth: css`
    height: auto;
    width: 100%;
  `,
  fillHeight: css`
    height: 100vh;
    width: auto;
  `,
  default: css`
    height: 100px;
    width: 100px;
  `,
};
