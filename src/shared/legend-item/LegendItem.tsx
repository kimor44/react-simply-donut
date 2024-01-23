import { TLegendItem } from "./types";
import "./LegendItem.css";
import { LegendValue } from "../legend/legend-value/LegendValue";
import { LegendName } from "../legend/legend-name/LegendName";

const LegendItem: React.FC<TLegendItem> = ({
  item,
  showPercentage,
}: TLegendItem) => {
  return (
    <li className="simply-legend-item">
      <LegendName item={item} />
      <LegendValue item={item} showPercentage={showPercentage} />
    </li>
  );
};

export { LegendItem };
