import type { Meta, StoryObj } from "@storybook/react";

import { SimplyLegend } from "./SimplyLegend";
import { getDataSet } from "../../lib/utils/mocks/charts/getDataSet";

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
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#efefef",
          width: "10rem",
          padding: "1rem",
          paddingRight: "50px",
          margin: 0,
          borderRadius: "0.5rem",
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
