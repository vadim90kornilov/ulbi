import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
