import { TSimplyDonut } from "./types";
import { Donut } from "../donut/Donut";
import { clsx } from "clsx";
import "./SimplyDonut.css";
import { getConicGradientBackground } from "../../lib/features/chart/getConicGradientBackground.ts";
import { getInsetProps } from "../../lib/features/chart/getInsetProps.ts";

const SimplyDonut: React.FC<TSimplyDonut> = ({
  data,
  size,
  inset,
}: TSimplyDonut) => {
  const conicGradientBackground = getConicGradientBackground(data);

  const donutWrapperStyles = clsx({
    ["sm-donut"]: size === "sm",
    ["md-donut"]: size === "md",
    ["lg-donut"]: size === "lg",
    ["simply-donut-wrapper"]: true,
  });

  const insetProps = getInsetProps(inset);

  return (
    <section className={donutWrapperStyles}>
      <Donut
        className="simply-donut"
        background={conicGradientBackground}
        inset={insetProps}
      />
    </section>
  );
};

export { SimplyDonut };
