import type { Meta, StoryObj } from "@storybook/react";

import { SimplyDonut } from "./SimplyDonut";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SimplyDonut",
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

const data = [
  { name: "test", value: 10, color: "#43cd08" },
  { name: "test2", value: 23, color: "#2ec4f1" },
  { name: "test3", value: 23, color: "#0705cc" },
  { name: "test2", value: 23, color: "#ff08cc" },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    data: data,
    size: "md",
    inset: {
      color: "#ececf5",
      size: 10,
    },
  },
};
