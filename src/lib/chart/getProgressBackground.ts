import { getTransparencyColor } from "../utils/color/getTransparencyColor";

export const getProgressBackground = (
  degree: number,
  color: string,
  transparency: boolean
) => {
  const transparencyColor = getTransparencyColor(color, transparency);

  return `${color} 0deg ${degree}deg, ${transparencyColor} ${degree}deg 360deg`;
};
