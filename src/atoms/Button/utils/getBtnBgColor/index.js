import { colors } from '../../../colors';

// @flow
export const getBtnBgColor = ({
  primary, warning, danger, success,
}: {
    primary?: boolean;
    warning?: boolean;
    danger?: boolean;
    success?: boolean;
  }) => {
  if (primary) return colors.primary;
  if (warning) return colors.warning;
  if (danger) return colors.danger;
  if (success) return colors.success;
  return 'white';
};
