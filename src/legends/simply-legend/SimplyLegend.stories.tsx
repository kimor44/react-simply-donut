import type { Meta, StoryObj } from "@storybook/react";

import { SimplyLegend } from "./SimplyLegend";
import { getDataSet } from "../../lib/utils/mocks/charts/getDataSet";
import React from "react";

const meta = {
  title: "Legends/SimplyLegend",
  component: SimplyLegend,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimplyLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: getDataSet,
    showPercentage: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#efefef",
          width: "15rem",
          padding: "1rem",
          paddingRight: "50px",
          margin: 0,
          borderRadius: "0.5rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
