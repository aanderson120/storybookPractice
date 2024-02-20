//AspireTooltip.stories.ts
//Tooltip variants based on positions
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTooltip from "./AspireTooltip.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Tooltip",
  component: AspireTooltip,
  tags: ["autodocs"],
} satisfies Meta<AspireTooltip>;

export default meta;
type Story = StoryObj<AspireTooltip>;

//Tooltip variants and args needed to display them
export const Default: Story = {
  args: {
    visability: true,
    tooltipText: "This is a warning",
    position: "top",
  },
};

export const Right: Story = {
  args: {
    visability: true,
    tooltipText: "This is a warning",
    position: "right",
  },
};

export const Bottom: Story = {
  args: {
    visability: true,
    tooltipText: "This is a warning",
    position: "bottom",
  },
};

export const Left: Story = {
  args: {
    visability: true,
    tooltipText: "This is a warning",
    position: "left",
  },
};
