import { clsx } from "clsx";
import { TChartWrapper } from "./types";
import "./ChartWrapper.css";
import { LARGE_SIZE, MEDIUM_SIZE, SMALL_SIZE } from "../../lib/constants";

const ChartWrapper: React.FC<TChartWrapper> = ({
  size,
  children,
}: TChartWrapper) => {
  const chartWrapperStyles = clsx({
    ["sm-chart"]: size === SMALL_SIZE,
    ["md-chart"]: size === MEDIUM_SIZE,
    ["lg-chart"]: size === LARGE_SIZE,
    ["chart-wrapper"]: true,
  });

  return <section className={chartWrapperStyles}>{children}</section>;
};

export { ChartWrapper };
