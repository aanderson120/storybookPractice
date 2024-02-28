//AspireTheme.stories.ts
//Show visual of theme
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTheme from "./AspireTheme.svelte";

const meta = {
  title: "Aspire Theme",
  component: AspireTheme,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireTheme>;

export default meta;
type Story = StoryObj<AspireTheme>;

export const Light: Story = {
  args: {
    mode: "light",
  },
};

export const Dark: Story = {
  args: {
    mode: "dark",
  },
};
