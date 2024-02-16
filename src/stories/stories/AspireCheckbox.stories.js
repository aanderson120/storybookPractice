//AspireCheckbox.stories.js
//Has checkbox variants and possible configurations

import AspireCheckbox from "./AspireCheckbox.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Event Checkbox",
  component: AspireCheckbox,
  tags: ["autodocs"],
};

//Checkbox variants and args needed to display them
export const Default = {
  args: {
    id: "checkbox",
    label: "Default Checkbox",
    name: false
  },
};

export const Required = {
  args: {
    required: true,
    label: "Required Checkbox",
    name: false
  },
};
