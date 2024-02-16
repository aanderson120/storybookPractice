//AspireTooltip.stories.js
//Tooltip variants based on positions
import AspireTooltip from "./AspireTooltip.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Tooltip",
  component: AspireTooltip,
  tags: ["autodocs"],
};

//Tooltip variants and args needed to display them
export const Default = {
  args: {
    label: "Default Tooltip",
    visability: true,
    tooltipText: "This is a warning",
    position: "top",
    symbol: "!",
  },
};

export const Right = {
  args: {
    label: "Right Tooltip",
    visability: true,
    tooltipText: "This is a warning",
    position: "right",
    symbol: "!",
  },
};

export const Bottom = {
  args: {
    label: "Bottom Tooltip",
    visability: true,
    tooltipText: "This is a warning",
    position: "bottom",
    symbol: "!",
  },
};

export const Left = {
  args: {
    label: "Left Tooltip",
    warning: true,
    tooltipText: "This is a warning",
    position: "left",
    symbol: "!",
  },
};
