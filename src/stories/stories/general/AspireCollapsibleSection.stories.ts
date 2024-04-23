//AspireCollapsibleSection.stories.ts
//Story for the Collapsible Section component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireCollapsibleSection from "./AspireCollapsibleSection.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Collapsible Section",
  component: AspireCollapsibleSection,
  tags: ["autodocs"],
} satisfies Meta<AspireCollapsibleSection>;

export default meta;
type Story = StoryObj<AspireCollapsibleSection>;

//Collapsible Section variants and args needed to display them
export const DefaultCollapsed: Story = {
  args: {
    label: "Collapsible Section",
    story: true,
  },
};
export const DefaultExpanded: Story = {
  args: {
    label: "Collapsible Section",
    expanded: true,
    story: true,
  },
};
