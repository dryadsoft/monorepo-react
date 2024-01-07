import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
  title: "atoms/Flex",
  component: Flex,
  parameters: {
    layout: "full",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    justifyContent: { control: "radio" },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultFlex: Story = {
  args: {
    justifyContent: "start",
    children: (
      <>
        <div className="w-10 h-10 bg-red-400"></div>
        <div className="w-10 h-10 bg-red-400"></div>
        <div className="w-10 h-10 bg-red-400"></div>
        <div className="w-10 h-10 bg-red-400"></div>
      </>
    ),
  },
};
