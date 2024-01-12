import { clsx } from "clsx";
import { TSimplyCircleProgressBar } from "./types";
import { Donut } from "../donut/Donut";
import { getColor } from "../../lib/utils/color/getColor";
import { safeRateValue } from "../../lib/utils/number/safeRateValue";
import { safeParseNumber } from "../../lib/utils/number/safeParsedNumber";
import { getDegrees } from "../../lib/utils/number/getDegrees";
import { getProgressBackground } from "../../lib/chart/getProgressBackground";
import { getInsetProps } from "../../lib/features/chart/getInsetProps";
import { ChartWrapper } from "../../shared/chart-wrapper/ChartWrapper";

const SimplyCircleProgressBar: React.FC<TSimplyCircleProgressBar> = ({
  progress,
  color,
  size,
  inset,
  displayScore = true,
  transparency = true,
}: TSimplyCircleProgressBar) => {
  const rate = safeRateValue(safeParseNumber(progress));
  const degrees = getDegrees(rate);
  const colorIndex = 0;
  const progressColor = getColor(colorIndex, color);
  const progressBackground = getProgressBackground(
    degrees,
    progressColor,
    transparency
  );

  const backgroundStyles = {
    background: `conic-gradient(${progressBackground})`,
  };

  const progressStyles = clsx({
    ["sm-progress"]: size === "sm",
    ["md-progress"]: size === "md",
    ["lg-progress"]: size === "lg",
    ["display-score"]: displayScore,
  });

  const insetProps = getInsetProps(inset);

  return (
    <ChartWrapper size={size}>
      <Donut
        className={`simply-circle-progress-bar ${progressStyles}`}
        background={backgroundStyles}
        inset={insetProps}
        progress={rate}
      />
    </ChartWrapper>
  );
};

export { SimplyCircleProgressBar };
