import type { Meta, StoryObj } from "@storybook/react";
import { SimplyCircleProgressBar } from "./SimplyCircleProgressBar";

const meta = {
  title: "Charts/SimplyCircleProgressBar",
  component: SimplyCircleProgressBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    remainingPortionOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
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
    remainingPortionOpacity: 0.123324,
  },
};
