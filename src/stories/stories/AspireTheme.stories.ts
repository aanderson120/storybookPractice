//AspireTheme.stories.ts
//Show visual of theme
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTheme from "./AspireTheme.svelte";

const meta = {
  title: "AspireTheme",
  component: AspireTheme,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireTheme>;

export default meta;
type Story = StoryObj<AspireTheme>;

export const Primary: Story = {
  args: {
    label: "223FAB",
    theme: "primary",
  },
};
export const Secondary: Story = {
    args: {
      label: "6600CC",
      theme: "secondary",
    },
  };

export const Accent: Story = {
  args: {
    label: "22AB7A",
    theme: "accent",
  },
};

export const Neutral: Story = {
  args: {
    label: "E6E6E6",
    theme: "neutral",
  },
};

export const Base100: Story = {
  args: {
    label: "F3F3F3",
    theme: "base-100",
  },
};

export const Info: Story = {
  args: {
    label: "0078A8",
    theme: "info",
  },
};

export const Success: Story = {
  args: {
    label: "539B4B",
    theme: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "B38000",
    theme: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "D42142",
    theme: "error",
  },
};
