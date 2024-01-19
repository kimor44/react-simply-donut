import { TDonutData } from "../../donuts/simply-donut/types";
import { sortChartData } from "../chart/sortChartData";
import { COLORS } from "../constants";
import { getColor } from "../utils/color/getColor";

export const getFormatedLegend = (data: TDonutData[]) => {
  const sortedData = sortChartData([...data], "desc");
  let colorIndex = 0;

  return sortedData.map((current) => {
    if (colorIndex > COLORS.length - 1) {
      colorIndex = 0;
    }

    const color = getColor(colorIndex, current.color);
    colorIndex++;

    return {
      name: current.name,
      value: current.value,
      color: color,
    };
  });
};
