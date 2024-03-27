//TopNavStories.ts
//Top Nav Component
import type { Meta, StoryObj } from "@storybook/svelte";

import TopNav from "./TopNav.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "TopNav",
  component: TopNav,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<TopNav>;

export default meta;
type Story = StoryObj<TopNav>;

//Top Nav variants and args needed to display them
export const Primary: Story = {
  args: {
    allCustomers: [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }],
    allCampuses: [
      { displayVal: "A Test Campus" },
      { displayVal: "Alexandria" },
      { displayVal: "Baxter" },
      { displayVal: "Belgrade" },
      { displayVal: "Billings" },
    ],
    allEvents: [
      { displayVal: "Martin Alwauysfalls" },
      { displayVal: "Jimmy Barron" },
      { displayVal: "Betty Boop" },
      { displayVal: "Robin Byrd" },
      { displayVal: "John Doe" },
    ],
  },
};
