//AspireEmailInput.stories.ts
//Story for the Email Input component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireEmailInput from "./AspireEmailInput.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Email Input",
  component: AspireEmailInput,
  tags: ["autodocs"],
} satisfies Meta<AspireEmailInput>;

export default meta;
type Story = StoryObj<AspireEmailInput>;

//Email Input variants and args needed to display them
export const Default: Story = {
  args: {
    title: "Enter Email",
    value: "",
    hoverText: "The sender Email address.",
  },
};
