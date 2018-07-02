// @flow
import { css } from 'styled-components';

export const getBtnSizeSettings = ({ xsmall, small, large }: {
    xsmall?: boolean,
    small?: boolean,
    large?: boolean
}) => {
  const xsmallSettings = css`
    font-size: .475rem;
    padding: .15rem .2rem;
  `;
  const smallSettings = css`
    font-size: .875rem;
    padding: .25rem .5rem;
  `;
  const largeSettings = css`
    font-size: 1.25rem;
    padding: .5rem 1rem;
  `;
  if (xsmall) return xsmallSettings;
  if (small) return smallSettings;
  if (large) return largeSettings;
  return css`
    font-size: 1rem;
    padding: .375rem .75rem;
  `;
};
