import { TDataForDonut, TDonutData } from "../donuts/simply-donut/types";
import { getDegrees } from "../lib/utils/number/getDegrees";
import { getPercentage } from "../lib/utils/number/getPercentage";
import { COLORS, MIN_DEGREE } from "./constants";
import { useUtils } from "./use_utils";

export const usePreparDataForChart = () => {
  const { getColor, calculateTotalValue } = useUtils();

  const calculDegreesForDonut = (donutData: TDonutData[]): TDataForDonut[] => {
    const clonedDonutData: TDonutData[] = [...donutData];
    const total = calculateTotalValue(clonedDonutData);
    let i = 0;

    return clonedDonutData.reduce(
      (dataForDonut: TDataForDonut[], current: TDonutData, index: number) => {
        const lastEntry = index - 1;
        const currentPercentage = getPercentage(current.value, total);
        const currrentDegrees = getDegrees(currentPercentage);
        const startDegrees = dataForDonut[lastEntry]?.end || MIN_DEGREE;
        const endDegrees = startDegrees + currrentDegrees;
        if (i > COLORS.length - 1) {
          i = 0;
        }
        const color = getColor(i, current.color);
        i++;

        dataForDonut.push({
          name: current.name,
          color: color,
          start: startDegrees,
          end: endDegrees,
        });

        return dataForDonut;
      },
      []
    );
  };

  const convertDegreesForDonutDataToString = (
    degreesForDonut: TDataForDonut[]
  ) => {
    const degreesDataConvertedToString = degreesForDonut
      .map((degreeForDonut) => {
        const { color, start, end } = degreeForDonut;
        return `${color} ${start}deg ${end}deg`;
      })
      .join(",");

    return degreesDataConvertedToString;
  };

  return { calculDegreesForDonut, convertDegreesForDonutDataToString };
};
