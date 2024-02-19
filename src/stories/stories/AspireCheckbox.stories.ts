//AspireCheckbox.stories.ts
//Has checkbox variants and possible configurations
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireCheckbox from "./AspireCheckbox.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Checkbox",
  component: AspireCheckbox,
  tags: ["autodocs"],
} satisfies Meta<AspireCheckbox>;

export default meta;
type Story = StoryObj<AspireCheckbox>;

//Checkbox variants and args needed to display them
export const Default: Story = {
  args: {
    id: "checkbox",
    label: "Default Checkbox",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Required Checkbox",
  },
};
