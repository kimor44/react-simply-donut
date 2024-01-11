export const isHexaFormat = (couleur: string): boolean => {
  const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

  return regex.test(couleur);
};
