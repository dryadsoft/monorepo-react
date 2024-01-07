import { Meta, StoryObj } from "@storybook/react";
import { Icons } from "./Icons";

const meta = {
  title: "atoms/Icons",
  component: Icons,
  parameters: {
    layout: "centered",
    controls: { exclude: ["children", "className"] },
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "radio" },
    width: { control: "number" },
    height: { control: "number" },
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {
    name: "logo",
    className: "w-24",
  },
};
export const Cards: Story = {
  args: {
    name: "cards",
    width: 363,
    height: 32,
  },
};
export const CreditCard: Story = {
  args: {
    name: "creditCard",
    width: 32,
    height: 32,
  },
};
export const DepositCard: Story = {
  args: {
    name: "depositCard",
    width: 32,
    height: 32,
  },
};
export const Github: Story = {
  args: {
    name: "github",
    width: 32,
    height: 32,
  },
};
export const Logout: Story = {
  args: {
    name: "logout",
    width: 32,
    height: 32,
  },
};
export const User: Story = {
  args: {
    name: "user",
    width: 32,
    height: 32,
  },
};
export const Video: Story = {
  args: {
    name: "video",
    width: 32,
    height: 32,
  },
};
