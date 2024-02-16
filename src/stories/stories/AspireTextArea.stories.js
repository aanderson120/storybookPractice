//AspireTextArea.stories.js
//Text Area variants and possible configurations

import AspireTextArea from "./AspireTextArea.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Text Area",
  component: AspireTextArea,
  tags: ["autodocs"],
};

//Text Area variants and args needed to display them
export const TextArea = {
  args: {
    label: "Text Area",
    text:"",
    title: "textArea",
    placeholder: "Enter text here",
  },
};

export const Additional = {
  args: {
    label: "Additional Information",
    text:"",
    title: "additionalInformation",
    placeholder: "Enter text here to view additional text input",
  },
};
