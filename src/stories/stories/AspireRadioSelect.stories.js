//AspireRadioSelect.stories.js
//Radio select variaiants

import AspireRadioSelect from "./AspireRadioSelect.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Radio Select",
  component: AspireRadioSelect,
  tags: ["autodocs"],
};

//Radio select variants and args needed to display them
//Simple Radio Select
export const Simple = {
  args: {
    label: "Simple Select",
    question: "Simple Select",
    isSelected: null,
  },
};

//Required Radio Select
export const Required = {
  args: {
    required: true,
    label: "Required Select",
    question: "Required Select",
    isSelected: null,
  },
};

//Radio Select with email input on 'Yes'
export const Email = {
  args: {
    email: true,
    label: "Select with Email",
    question: "Select with Email",
    isSelected: null,
    additionalInfo:"",
    placeholder: "Enter Email",
  },
};

//Radio Select with additional info text input on 'Yes'
export const withInfo = {
  args: {
    withInfo: true,
    label: "With Info Select",
    question: "Select with additional info",
    isSelected: null,
    additionalInfo:"",
    placeholder: "(Please enter more information)",
  },
};

//Radio Select with additional info text input on 'Yes' and validation
export const withInfoValidation = {
  args: {
    required: true,
    withInfo: true,
    label: "With Info and Validation Select",
    question:"Radio Select with additional info and validation",
    isSelected: null,
    additionalInfo:"",
    placeholder: "(Please enter more information)",
    error: true,
  }
}

//Radio Select with additional info text input on 'No'
export const withInfoNegative = {
  args: {
    infoNegative: true,
    label: "With Info on 'No' Select",
    question: "Select with additional info on 'No'",
    isSelected: null,
    additionalInfo:"",
    placeholder: "(Please enter more information)",
  },
};

//Radio Select with 2 additional info text inputs on 'Yes'
export const HiddenField = {
  args: {
    hiddenFields: true,
    label: "Select with hidden fields",
    question: "Select with hidden fields",
    isSelected: null,
    hidden1: "",
    hidden2: "",
    placeholder: "Input 1",
    placeholder2: "Input 2",
  },
};

//Radio Select with inputs for ems involvement on 'Yes'
export const emsInvolved = {
  args: {
    hiddenFields: true,
    label: "emsInvolved?",
    question: "EMS was Involved?",
    isSelected: null,
    emsCalled:"",
    transportedEMS:"",
    transportedEMSNotes:"",
  },
};

//Radio Select with date input on 'Yes'
export const infoWithDate = {
  args: {
    infoWithDate: true,
    label: "infoWithDate",
    question: "Select with date and additional info",
    isSelected: null,
    additionalInfo:"",
    value:"",
    placeholder: "(Please enter more information)",
  },
};
