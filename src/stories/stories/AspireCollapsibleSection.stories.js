//AspireCollapsibleSection.stories.js
//Story for the Collapsible Section component

import AspireCollapsibleSection from "./AspireCollapsibleSection.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Collapsible Section",
  component: AspireCollapsibleSection,
  tags: ["autodocs"],
};

//Collapsible Section variants and args needed to display them
export const CollapsibleSection = {
  args: {
    headerText: "Collapsible Section",
  },
};
