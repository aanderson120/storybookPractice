//AspireRadioSelect.stories.ts
//Radio select variaiants
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireRadioSelect from "./AspireRadioSelect.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Radio Select",
  component: AspireRadioSelect,
  tags: ["autodocs"],
} satisfies Meta<AspireRadioSelect>;

export default meta;
type Story = StoryObj<AspireRadioSelect>;

//Radio select variants and args needed to display them
//Simple Radio Select
export const Default: Story = {
  args: {
    label: "Radio Select",
    id: "Radio Select",
    items: [
      { name: "Prompt 1", value: "true" },
      { name: "Prompt 2", value: "false"},
    ],
    direction: "row",
  },
};

export const Column: Story = {
  args: {
    label: "Radio Select",
    id: "Radio Select",
    items: [
      { name: "Prompt 1", value: "true"},
      { name: "Prompt 2", value: "false"},
    ],
    direction: "col",
  },
};
