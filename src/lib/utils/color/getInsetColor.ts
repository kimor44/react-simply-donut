import { DEFAULT_INSET_COLOR } from "../../constants";
import { isHexaFormat } from "./isHexaFormat";

export const getInsetColor = (color: string): string => {
  if (isHexaFormat(color)) {
    return color;
  }

  return DEFAULT_INSET_COLOR;
};
