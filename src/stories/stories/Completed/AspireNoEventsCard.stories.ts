//AspireNoEventsCard.stories.ts
//Show visual of AspireNoEventsCard
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireNoEventCard from "./AspireNoEventCard.svelte";
const meta = {
  title: "No Events Card",
  component: AspireNoEventCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireNoEventCard>;

export default meta;
type Story = StoryObj<AspireNoEventCard>;

export const Default: Story = {
  args: {
    CampusName: "A Test Campus",
    event: "Falls",
  },
};
