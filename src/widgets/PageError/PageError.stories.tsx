import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { PageError } from "./PageError";

const meta = {
  title: "widjet/PageError",
  component: PageError,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
