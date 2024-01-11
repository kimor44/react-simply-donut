import { getTransparencyColor } from "../lib/utils/color/getTransparencyColor.ts";
import { MAX_PERCENTAGE, MAX_DEGREES } from "./constants";

export const useConvertors = () => {
  const convertToPercent = (value: number, total: number): number =>
    Math.round((value / total) * MAX_PERCENTAGE);

  const convertToDegrees = (value: number): number =>
    Math.round((value / MAX_PERCENTAGE) * MAX_DEGREES);

  const convertDegreeToString = (
    degree: number,
    color: string,
    transparency: boolean
  ) => {
    const transparencyColor = getTransparencyColor(color, transparency);

    return `${color} 0deg ${degree}deg, ${transparencyColor} ${degree}deg 360deg`;
  };

  return { convertToPercent, convertToDegrees, convertDegreeToString };
};
