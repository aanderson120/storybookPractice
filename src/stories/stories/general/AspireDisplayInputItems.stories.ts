//AspireDisplayInputItems.stories.ts
//Has display input items variants and possible configurations

import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDisplayInputItems from "./AspireDisplayInputItems.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Display Input Items",
  component: AspireDisplayInputItems,
  tags: ["autodocs"],
} satisfies Meta<AspireDisplayInputItems>;

export default meta;
type Story = StoryObj<AspireDisplayInputItems>;

//Display input items variants and args needed to display them
export const CheckboxInputs: Story = {
  args: {
    itemSet: [
      {
        id: "1",
        promptText: "Prompt 1",
        formType: "checkBox",
        value: false,
      },
      {
        id: "2",
        promptText: "Prompt 2",
        formType: "checkBox",
        value: false,
      },
    ],
  },
};

export const TextInputs: Story = {
  args: {
    itemSet: [
      {
        id: "1",
        promptText: "Prompt 1",
        formType: "textInput",
        value: "",
      },
      {
        id: "2",
        promptText: "Prompt 2",
        formType: "textInput",
        value: "",
      },
    ],
  },
};
