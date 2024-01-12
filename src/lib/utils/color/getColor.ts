import { COLORS } from "../../constants";
import { isHexaFormat } from "./isHexaFormat";

export const getColor = (index: number, color?: string): string => {
  return color && isHexaFormat(color) ? color : COLORS[index];
};
