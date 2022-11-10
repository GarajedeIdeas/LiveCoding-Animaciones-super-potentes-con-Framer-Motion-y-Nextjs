export const getAnimationProps = (scale: number = 1, rotation: number = 0) => ({
  scale,
  rotate: rotation,
  backgroundColor: rotation > 180 ? "#ff0000" : "#00ff00"
});
