import { TLegendValue } from "./type";

const LegendValue = ({ item, showPercentage }: TLegendValue) => {
  return (
    <span className="simply-legend-value">
      {item.value} {showPercentage && `(${item.percentage}%)`}
    </span>
  );
};
export { LegendValue };
