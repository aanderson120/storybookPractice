//AspireCard.stories.ts
//Card component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireCard from "./AspireCard.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Card",
  component: AspireCard,
  tags: ["autodocs"],
} satisfies Meta<AspireCard>;

export default meta;
type Story = StoryObj<AspireCard>;

//Card args needed to display
export const Card: Story = {
  args: { story: true },
};

export const HalfCard: Story = {
  args: {
    size: "md:w-[48%]",
    story: true,
  },
};

export const ResidentCard: Story = {
  args: {
    asideCard: true,
    story: true,
  },
};
