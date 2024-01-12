import { clsx } from "clsx";
import { TSimplyPie } from "./types";
import { Donut } from "../donut/Donut";
import { getConicGradientBackground } from "../../lib/features/chart/getConicGradientBackground";

const SimplyPie: React.FC<TSimplyPie> = ({ data, size }: TSimplyPie) => {
  const conicGradientBackground = getConicGradientBackground(data);

  const donutWrapperStyles = clsx({
    ["sm-donut"]: size === "sm",
    ["md-donut"]: size === "md",
    ["lg-donut"]: size === "lg",
    ["simply-donut-wrapper"]: true,
  });

  return (
    <section className={donutWrapperStyles}>
      <Donut className="simply-pie" background={conicGradientBackground} />
    </section>
  );
};

export { SimplyPie };
