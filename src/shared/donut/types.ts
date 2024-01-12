export type TDonut = {
  background: { background: string };
  className: string;
  inset?: {
    "--inset-color": string;
    "--inset-size": string;
  };
  progress?: number;
};
