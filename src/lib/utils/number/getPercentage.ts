import { MAX_PERCENTAGE } from "../../../services/constants";

export const getPercentage = (value: number, total: number): number =>
  Math.round((value / total) * MAX_PERCENTAGE);