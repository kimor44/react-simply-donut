import { clsx } from "clsx";
import { TSimplyCircleProgressBar } from "./types";
import { Donut } from "../../shared/donut/Donut";
import { getColor } from "../../lib/utils/color/getColor";
import { safeRateValue } from "../../lib/utils/number/safeRateValue";
import { safeParseNumber } from "../../lib/utils/number/safeParsedNumber";
import { getDegrees } from "../../lib/utils/number/getDegrees";
import { getProgressBackground } from "../../lib/chart/getProgressBackground";
import { getInsetProps } from "../../lib/features/chart/getInsetProps";
import { ChartWrapper } from "../../shared/chart-wrapper/ChartWrapper";
import { LARGE_SIZE, MEDIUM_SIZE, SMALL_SIZE } from "../../lib/constants";

const SimplyCircleProgressBar: React.FC<TSimplyCircleProgressBar> = ({
  progress,
  color,
  size,
  inset,
  displayScore = true,
  remainingPortionOpacity = 0.5,
}: TSimplyCircleProgressBar) => {
  const rate = safeRateValue(safeParseNumber(progress));
  const degrees = getDegrees(rate);
  const colorIndex = 0;
  const progressColor = getColor(colorIndex, color);
  const progressBackground = getProgressBackground(
    degrees,
    progressColor,
    remainingPortionOpacity
  );

  const backgroundStyles = {
    background: `conic-gradient(${progressBackground})`,
  };

  const progressStyles = clsx({
    ["sm-progress"]: size === SMALL_SIZE,
    ["md-progress"]: size === MEDIUM_SIZE,
    ["lg-progress"]: size === LARGE_SIZE,
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
