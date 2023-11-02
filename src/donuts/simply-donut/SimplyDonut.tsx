import {
  TDonutData,
  TSimplyDonut,
  TDataForDonut,
  TOTAL_DEGREES,
  TOTAL_PERCENTAGE,
  INITIAL_DEGREE,
} from "./types";
import { Donut } from "../donut/Donut";

const calculateTheTotalValue = (donutData: TDonutData[]): number => {
  const donutsData: TDonutData[] = [...donutData];

  return donutsData.reduce((total, donut) => total + donut.value, 0);
};

const convertToPercent = (value: number, total: number) =>
  Math.round((value / total) * TOTAL_PERCENTAGE);

const convertToDegrees = (value: number) =>
  Math.round((value / TOTAL_PERCENTAGE) * TOTAL_DEGREES);

const calculDegreesForDonut = (donutData: TDonutData[]) => {
  const clonedDonutData: TDonutData[] = [...donutData];
  const total = calculateTheTotalValue(clonedDonutData);

  return clonedDonutData.reduce(
    (dataForDonut: TDataForDonut[], current: TDonutData, index: number) => {
      const lastEntry = index - 1;
      const currentPercentage = convertToPercent(current.value, total);
      const currrentDegrees = convertToDegrees(currentPercentage);
      const startDegrees = dataForDonut[lastEntry]?.end || INITIAL_DEGREE;
      const endDegrees = startDegrees + currrentDegrees;

      dataForDonut.push({
        name: current.name,
        color: current.color,
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

const formatingDonutData = (donutData: TDonutData[]): string => {
  const degreesForDonut = calculDegreesForDonut(donutData);

  return convertDegreesForDonutDataToString(degreesForDonut);
};

const SimplyDonut: React.FC<TSimplyDonut> = ({ donutData }: TSimplyDonut) => {
  const convertedDonutDataToStringDegrees = formatingDonutData(donutData);
  const backgroundStyles = {
    background: `conic-gradient(${convertedDonutDataToStringDegrees})`,
  };

  return <Donut backgroundProperties={backgroundStyles} />;
};

export { SimplyDonut };
