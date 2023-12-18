import { useValidators } from "./use_validators";
import { COLORS } from "./constants";
import { TDonutData } from "../donuts/simply-donut/types";

export const useUtils = () => {
  const { isHexaFormat } = useValidators();
  const getColor = (index: number, color?: string): string => {
    return color && isHexaFormat(color) ? color : COLORS[index];
  };
  const sortData = (
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

  const calculateTotalValue = (data: TDonutData[]): number => {
    const donutsData: TDonutData[] = [...data];

    return donutsData.reduce((total, donut) => total + donut.value, 0);
  };
  return { getColor, sortData, calculateTotalValue };
};
