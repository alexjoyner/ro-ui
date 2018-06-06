export const polarToCartesian = (circleOpts, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
  return {
    x: circleOpts.center.x + (circleOpts.radius * Math.cos(angleInRadians)),
    y: circleOpts.center.y + (circleOpts.radius * Math.sin(angleInRadians)),
  };
};
