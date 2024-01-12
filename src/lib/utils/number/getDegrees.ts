import { MAX_DEGREES, MAX_PERCENTAGE } from "../../constants";

export const getDegrees = (value: number): number =>
  Math.round((value / MAX_PERCENTAGE) * MAX_DEGREES);
