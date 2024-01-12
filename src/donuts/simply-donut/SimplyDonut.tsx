import { TSimplyDonut } from "./types";
import { Donut } from "../donut/Donut";
import { getConicGradientBackground } from "../../lib/features/chart/getConicGradientBackground.ts";
import { getInsetProps } from "../../lib/features/chart/getInsetProps.ts";
import { ChartWrapper } from "../../shared/chart-wrapper/ChartWrapper.tsx";

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset,
}: TSimplyDonut) => {
  const conicGradientBackground = getConicGradientBackground(data);

  const insetProps = getInsetProps(inset);

  return (
    <ChartWrapper size={size}>
      <Donut
        className="simply-donut"
        background={conicGradientBackground}
        inset={insetProps}
      />
    </ChartWrapper>
  );
};

export { SimplyDonut };
