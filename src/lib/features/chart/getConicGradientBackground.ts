import { TSimplyDonut } from "../../../donuts/simply-donut/types";
import { getChartBackground } from "../../chart/getChartBackground";
import { getDegreesFromChartData } from "../../chart/getDegreesFromChartData";
import { sortChartData } from "../../chart/sortChartData";

export const getConicGradientBackground = (data: TSimplyDonut["data"]) => {
  const sortedData = sortChartData([...data], "desc");
  const degreesFromChartData = getDegreesFromChartData(sortedData);
  const chartBackground = getChartBackground(degreesFromChartData);

  return {
    background: `conic-gradient(${chartBackground})`,
  };
};
