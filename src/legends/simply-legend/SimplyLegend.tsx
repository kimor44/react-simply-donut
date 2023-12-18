import { TDonutData } from "../../donuts/simply-donut/types";
import { COLORS } from "../../services/constants";
import { useUtils } from "../../services/use_utils";
import { TSimplyLegend } from "./types";
import "./SimplyLegend.css";
import { LegendItem } from "../legend-item/LegendItem";

const SimplyLegend: React.FC<TSimplyLegend> = ({ data }: TSimplyLegend) => {
  const { getColor, sortData } = useUtils();

  const formatingData = (data: TDonutData[]) => {
    const sortedData = sortData([...data], "desc");
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
