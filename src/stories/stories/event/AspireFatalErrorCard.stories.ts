//AspireFatalErrorCard.stories.ts
//Show visual of AspireFatalErrorCard
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireFatalErrorCard from "./AspireFatalErrorCard.svelte";

const meta = {
  title: "Fatal Error Card",
  component: AspireFatalErrorCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireFatalErrorCard>;

export default meta;
type Story = StoryObj<AspireFatalErrorCard>;

export const Default: Story = {
  args: {
    ErrMsg$FatalErrorOnPage: "Fatal Error on Page",
  },
};
