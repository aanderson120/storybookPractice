//AspireFormQuestion.stories.ts
//Question variaiants for event forms
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireFormQuestion from "./AspireFormQuestion.svelte";
//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Form Question",
  component: AspireFormQuestion,
  tags: ["autodocs"],
} satisfies Meta<AspireFormQuestion>;

export default meta;
type Story = StoryObj<AspireFormQuestion>;

//Question variants and args needed to display them
//Simple Radio Select Question
export const Default: Story = {
  args: {
    question: "Simple Radio Select",
    value: "",
    label: "",
  },
};

//Required Question
export const Required: Story = {
  args: {
    required: true,
    question: "Required Question",
    value: "",
    label: "",
  },
};

//Question with email input on 'Yes'
export const Email: Story = {
  args: {
    email: true,
    question: "Question with Email Input",
    additionalInfo: "",
    placeholder: "Enter Email",
    value: "",
    label: "",
  },
};

//Question with 1 text input on 'Yes'
export const withText: Story = {
  args: {
    withText: true,
    question: "Question with additional info",
    additionalInfo: "",
    placeholder: "(Please enter more information)",
  },
};

//Question with text input on 'Yes' and error validation
// (could use warning validation as well or instead)
export const withInfoValidation: Story = {
  args: {
    required: true,
    withText: true,
    question: "Question with additional info and validation",
    additionalInfo: "",
    placeholder: "Please enter more information",
    error: true,
    errorMessage: "There is an error",
  },
};

//Question with text input on 'No'
export const withInfoNegative: Story = {
  args: {
    infoNegative: true,
    question: "Question with text input on 'No'",
    additionalInfo: "",
    placeholder: "Please enter more information",
  },
};

//Question with 2 text inputs on 'Yes'
export const with2Inputs: Story = {
  args: {
    with2Inputs: true,
    question: "Question with two text inputs",
    input1: "",
    input2: "",
    placeholder: "Input 1",
    placeholder2: "Input 2",
  },
};

//Question with inputs for ems involvement on 'Yes'
export const emsInvolved: Story = {
  args: {
    question: "EMS was Involved?",
    label: "emsInvolved",
    emsCalled: null,
    transportedEMS: null,
    transportedEMSNotes: "",
  },
};

//Question with text and date inputs on 'Yes'
export const infoWithDate: Story = {
  args: {
    infoWithDate: true,
    question: "Question with text input and date input",
    additionalInfo: "",
    placeholder: "Please enter more information",
  },
};

//Question with text and date/time inputs on 'Yes'
export const infoWithDateTime: Story = {
  args: {
    infoWithDateTime: true,
    question: "Question with text and date/time inputs",
    additionalInfo: "",
    placeholder: "Please enter more information",
  },
};
