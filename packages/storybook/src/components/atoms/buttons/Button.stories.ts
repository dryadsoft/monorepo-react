import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "radio" },
    bgHover: { control: "radio" },
    labelColor: { control: "radio" },
    labelSize: { control: "radio" },
    label: { control: "text" },
    rounded: { control: "radio" },
    isLoading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bgColor: "primary",
    bgHover: "primary",
    labelColor: "primary",
    labelSize: "lg",
    label: "primary",
    rounded: "md",
    isLoading: false,
  },
};
export const Secondary: Story = {
  args: {
    bgColor: "secondary",
    bgHover: "secondary",
    labelColor: "secondary",
    labelSize: "lg",
    label: "secondary",
    rounded: "md",
    isLoading: false,
  },
};
export const ActionPrimary: Story = {
  args: {
    bgColor: "actionPrimary",
    bgHover: "actionPrimary",
    labelColor: "primary",
    labelSize: "lg",
    label: "ActionPrimary",
    rounded: "full",
    isLoading: false,
  },
};
export const ActionSecondary: Story = {
  args: {
    bgColor: "actionSecondary",
    bgHover: "actionSecondary",
    labelColor: "secondary",
    labelSize: "lg",
    label: "ActionSecondary",
    rounded: "full",
    isLoading: false,
  },
};
