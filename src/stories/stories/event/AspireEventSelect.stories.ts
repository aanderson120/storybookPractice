//AspireEventSelect.stories.ts
//Event Select component story
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireEventSelect from "./AspireEventSelect.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Event Select",
  component: AspireEventSelect,
  tags: ["autodocs"],
} satisfies Meta<AspireEventSelect>;

export default meta;
type Story = StoryObj<AspireEventSelect>;

//Uses dummy data to display the component with storybook
export const Default: Story = {
  args: {
    label: "Select Event",
    atceventopenevents: [
      {
        EventSK: "6156445",
        ResidentSK: "4060123",
        ResidentLastName: "Barron",
        ResidentFirstName: "Jimmy",
        ResidentDOB: "01/01/1900",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
      },
      {
        EventSK: "6156451",
        ResidentSK: "2405",
        ResidentLastName: "Boop",
        ResidentFirstName: "Betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
      },
    ],
    selected: "6156445",
  },
};
