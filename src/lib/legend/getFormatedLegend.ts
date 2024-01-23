import { TDonutData } from "../../donuts/simply-donut/types";
import { getTotalChartValue } from "../chart/getTotalChartValue";
import { sortChartData } from "../chart/sortChartData";
import { COLORS } from "../constants";
import { getColor } from "../utils/color/getColor";
import { getPercentage } from "../utils/number/getPercentage";

export const getFormatedLegend = (data: TDonutData[]) => {
  const sortedData = sortChartData([...data], "desc");
  const totalValue = getTotalChartValue(sortedData);
  let colorIndex = 0;

  return sortedData.map((current) => {
    if (colorIndex > COLORS.length - 1) {
      colorIndex = 0;
    }

    const color = getColor(colorIndex, current.color);
    colorIndex++;

    const percentage = getPercentage(current.value, totalValue);

    return {
      name: current.name,
      value: current.value,
      color: color,
      percentage: percentage,
    };
  });
};
