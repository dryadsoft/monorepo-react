import { Meta, StoryObj } from "@storybook/react";
import { UlList } from "./UlList";

const meta = {
  title: "molecules/UlList",
  component: UlList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UlList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUlList: Story = {
  args: {
    list: [
      { text: "test1" },
      { text: "test2", isSelected: true },
      { text: "test3" },
    ],
  },
};
