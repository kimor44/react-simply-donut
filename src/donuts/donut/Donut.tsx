import { TDonut } from "./types";
import "./Donut.css";

const Donut: React.FC<TDonut> = ({ background, inset }: TDonut) => {
  const styles = { ...background, ...inset };
  return <div className="simply-donut" style={styles} />;
};

export { Donut };
