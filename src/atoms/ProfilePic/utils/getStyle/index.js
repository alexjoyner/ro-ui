export const getStyle = ({ rounded, circle }) => {
  if (rounded) return '10px';
  if (circle) return '50%';
  return '0';
};
