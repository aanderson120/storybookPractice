//AspireSwitch.stories.ts
//Switch component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireSwitch from "./AspireSwitch.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Switch",
  component: AspireSwitch,
  tags: ["autodocs"],
} satisfies Meta<AspireSwitch>;

export default meta;
type Story = StoryObj<AspireSwitch>;

//Default switch
export const Default: Story = {
  args: {
    label: "Default",
  },
};
