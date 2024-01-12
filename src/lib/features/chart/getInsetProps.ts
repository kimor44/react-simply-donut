import { TDonut } from "../../../donuts/donut/types";
import { TSimplyDonut } from "../../../donuts/simply-donut/types";
import { DEFAULT_INSET_COLOR, DEFAULT_INSET_SIZE } from "../../constants";
import { getInsetColor } from "../../utils/color/getInsetColor";
import { getInsetSize } from "../../chart/getInsetSize";

export const getInsetProps = (
  inset: TSimplyDonut["inset"]
): TDonut["inset"] => {
  const size =
    inset && inset.size ? getInsetSize(inset.size) : DEFAULT_INSET_SIZE;
  const color =
    inset && inset.color ? getInsetColor(inset.color) : DEFAULT_INSET_COLOR;

  return { "--inset-color": color, "--inset-size": size };
};
