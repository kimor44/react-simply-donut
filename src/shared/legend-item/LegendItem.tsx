import { TLegendItem } from "./types";
import "./LegendItem.css";

const LegendItem: React.FC<TLegendItem> = ({ item }: TLegendItem) => {
  return (
    <li className="simply-legend-item">
      <p>
        <span
          className="simply-legend-color-indicator"
          style={{ backgroundColor: item.color }}
        />
        <span className="simply-legend-name">{item.name}</span>
      </p>
      <span className="simply-legend-value">{item.value}</span>
    </li>
  );
};

export { LegendItem };
