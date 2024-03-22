//AspireTextInput.stories.ts
//Text input variants
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTextInput from "./AspireTextInput.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Text Input",
  component: AspireTextInput,
  tags: ["autodocs"],
  args: { value: "" },
} satisfies Meta<AspireTextInput>;

export default meta;
type Story = StoryObj<AspireTextInput>;

//Default text input
export const Default: Story = {
  args: {
    placeholder: "Default",
    size: 50,
  },
};

//Text input with validation
export const Validation: Story = {
  args: {
    required: true,
    placeholder: "Validation",
    withTooltip: true,
    hasError: true,
    hasWarning: true,
    errorMessage: "There is an error",
    warningMessage: "There is a warning",
    size: 50,
  },
};

//Shows error on input
export const Error: Story = {
  args: {
    placeholder: "There is an error",
    withTooltip: true,
    hasError: true,
    errorMessage: "There is an error",
    size: 50,
  },
};

//Shows warnings on input
export const Warning: Story = {
  args: {
    placeholder: "There is a warning",
    withTooltip: true,
    hasWarning: true,
    warningMessage: "There is a warning",
    size: 50,
  },
};
