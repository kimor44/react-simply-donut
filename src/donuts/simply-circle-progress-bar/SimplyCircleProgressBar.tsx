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
import {
  FIRST_COLOR,
  FIRST_COLOR_INDEX,
  LARGE_SIZE,
  MEDIUM_SIZE,
  SMALL_SIZE,
} from "../../lib/constants";

const SimplyCircleProgressBar: React.FC<TSimplyCircleProgressBar> = ({
  progress,
  color = FIRST_COLOR,
  size,
  inset,
  displayScore = true,
  remainingPortionOpacity = 0.5,
}: TSimplyCircleProgressBar) => {
  const score = safeRateValue(safeParseNumber(progress));
  const degrees = getDegrees(score);
  const progressColor =
    color === FIRST_COLOR ? color : getColor(FIRST_COLOR_INDEX, color);
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
        progress={score}
      />
    </ChartWrapper>
  );
};

export { SimplyCircleProgressBar };
