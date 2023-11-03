export type TDonutData = {
  name: string;
  value: number;
  color: string;
};

export type TSimplyDonut = {
  data: TDonutData[];
  size?: "sm" | "md" | "lg";
};

export type TDataForDonut = {
  name: string;
  color: string;
  start: number;
  end: number;
};

export const TOTAL_DEGREES = 360;
export const TOTAL_PERCENTAGE = 100;
export const INITIAL_DEGREE = 0;
