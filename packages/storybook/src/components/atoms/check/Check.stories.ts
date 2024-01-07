import { Meta, StoryObj } from "@storybook/react";
import { Check } from "./Check";

const meta = {
  title: "atoms/Check",
  component: Check,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBox: Story = {
  args: {
    id: "abcd",
    label: "checkbox",
  },
};
