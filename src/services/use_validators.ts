import { MAXIMAL_INSET, MINIMAL_INSET } from "./constants";

export const useValidators = () => {
  const isValidSize = (size: number): boolean => {
    return size >= MINIMAL_INSET && size <= MAXIMAL_INSET;
  };

  return { isValidSize };
};
