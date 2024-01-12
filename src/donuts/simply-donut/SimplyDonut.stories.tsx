import type { Meta, StoryObj } from "@storybook/react";

import { SimplyDonut } from "./SimplyDonut";
import { getDataSet } from "../../lib/utils/mocks/charts/getDataSet";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Charts/SimplyDonut",
  component: SimplyDonut,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SimplyDonut>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    data: getDataSet,
    size: "md",
    inset: {
      color: "#ececf5",
      size: 10,
    },
  },
};
