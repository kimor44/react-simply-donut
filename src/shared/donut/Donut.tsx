import { TDonut } from "./types";
import "./Donut.css";

const Donut: React.FC<TDonut> = ({
  background,
  className,
  inset,
  progress,
}: TDonut) => {
  const styles = { ...background, ...inset };
  return (
    <div
      className={className}
      style={styles}
      {...{ "data-progress": progress }}
    />
  );
};

export { Donut };
