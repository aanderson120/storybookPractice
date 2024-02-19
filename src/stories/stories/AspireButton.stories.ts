//AspireButton.stories.ts
//Has button variants and possible configurations
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireButton from "./AspireButton.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Button",
  component: AspireButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["icon", "small", "medium", "large", "full"],
    },
  },
} satisfies Meta<AspireButton>;

export default meta;
type Story = StoryObj<AspireButton>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
// Button variants and args needed to display them
export const Primary: Story = {
  args: {
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};
export const Transparent: Story = {
  args: {
    backgroundColor: "transparent",
    label: "Button",
    flat: true,
    border: true,
  },
};
export const Full: Story = {
  args: {
    size: "full",
    label: "Button",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    label: "#",
    flat: true,
    border: true,
  },
};
