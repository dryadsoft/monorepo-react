import { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

const meta = {
  title: "molecules/SelectBox",
  component: SelectBox,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
  },
} satisfies Meta<typeof SelectBox>;

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
