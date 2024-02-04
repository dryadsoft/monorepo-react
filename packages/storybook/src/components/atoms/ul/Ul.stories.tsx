import { Meta, StoryObj } from "@storybook/react";
import { Ul } from "./Ul";
import { Li } from "../li/Li";

const meta = {
  title: "atoms/Ul",
  component: Ul,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Ul>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUl: Story = {
  args: {
    children: (
      <>
        <Li isSelected={true}>menu1</Li>
        <Li>menu1</Li>
        <Li>menu1</Li>
      </>
    ),
  },
};
