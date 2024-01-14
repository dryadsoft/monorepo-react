import { Meta, StoryObj } from "@storybook/react";
import { Span } from "./Span";

const meta = {
  title: "atoms/Span",
  component: Span,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    textSize: { control: "radio" },
  },
} satisfies Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSpan: Story = {
  args: {
    textSize: "base",
    children: "test",
  },
};
