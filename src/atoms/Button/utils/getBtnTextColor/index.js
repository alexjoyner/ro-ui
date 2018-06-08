// @flow

export const getBtnTextColor = ({ primary, danger, success }: {
    primary?: boolean,
    danger?: boolean,
    success?: boolean
  }) => {
  if (primary || danger || success) return 'white';
  return 'black';
};
