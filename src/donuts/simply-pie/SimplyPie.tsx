import { TSimplyPie } from "./types";
import { Donut } from "../donut/Donut";
import { getConicGradientBackground } from "../../lib/features/chart/getConicGradientBackground";
import { ChartWrapper } from "../../shared/chart-wrapper/ChartWrapper";

const SimplyPie: React.FC<TSimplyPie> = ({ data, size }: TSimplyPie) => {
  const conicGradientBackground = getConicGradientBackground(data);

  return (
    <ChartWrapper size={size}>
      <Donut className="simply-pie" background={conicGradientBackground} />
    </ChartWrapper>
  );
};

export { SimplyPie };
