import opacity from "hex-color-opacity";
import { safeOpacity } from "../number/safeOpacity";
import { safeParseNumber } from "../number/safeParsedNumber";

export const getOpacityColor = (
  color: string,
  remainingPortionOpacity: number
) => {
  const portionOpacity = safeOpacity(safeParseNumber(remainingPortionOpacity));

  return opacity(color, portionOpacity);
};
