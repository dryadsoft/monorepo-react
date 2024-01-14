import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta = {
  title: "atoms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullLayout: Story = {
  args: {},
};
