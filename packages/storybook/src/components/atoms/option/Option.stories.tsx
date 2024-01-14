import { Meta, StoryObj } from "@storybook/react";
import { Option } from "./Option";

const meta = {
  title: "atoms/Option",
  component: Option,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    code: { control: "text" },
    text: { control: "text" },
  },
} satisfies Meta<typeof Option>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOption: Story = {
  args: {
    code: "code",
    text: "text",
  },
};
