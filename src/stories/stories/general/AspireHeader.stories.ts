//AspireHeader.stories.ts
//Header variants
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireHeader from "./AspireHeader.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Header",
  component: AspireHeader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<AspireHeader>;

export default meta;
type Story = StoryObj<AspireHeader>;

//Header variants and args needed to display them
export const Primary: Story = {
  args: {
    label: "Header",
  },
};
export const Secondary: Story = {
  args: {
    label: "Header",
    primary: false,
  },
};
export const Transparent: Story = {
  args: {
    backgroundColor: "transparent",
    label: "Header",
  },
};
