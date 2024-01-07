import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

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
    options: [
      { key: "jp", value: "🇯🇵" },
      { key: "kr", value: "🇰🇷" },
    ],
  },
};
