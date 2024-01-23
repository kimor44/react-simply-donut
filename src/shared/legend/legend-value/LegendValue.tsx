import { TLegendValue } from "./type";

const LegendValue = ({ item, showPercentage }: TLegendValue) => {
  return (
    <p className="simply-legend-value-wrapper">
      <span className="simply-legend-value">{item.value}</span>
      {showPercentage && (
        <span className="simply-legend-percentage"> ({item.percentage}%)</span>
      )}
    </p>
  );
};
export { LegendValue };
