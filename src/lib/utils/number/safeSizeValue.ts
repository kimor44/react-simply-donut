import { MAXIMAL_INSET, MINIMAL_INSET } from "../../constants";

export const safeSizeValue = (size: number): boolean => {
  return size >= MINIMAL_INSET && size <= MAXIMAL_INSET;
};
