import { TSimplyDonut } from "../simply-donut/types";

export type TSimplyCircleProgressBar = Pick<TSimplyDonut, "size" | "inset"> & {
  progress: number;
  color?: string;
  displayScore?: boolean;
  transparency?: boolean;
};
