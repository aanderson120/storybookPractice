//AspireButton.stories.js
//Has button variants and possible configurations

import AspireButton from "./AspireButton.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Button",
  component: AspireButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["icon", "small", "medium", "large", "full"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
// Button variants and args needed to display them
export const Primary = {
  args: {
    label: "Button",
  },
};
export const Secondary = {
  args: {
    primary: false,
    label: "Button",
  },
};
export const Transparent = {
  args: {
    backgroundColor: "transparent",
    label: "Button",
    flat: true,
    border: true,
  },
};
export const Full = {
  args: {
    size: "full",
    label: "Button",
  },
};
export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};
export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
};
export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Icon = {
  args: {
    size: "icon",
    label: "#",
    flat: true,
    border: true,
  },
};
