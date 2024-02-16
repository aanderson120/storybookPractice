//AspireHeader.stories.js
//Header variants

import AspireHeader from "./AspireHeader.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Header",
  component: AspireHeader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

//Header variants and args needed to display them
export const Primary = {
  args: {
    label: "Header",
    primary: true,
  },
};
export const Secondary = {
  args: {
    label: "Header",
  },
};
export const Transparent = {
  args: {
    backgroundColor: "transparent",
    label: "Header",
  },
};
