import { TDataForDonut } from "../../donuts/simply-donut/types";

export const getChartBackground = (degreesForDonut: TDataForDonut[]) => {
  const chartBackground = degreesForDonut
    .map((degreeForDonut) => {
      const { color, start, end } = degreeForDonut;
      return `${color} ${start}deg ${end}deg`;
    })
    .join(",");

  return chartBackground;
};
