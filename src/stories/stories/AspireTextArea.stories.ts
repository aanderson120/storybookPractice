//AspireTextArea.stories.ts
//Text Area variants and possible configurations
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTextArea from "./AspireTextArea.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Text Area",
  component: AspireTextArea,
  tags: ["autodocs"],
} satisfies Meta<AspireTextArea>;

export default meta;
type Story = StoryObj<AspireTextArea>;

//Text Area variants and args needed to display them
export const TextArea: Story = {
  args: {
    label: "Text Area",
    text: "",
    id: "textArea",
    placeholder: "Enter text here",
  },
};
