import type { Meta, StoryObj } from "@storybook/react";

import { SimplyCircleProgressBar } from "./SimplyCircleProgressBar";

const meta = {
  title: "Example/SimplyCircleProgressBar",
  component: SimplyCircleProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimplyCircleProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    progress: 57,
    color: "#1231fe",
    size: "md",
    inset: {
      color: "#ececf5",
      size: 10,
    },
    displayScore: true,
    transparency: true,
  },
};
