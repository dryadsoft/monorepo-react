import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { Option } from "../option/Option";

const meta = {
  title: "atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Country: Story = {
  args: {
    children: (
      <>
        <Option code="1" text="test1" />
        <Option code="2" text="test2" />
      </>
    ),
  },
};
