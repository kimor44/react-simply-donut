import { clsx } from "clsx";
import { usePreparDataForChart } from "../../services/use_prepare_data_for_chart";
import { TSimplyPie } from "./types";
import { Donut } from "../donut/Donut";
import { sortChartData } from "../../lib/utils/chart/sortChartData";

const SimplyPie: React.FC<TSimplyPie> = ({ data, size }: TSimplyPie) => {
  const { calculDegreesForDonut, convertDegreesForDonutDataToString } =
    usePreparDataForChart();

  const sortedData = sortChartData([...data], "desc");
  const degreesForPie = calculDegreesForDonut(sortedData);
  const convertedPieDataToStringDegrees =
    convertDegreesForDonutDataToString(degreesForPie);

  const backgroundStyles = {
    background: `conic-gradient(${convertedPieDataToStringDegrees})`,
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
