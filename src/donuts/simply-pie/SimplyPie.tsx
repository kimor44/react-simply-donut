import { clsx } from "clsx";
import { TSimplyPie } from "./types";
import { Donut } from "../donut/Donut";
import { sortChartData } from "../../lib/chart/sortChartData";
import { getDegreesFromChartData } from "../../lib/chart/getDegreesFromChartData";
import { getChartBackground } from "../../lib/chart/getChartBackground";

const SimplyPie: React.FC<TSimplyPie> = ({ data, size }: TSimplyPie) => {
  const sortedData = sortChartData([...data], "desc");
  const degreesForPie = getDegreesFromChartData(sortedData);
  const pieBackground = getChartBackground(degreesForPie);

  const backgroundStyles = {
    background: `conic-gradient(${pieBackground})`,
  };

  const donutWrapperStyles = clsx({
    ["sm-donut"]: size === "sm",
    ["md-donut"]: size === "md",
    ["lg-donut"]: size === "lg",
    ["simply-donut-wrapper"]: true,
  });

  return (
    <section className={donutWrapperStyles}>
      <Donut className="simply-pie" background={backgroundStyles} />
    </section>
  );
};

export { SimplyPie };
