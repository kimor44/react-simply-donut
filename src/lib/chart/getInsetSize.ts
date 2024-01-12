import { DEFAULT_INSET_SIZE } from "../../services/constants";
import { safeSizeValue } from "../utils/number/safeSizeValue";

export const getInsetSize = (size: number): string => {
  if (safeSizeValue(size)) {
    return `${size}%`;
  }

  return DEFAULT_INSET_SIZE;
};
