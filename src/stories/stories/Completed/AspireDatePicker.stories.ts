//AspireDatePicker.stories.ts
//Date picker component story
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDatePicker from "./AspireDatePicker.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Date Picker",
  component: AspireDatePicker,
  tags: ["autodocs"],
} satisfies Meta<AspireDatePicker>;

export default meta;
type Story = StoryObj<AspireDatePicker>;

//Date Picker variants and args needed to display them
export const Default: Story = {
  args: {
    value: "",
    placeholder: "Select Date",
    size: 20,
  },
};
