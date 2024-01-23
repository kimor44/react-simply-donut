import "./LegendName.css";
import { TLegendName } from "./types";

const LegendName = ({ item }: TLegendName) => {
  return (
    <p className="simply-legend-name-wrapper">
      <span
        className="simply-legend-color-indicator"
        style={{ backgroundColor: item.color }}
      />
      <span className="simply-legend-name">{item.name}</span>
    </p>
  );
};
export { LegendName };
