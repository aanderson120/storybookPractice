//AspireRadioSelect.stories.ts
//Radio select variaiants
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireRadioSelect from "./AspireRadioSelect.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Radio Select",
  component: AspireRadioSelect,
  tags: ["autodocs"],
} satisfies Meta<AspireRadioSelect>;

export default meta;
type Story = StoryObj<AspireRadioSelect>;

//Radio select variants and args needed to display them
//Simple Radio Select
export const Simple: Story = {
  args: {
    question: "Simple Select",
    value: null,
  },
};

//Required Radio Select
export const Required: Story = {
  args: {
    required: true,
    question: "Required Select",
    value: null,
  },
};

//Radio Select with email input on 'Yes'
export const Email: Story = {
  args: {
    email: true,
    question: "Select with Email",
    value: null,
    additionalInfo: "",
    placeholder: "Enter Email",
  },
};

//Radio Select with additional info text input on 'Yes'
export const withInfo: Story = {
  args: {
    withInfo: true,
    question: "Select with additional info",
    value: null,
    additionalInfo: "",
    placeholder: "(Please enter more information)",
  },
};

//Radio Select with additional info text input on 'Yes' and validation
export const withInfoValidation: Story = {
  args: {
    required: true,
    withInfo: true,
    question: "Radio Select with additional info and validation",
    value: null,
    additionalInfo: "",
    placeholder: "(Please enter more information)",
    error: true,
  },
};

//Radio Select with additional info text input on 'No'
export const withInfoNegative: Story = {
  args: {
    infoNegative: true,
    question: "Select with additional info on 'No'",
    value: null,
    additionalInfo: "",
    placeholder: "(Please enter more information)",
  },
};

//Radio Select with 2 additional info text inputs on 'Yes'
export const HiddenField: Story = {
  args: {
    hiddenFields: true,
    question: "Select with hidden fields",
    value: null,
    hidden1: "",
    hidden2: "",
    placeholder: "Input 1",
    placeholder2: "Input 2",
  },
};

//Radio Select with inputs for ems involvement on 'Yes'
export const emsInvolved: Story = {
  args: {
    question: "EMS was Involved?",
    label: "emsInvolved",
    value: null,
    emsCalled: null,
    transportedEMS: null,
    transportedEMSNotes: "",
  },
};

//Radio Select with date input on 'Yes'
export const infoWithDate: Story = {
  args: {
    infoWithDate: true,
    question: "Select with date and additional info",
    value: null,
    additionalInfo: "",
    placeholder: "(Please enter more information)",
  },
};
