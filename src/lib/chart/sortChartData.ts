import { TDonutData } from "../../donuts/simply-donut/types";

export const sortChartData = (
  data: TDonutData[],
  order: "asc" | "desc" = "asc"
): TDonutData[] => {
  if (order === "asc") {
    data.sort((a: TDonutData, b: TDonutData) => a.value - b.value);
  } else {
    data.sort((a: TDonutData, b: TDonutData) => b.value - a.value);
  }

  return data;
};
