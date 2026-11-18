import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};

export const Size_L: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const Size_Xl: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
  },
};
