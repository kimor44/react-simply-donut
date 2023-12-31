import { MAXIMAL_INSET, MINIMAL_INSET } from "./constants";

export const useValidators = () => {
  const isHexaFormat = (couleur: string): boolean => {
    const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

    return regex.test(couleur);
  };

  const isValidSize = (size: number): boolean => {
    return size >= MINIMAL_INSET && size <= MAXIMAL_INSET;
  };

  return { isHexaFormat, isValidSize };
};
