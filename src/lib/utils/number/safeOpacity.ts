import { MAX_OPACITY, MIN_OPACITY } from "../../constants";

export const safeOpacity = (opacity: number) => {
  if (!opacity) {
    return MIN_OPACITY;
  }

  if (opacity > MAX_OPACITY) {
    return MAX_OPACITY;
  }

  if (opacity < 0) {
    return MIN_OPACITY;
  }

  return opacity;
};
