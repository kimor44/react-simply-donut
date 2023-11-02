import { TDonut } from "./types";
import "./Donut.css";

const Donut: React.FC<TDonut> = ({ backgroundProperties }: TDonut) => {
  return <div className="simply-donut" style={backgroundProperties} />;
};

export { Donut };
