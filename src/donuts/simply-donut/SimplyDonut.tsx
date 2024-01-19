import { TSimplyDonut } from "./types";
import { Donut } from "../../shared/donut/Donut.tsx";
import { getConicGradientBackground } from "../../lib/features/chart/getConicGradientBackground.ts";
import { getInsetProps } from "../../lib/features/chart/getInsetProps.ts";
import { ChartWrapper } from "../../shared/chart-wrapper/ChartWrapper.tsx";
import { DEFAULT_INSET } from "../../lib/constants.ts";

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset = DEFAULT_INSET,
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
