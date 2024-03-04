//AspireEvent.stories.ts
//Component for event layout
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireEvent from "./AspireEvent.svelte";
const meta = {
  title: "Event",
  component: AspireEvent,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireEvent>;

export default meta;
type Story = StoryObj<AspireEvent>;

export const Falls: Story = {
  args: {
    event: "Falls",
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
        ResidentFirstName: "betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
      },
    ],
    selected: "",
    increasedSusceptibility: "",
    susceptibilityInterventions: "",
    additionalEventInfo: "",
    additionalInterventions: "",
    selectedEvent: {},
  },
};
