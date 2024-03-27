//AspireDropdownSelect.stories.ts
//Aspire Dropdown Select Component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDropdownSelect from "./AspireDropdownSelect.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Dropdown Select",
  component: AspireDropdownSelect,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireDropdownSelect>;

export default meta;
type Story = StoryObj<AspireDropdownSelect>;

//Aspire Dropdown Select variants and args needed to display them
export const Default: Story = {
  args: {
    allOptions: [
      { displayVal: "Option 1" },
      { displayVal: "Option 2" },
      { displayVal: "Option 3" },
    ],
    
  },
};
