export type TDonut = {
  background: { background: string };
  className: "simply-donut" | "simply-pie";
  inset?: {
    "--inset-color": string;
    "--inset-size": string;
  };
};
