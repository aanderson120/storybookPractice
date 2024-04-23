//AspireLocalSave.stories.ts
//Aspire Local Save Component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireLocalSave from "./AspireLocalSave.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Local Save",
  component: AspireLocalSave,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireLocalSave>;

export default meta;
type Story = StoryObj<AspireLocalSave>;

//Args for local save component
export const default_: Story = {
  args: {
    selectedEvent: {},
  },
};
