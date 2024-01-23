import { TLegendName } from "./types";
import "./LegendName.css";

const LegendName = ({ item }: TLegendName) => {
  return (
    <p className="legend-name-wrapper">
      <span
        className="simply-legend-color-indicator"
        style={{ backgroundColor: item.color }}
      />
      <span className="simply-legend-name">{item.name}</span>
    </p>
  );
};
export { LegendName };
