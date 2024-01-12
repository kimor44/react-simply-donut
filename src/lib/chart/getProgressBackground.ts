import { getOpacityColor } from "../utils/color/getOpacityColor";

export const getProgressBackground = (
  degree: number,
  color: string,
  remainingPortionOpacity: number
) => {
  const opacityColor = getOpacityColor(color, remainingPortionOpacity);

  return `${color} 0deg ${degree}deg, ${opacityColor} ${degree}deg 360deg`;
};
