import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    rounded: { control: "radio" },
    placeholder: { control: "text" },
    placeholderSize: { control: "radio" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rounded: "md",
    placeholder: "입력하세요.",
    placeholderSize: "sm",
  },
};
