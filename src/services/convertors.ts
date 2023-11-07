const TOTAL_DEGREES = 360;
const TOTAL_PERCENTAGE = 100;

export const convertToPercent = (value: number, total: number) =>
  Math.round((value / total) * TOTAL_PERCENTAGE);

export const convertToDegrees = (value: number) =>
  Math.round((value / TOTAL_PERCENTAGE) * TOTAL_DEGREES);
