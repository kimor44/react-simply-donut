import { TLegendItem } from "./types";
import "./LegendItem.css";
import { LegendValue } from "../legend/legend-value/LegendValue";

const LegendItem: React.FC<TLegendItem> = ({
  item,
  showPercentage,
}: TLegendItem) => {
  return (
    <li className="simply-legend-item">
      <p>
        <span
          className="simply-legend-color-indicator"
          style={{ backgroundColor: item.color }}
        />
        <span className="simply-legend-name">{item.name}</span>
      </p>
      <LegendValue item={item} showPercentage={showPercentage} />
    </li>
  );
};

export { LegendItem };
