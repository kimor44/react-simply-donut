import { TDonutData, TSimplyDonut } from "./types";
import { useUtils } from "../../services/use_utils.ts";
import { Donut } from "../donut/Donut";
import { clsx } from "clsx";
import "./SimplyDonut.css";
import { usePreparDataForChart } from "../../services/use_prepare_data_for_chart.ts";
import { useInsetProps } from "../../services/use_inset_props.ts";

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset,
}: TSimplyDonut) => {
  const { sortData } = useUtils();
  const { calculDegreesForDonut, convertDegreesForDonutDataToString } =
    usePreparDataForChart();
  const getInsetProps = useInsetProps();

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
      <Donut
        className="simply-donut"
        background={backgroundStyles}
        inset={insetProps}
      />
    </section>
  );
};

export { SimplyDonut };
