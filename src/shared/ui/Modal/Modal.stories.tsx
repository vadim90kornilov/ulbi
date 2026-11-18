import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "Text",
  },
};
