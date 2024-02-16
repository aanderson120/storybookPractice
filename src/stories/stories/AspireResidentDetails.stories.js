//AspireResidentDetails.stories.js
//Has resident details variants and possible configurations

import AspireResidentDetails from "./AspireResidentDetails.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Resident Details",
  component: AspireResidentDetails,
  tags: ["autodocs"],
};

//Resident details variants and args needed to display them
export const Default = {
  args: {
    residentId:"",
  },
};
