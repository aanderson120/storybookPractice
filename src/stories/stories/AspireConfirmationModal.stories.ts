//AspireConfirmationModal.stories.ts
//Story for the Confirmation Modal component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireConfirmationModal from "./AspireConfirmationModal.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Confirmation Modal",
  component: AspireConfirmationModal,
  tags: ["autodocs"],
} satisfies Meta<AspireConfirmationModal>;

export default meta;
type Story = StoryObj<AspireConfirmationModal>;

//Confirmation Modal variants and args needed to display them
export const Default: Story = {
  args: {
    submitHandler: {},
    confirmationMessage: "Are you sure you want to do this?",
    loading: false,
    errors: {},
    successMessage: "",
  },
};
