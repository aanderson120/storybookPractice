//AspireTextInput.stories.js
//Text input variants and possible configurations

import VitalInput from "./VitalInput.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Vital Input",
  component: VitalInput,
  tags: ["autodocs"],
};

//Text input variants and args needed to display them
//Simple text input
export const Default = {
  args: {
    label: "Default Input",
    text: "",
    placeholder: "Default Input",
  },
};

//Text input that checks for errors and warnings
export const Valdiation = {
  args: {
    required: true,
    label: "Validation Input",
    text: "",
    placeholder: "Input with validation",
    withTooltip: true,
    hasWarning: true,
    hasError: true,
    errorMessage: "This is an error message.",
    warningMessage: "This is a warning message.",
  },
};

//Text input with tooltip to show error or warning messages
export const withTooltip = {
  args: {
    label: "Input with Tooltip",
    text: "",
    placeholder: "",
    warning: true,
    error: true,
    errorMessage: "There is an error",
    warningMessage: "This is a warning",
  },
};
