import type { Meta, StoryObj } from "@storybook/react";

import { SimplyPie } from "./SimplyPie";
import { getDataSet } from "../../lib/utils/mocks/charts/getDataSet";

const meta = {
  title: "Charts/SimplyPie",
  component: SimplyPie,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SimplyPie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: getDataSet,
    size: "md",
  },
};
