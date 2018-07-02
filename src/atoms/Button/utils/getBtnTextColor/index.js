// @flow

export const getBtnTextColor = ({
  primary, danger, success, dark,
}: {
    primary?: boolean,
    danger?: boolean,
    success?: boolean,
    dark?: boolean,
  }) => {
  if (primary || danger || success || dark) return 'white';
  return 'black';
};
