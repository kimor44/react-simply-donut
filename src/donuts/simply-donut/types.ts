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
