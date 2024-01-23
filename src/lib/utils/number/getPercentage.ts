import { MAX_PERCENTAGE } from "../../constants";

export const getPercentage = (value: number, total: number): number => {
  return (Math.round((value / total) * MAX_PERCENTAGE * 10) / 10).toFixed(
    1
  ) as unknown as number;
};
