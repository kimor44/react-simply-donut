import { clsx } from "clsx";
import { TChartWrapper } from "./types";
import "./ChartWrapper.css";

const ChartWrapper: React.FC<TChartWrapper> = ({
  size,
  children,
}: TChartWrapper) => {
  const chartWrapperStyles = clsx({
    ["sm-chart"]: size === "sm",
    ["md-chart"]: size === "md",
    ["lg-chart"]: size === "lg",
    ["chart-wrapper"]: true,
  });

  return <section className={chartWrapperStyles}>{children}</section>;
};

export { ChartWrapper };
