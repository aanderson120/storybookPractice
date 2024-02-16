//AspireDateTimePicker.stories.js
//Date/Time picker component story

import AspireDateTimePicker from "./AspireDateTimePicker.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Date Time Picker",
  component: AspireDateTimePicker,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    id: "selectDateTime",
    label: "Select Date and Time",
    dateTimeValue: "",
  },
};
