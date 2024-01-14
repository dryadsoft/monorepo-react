import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import { Box } from "../boxs/Box";

const meta = {
  title: "atoms/Flex",
  component: Flex,
  parameters: {
    layout: "full",
    controls: { exclude: ["children", "className"], sort: "alpha" },
  },
  tags: ["autodocs"],
  argTypes: {
    justifyContent: { control: "radio" },
    alignItems: { control: "radio" },
    rounded: { control: "radio" },
    bgColor: { control: "radio" },
    shadow: { control: "radio" },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultFlex: Story = {
  args: {
    justifyContent: "start",
    alignItems: "center",
    rounded: "none",
    shadow: "none",
    bgColor: "gray",
    children: (
      <>
        <Box>test</Box>
        <Box>test</Box>
        <Box>test</Box>
      </>
    ),
  },
};
