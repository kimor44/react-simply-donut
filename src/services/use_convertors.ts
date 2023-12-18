import { TOTAL_PERCENTAGE, TOTAL_DEGREES } from "./constants";

export const useConvertors = () => {
  const convertToPercent = (value: number, total: number) =>
    Math.round((value / total) * TOTAL_PERCENTAGE);

  const convertToDegrees = (value: number) =>
    Math.round((value / TOTAL_PERCENTAGE) * TOTAL_DEGREES);

  return { convertToPercent, convertToDegrees };
};
