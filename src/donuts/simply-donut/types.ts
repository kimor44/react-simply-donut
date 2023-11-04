export type TDonutData = {
  name: string;
  value: number;
  color?: string;
};

export type TSimplyDonut = {
  data: TDonutData[];
  size?: "sm" | "md" | "lg";
  inset?: {
    color?: string;
    size?: number;
  };
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
export const COLORS: string[] = [
  "#FF5733",
  "#FFBD33",
  "#FFDD33",
  "#C1FF33",
  "#69FF33",
  "#33FF82",
  "#33FFDD",
  "#33B5FF",
  "#337AFF",
  "#3349FF",
  "#7433FF",
  "#B533FF",
];
export const DEFAULT_INSET_SIZE = "12%";
export const DEFAULT_INSET_COLOR = "#cbd5e1";
export const MINIMAL_INSET = 5;
export const MAXIMAL_INSET = 45;
