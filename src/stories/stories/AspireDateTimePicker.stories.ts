//AspireDateTimePicker.stories.js
//Date/Time picker component story
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDateTimePicker from "./AspireDateTimePicker.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Date Time Picker",
  component: AspireDateTimePicker,
  tags: ["autodocs"],
} satisfies Meta<AspireDateTimePicker>;

export default meta;
type Story = StoryObj<AspireDateTimePicker>;

//Date/Time Picker variants and args needed to display them
export const Default: Story = {
  args: {
    placeholder: "Select Date and Time",
    size: 50,
    value: "",
  },
};
