// @flow
import { css } from 'styled-components';

export const getBtnSizeSettings = ({ small, large }: {
    small?: boolean,
    large?: boolean
}) => {
  const smallSettings = css`
    font-size: .875rem;
    padding: .25rem .5rem;
  `;
  const largeSettings = css`
    font-size: 1.25rem;
    padding: .5rem 1rem;
  `;
  if (small) return smallSettings;
  if (large) return largeSettings;
  return css`
    font-size: 1rem;
    padding: .375rem .75rem;
  `;
};
