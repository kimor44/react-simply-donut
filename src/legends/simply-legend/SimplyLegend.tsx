import { TDonutData } from "../../donuts/simply-donut/types";
import { COLORS } from "../../lib/constants";
import { TSimplyLegend } from "./types";
import "./SimplyLegend.css";
import { LegendItem } from "../../shared/legend-item/LegendItem";
import { getColor } from "../../lib/utils/color/getColor";
import { sortChartData } from "../../lib/chart/sortChartData";

const SimplyLegend: React.FC<TSimplyLegend> = ({ data }: TSimplyLegend) => {
  const formatingData = (data: TDonutData[]) => {
    const sortedData = sortChartData([...data], "desc");
    let i = 0;

    return sortedData.map((current) => {
      if (i > COLORS.length - 1) {
        i = 0;
      }

      const color = getColor(i, current.color);
      i++;

      return {
        name: current.name,
        value: current.value,
        color: color,
      };
    });
  };
  const formatedData = formatingData(data);

  return (
    <ul className="simply-legend-list">
      {formatedData.map((data) => {
        return <LegendItem key={`${data.name}-${data.color}`} item={data} />;
      })}
    </ul>
  );
};

export { SimplyLegend };
