export const getSize = ({ small, large }) => {
  if (small) return '50px';
  if (large) return '150px';
  return '100px';
};
