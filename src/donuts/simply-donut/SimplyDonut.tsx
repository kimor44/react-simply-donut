import { TDonutData, TSimplyDonut, TDataForDonut } from "./types";
import { convertToPercent, convertToDegrees } from "../../services/convertors";
import { isValidSize, isHexaFormat } from "../../services/validators";
import { getColor, sortData, calculateTotalValue } from "../../services/utils";
import {
  INITIAL_DEGREE,
  COLORS,
  DEFAULT_INSET_COLOR,
  DEFAULT_INSET_SIZE,
} from "../../services/constants";
import { Donut } from "../donut/Donut";
import { TDonut } from "../donut/types";
import { clsx } from "clsx";
import "./SimplyDonut.css";

const calculDegreesForDonut = (donutData: TDonutData[]) => {
  const clonedDonutData: TDonutData[] = [...donutData];
  const total = calculateTotalValue(clonedDonutData);
  let i = 0;

  return clonedDonutData.reduce(
    (dataForDonut: TDataForDonut[], current: TDonutData, index: number) => {
      const lastEntry = index - 1;
      const currentPercentage = convertToPercent(current.value, total);
      const currrentDegrees = convertToDegrees(currentPercentage);
      const startDegrees = dataForDonut[lastEntry]?.end || INITIAL_DEGREE;
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

const formatingDonutData = (donutData: TDonutData[]): string => {
  const sortedData = sortData([...donutData], "desc");
  const degreesForDonut = calculDegreesForDonut(sortedData);

  return convertDegreesForDonutDataToString(degreesForDonut);
};

const setInsetSize = (size: number): string => {
  if (isValidSize(size)) {
    return `${size}%`;
  }

  return DEFAULT_INSET_SIZE;
};

const setInsetColor = (color: string): string => {
  if (isHexaFormat(color)) {
    return color;
  }

  return DEFAULT_INSET_COLOR;
};

const getInsetProps = (inset: TSimplyDonut["inset"]): TDonut["inset"] => {
  const size =
    inset && inset.size ? setInsetSize(inset.size) : DEFAULT_INSET_SIZE;
  const color =
    inset && inset.color ? setInsetColor(inset.color) : DEFAULT_INSET_COLOR;

  return { "--inset-color": color, "--inset-size": size };
};

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset,
}: TSimplyDonut) => {
  const convertedDonutDataToStringDegrees = formatingDonutData(data);
  const backgroundStyles = {
    background: `conic-gradient(${convertedDonutDataToStringDegrees})`,
  };
  const donutWrapperStyles = clsx({
    ["sm-donut"]: size === "sm",
    ["md-donut"]: size === "md",
    ["lg-donut"]: size === "lg",
    ["simply-donut-wrapper"]: true,
  });

  const insetProps = getInsetProps(inset);

  return (
    <section className={donutWrapperStyles}>
      <Donut background={backgroundStyles} inset={insetProps} />
    </section>
  );
};

export { SimplyDonut };
