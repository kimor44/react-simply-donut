import { TDonutData, TSimplyDonut } from "./types";
import { Donut } from "../donut/Donut";
import { clsx } from "clsx";
import "./SimplyDonut.css";
import { useInsetProps } from "../../services/use_inset_props.ts";
import { sortChartData } from "../../lib/chart/sortChartData.ts";
import { getDegreesFromChartData } from "../../lib/chart/getDegreesFromChartData.ts";
import { getChartBackground } from "../../lib/chart/getChartBackground.ts";

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset,
}: TSimplyDonut) => {
  const getInsetProps = useInsetProps();

  const sortedData: TDonutData[] = sortChartData([...data], "desc");
  const degreesForDonut = getDegreesFromChartData(sortedData);
  const donutBackground = getChartBackground(degreesForDonut);

  const backgroundStyles = {
    background: `conic-gradient(${donutBackground})`,
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
      <Donut
        className="simply-donut"
        background={backgroundStyles}
        inset={insetProps}
      />
    </section>
  );
};

export { SimplyDonut };
