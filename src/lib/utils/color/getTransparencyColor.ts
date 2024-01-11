export const getTransparencyColor = (color: string, transparency: boolean) => {
  return transparency ? `${color}66` : "transparent";
};
