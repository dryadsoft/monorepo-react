import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    textSize: { control: "radio" },
    rounded: { control: "radio" },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: "label",
    textSize: "xs",
    rounded: "md",
  },
};
