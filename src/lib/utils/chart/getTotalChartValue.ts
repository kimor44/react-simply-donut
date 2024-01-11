import { TDonutData } from "../../../donuts/simply-donut/types";

export const getTotalChartValue = (data: TDonutData[]): number => {
  const donutsData: TDonutData[] = [...data];

  return donutsData.reduce((total, donut) => total + donut.value, 0);
};
