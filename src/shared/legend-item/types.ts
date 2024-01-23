import { TDonutData } from "../../donuts/simply-donut/types";

type TPercentage = {
  percentage?: number;
};

export type TLegendItem = {
  item: TDonutData & TPercentage;
};
