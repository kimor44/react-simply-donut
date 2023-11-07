import { isHexaFormat } from "./validators";
import { COLORS } from "./constants";
import { TDonutData } from "../donuts/simply-donut/types";

export const getColor = (index: number, color?: string): string => {
  return color && isHexaFormat(color) ? color : COLORS[index];
};

export const sortData = (
  data: TDonutData[],
  order: "asc" | "desc" = "asc"
): TDonutData[] => {
  console.log("🚀 ------------------------------------🚀");
  console.log("🚀 ~ file: utils.ts:13 ~ data:", { data, order });
  console.log("🚀 ------------------------------------🚀");
  if (order === "asc") {
    data.sort((a: TDonutData, b: TDonutData) => a.value - b.value);
  } else {
    data.sort((a: TDonutData, b: TDonutData) => b.value - a.value);
  }

  return data;
};

export const calculateTotalValue = (data: TDonutData[]): number => {
  const donutsData: TDonutData[] = [...data];

  return donutsData.reduce((total, donut) => total + donut.value, 0);
};
