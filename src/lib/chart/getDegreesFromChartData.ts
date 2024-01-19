import { TDataForDonut, TDonutData } from "../../donuts/simply-donut/types";
import { COLORS, MIN_DEGREE } from "../constants";
import { getColor } from "../utils/color/getColor";
import { getDegrees } from "../utils/number/getDegrees";
import { getPercentage } from "../utils/number/getPercentage";
import { getTotalChartValue } from "./getTotalChartValue";

export const getDegreesFromChartData = (
  donutData: TDonutData[]
): TDataForDonut[] => {
  const clonedChartData: TDonutData[] = [...donutData];
  const total = getTotalChartValue(clonedChartData);
  let colorIndex = 0;

  return clonedChartData.reduce(
    (dataForChart: TDataForDonut[], current: TDonutData, index: number) => {
      const lastEntry = index - 1;
      const currentPercentage = getPercentage(current.value, total);
      const currrentDegrees = getDegrees(currentPercentage);
      const startDegrees = dataForChart[lastEntry]?.end || MIN_DEGREE;
      const endDegrees = startDegrees + currrentDegrees;
      if (colorIndex > COLORS.length - 1) {
        colorIndex = 0;
      }
      const color = getColor(colorIndex, current.color);
      colorIndex++;

      dataForChart.push({
        name: current.name,
        color: color,
        start: startDegrees,
        end: endDegrees,
      });

      return dataForChart;
    },
    []
  );
};
