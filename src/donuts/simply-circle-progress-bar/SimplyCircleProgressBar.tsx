import { clsx } from "clsx";
import { useInsetProps } from "../../services/use_inset_props";
import { TSimplyCircleProgressBar } from "./types";
import { Donut } from "../donut/Donut";
import { useConvertors } from "../../services/use_convertors";
import "./SimplyCircleProgressBar.css";
import { getColor } from "../../lib/utils/color/getColor";
import { safeRateValue } from "../../lib/utils/number/safeRateValue";
import { safeParseNumber } from "../../lib/utils/number/safeParsedNumber";

const SimplyCircleProgressBar: React.FC<TSimplyCircleProgressBar> = ({
  progress,
  color,
  size,
  inset,
  displayScore = true,
  transparency = true,
}: TSimplyCircleProgressBar) => {
  const { convertToDegrees, convertDegreeToString } = useConvertors();
  const rate = safeRateValue(safeParseNumber(progress));
  const degrees = convertToDegrees(rate);
  const colorIndex = 0;

  const progressColor = getColor(colorIndex, color);

  const convertedToString = convertDegreeToString(
    degrees,
    progressColor,
    transparency
  );

  const getInsetProps = useInsetProps();
  const backgroundStyles = {
    background: `conic-gradient(${convertedToString})`,
  };
  const circleProgressBarWrapperStyles = clsx({
    ["sm-donut"]: size === "sm",
    ["md-donut"]: size === "md",
    ["lg-donut"]: size === "lg",
    ["simply-progress-wrapper"]: true,
  });

  const progressStyles = clsx({
    ["sm-progress"]: size === "sm",
    ["md-progress"]: size === "md",
    ["lg-progress"]: size === "lg",
    ["display-score"]: displayScore,
  });

  const insetProps = getInsetProps(inset);

  return (
    <section className={`${circleProgressBarWrapperStyles} relative`}>
      <Donut
        className={`simply-circle-progress-bar ${progressStyles}`}
        background={backgroundStyles}
        inset={insetProps}
        progress={rate}
      />
    </section>
  );
};

export { SimplyCircleProgressBar };
