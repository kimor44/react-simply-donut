import { MAX_PERCENTAGE, MIN_PERCENTAGE } from "../../../services/constants";

export const safeRateValue = (progress: number): number => {
  if (!progress) {
    return MIN_PERCENTAGE;
  }

  if (progress > MAX_PERCENTAGE) {
    return MAX_PERCENTAGE;
  }

  if (progress < 0) {
    return MIN_PERCENTAGE;
  }

  return progress;
};
