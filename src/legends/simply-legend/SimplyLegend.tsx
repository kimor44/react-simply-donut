import { TSimplyLegend } from "./types";
import "./SimplyLegend.css";
import { LegendItem } from "../../shared/legend-item/LegendItem";
import { getFormatedLegend } from "../../lib/legend/getFormatedLegend";

const SimplyLegend: React.FC<TSimplyLegend> = ({ data }: TSimplyLegend) => {
  const formatedLegend = getFormatedLegend(data);

  return (
    <ul className="simply-legend-list">
      {formatedLegend.map((legend) => {
        return (
          <LegendItem key={`${legend.name}-${legend.color}`} item={legend} />
        );
      })}
    </ul>
  );
};

export { SimplyLegend };
