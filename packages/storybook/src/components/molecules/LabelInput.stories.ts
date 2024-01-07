import { Meta, StoryObj } from "@storybook/react";
import { LabelInput } from "./LabelInput";

const meta = {
  title: "molecules/LabelInput",
  component: LabelInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof LabelInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "label",
  },
};
