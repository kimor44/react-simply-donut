export const getTransparencyColor = (color: string, transparency: boolean) => {
  // const transformedColor = `${color}66`;

  // const convertedToString = `${color} 0deg ${degrees}deg, ${transformedColor} ${degrees}deg 360deg`;

  return transparency ? `${color}66` : "transparent";
  // return `${color} 0deg ${degrees}deg, ${transformedColor} ${degrees}deg 360deg`;
};
