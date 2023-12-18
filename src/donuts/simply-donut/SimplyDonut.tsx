import { TDonutData, TSimplyDonut } from "./types";
import { isValidSize, isHexaFormat } from "../../services/validators";
import { useUtils } from "../../services/use_utils.ts";
import {
  DEFAULT_INSET_COLOR,
  DEFAULT_INSET_SIZE,
} from "../../services/constants";
import { Donut } from "../donut/Donut";
import { TDonut } from "../donut/types";
import { clsx } from "clsx";
import "./SimplyDonut.css";
import { usePreparDataForChart } from "../../services/use_prepare_data_for_chart.tsx";

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
  const { sortData } = useUtils();
  const { calculDegreesForDonut, convertDegreesForDonutDataToString } =
    usePreparDataForChart();
  const sortedData: TDonutData[] = sortData([...data], "desc");
  const degreesForDonut = calculDegreesForDonut(sortedData);

  const convertedDonutDataToStringDegrees =
    convertDegreesForDonutDataToString(degreesForDonut);

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
