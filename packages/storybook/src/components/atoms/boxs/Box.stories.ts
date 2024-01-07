import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "atoms/Box",
  component: Box,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    rounded: { control: "radio" },
    shadow: { control: "radio" },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: `box`,
    rounded: "md",
    shadow: "md",
  },
};
