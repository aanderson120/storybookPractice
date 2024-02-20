//AspireResidentDetails.stories.ts
//Has resident details variants and possible configurations
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireResidentDetails from "./AspireResidentDetails.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Resident Details",
  component: AspireResidentDetails,
  tags: ["autodocs"],
} satisfies Meta<AspireResidentDetails>;

export default meta;
type Story = StoryObj<AspireResidentDetails>;

//Resident details variants and args needed to display them
export const Default: Story = {
  args: {
    residentId: "",
  },
};
