import { TDonut } from "../donuts/donut/types";
import { TSimplyDonut } from "../donuts/simply-donut/types";
import { isHexaFormat } from "../lib/utils/color/isHexaFormat";
import { safeSizeValue } from "../lib/utils/number/safeSizeValue";
import { DEFAULT_INSET_COLOR, DEFAULT_INSET_SIZE } from "./constants";

export const useInsetProps = () => {
  const setInsetSize = (size: number): string => {
    if (safeSizeValue(size)) {
      return `${size}%`;
    }

    return DEFAULT_INSET_SIZE;
  };

  const setInsetColor = (color: string): string => {
    if (isHexaFormat(color)) {
      return color;
    }

    return DEFAULT_INSET_COLOR;
  };

  const getInsetProps = (inset: TSimplyDonut["inset"]): TDonut["inset"] => {
    const size =
      inset && inset.size ? setInsetSize(inset.size) : DEFAULT_INSET_SIZE;
    const color =
      inset && inset.color ? setInsetColor(inset.color) : DEFAULT_INSET_COLOR;

    return { "--inset-color": color, "--inset-size": size };
  };

  return getInsetProps;
};
