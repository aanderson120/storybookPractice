//AspireSideNav.stories.ts
//Story for AspireSideNav component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireSideNav from "./AspireSideNav.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Side Nav",
  component: AspireSideNav,
  tags: ["autodocs"],
} satisfies Meta<AspireSideNav>;

export default meta;
type Story = StoryObj<AspireSideNav>;

//AspireSideNav variants and args needed to display them
export const Default: Story = {
  args: {},
};
