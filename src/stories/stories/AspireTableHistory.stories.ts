//AspireTableHistory.stories.ts
//Stories for AspireTableHistory.svelte
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireTableHistory from "./AspireTableHistory.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Table History",
  component: AspireTableHistory,
  tags: ["autodocs"],
} satisfies Meta<AspireTableHistory>;

export default meta;
type Story = StoryObj<AspireTableHistory>;

//Table History variants and args needed to display them
export const Default: Story = {
  args: {
    historyType: "",
    reading: "Reading",
    vitalsHistory: [],
  },
};

export const BloodSugars: Story = {
  args: {
    historyType: "bloodSugars",
    reading: "Reading",
    vitalsHistory: [
      {
        Created: "2022-09-26T22:48:00.730000Z",
        Value: "90",
      },
      {
        Created: "2022-07-27T03:51:17.577000Z",
        Value: "100",
      },
    ],
  },
};

export const BloodPressures: Story = {
  args: {
    historyType: "bloodPressures",
    reading: "BP",
    vitalsHistory: [
      {
        Created: "2024-02-17T22:33:00Z",
        Value: "188",
      },
      {
        Created: "2024-02-14T20:35:00Z",
        Value: "170",
      },
    ],
  },
};

export const Falls: Story = {
  args: {
    historyType: "falls",
    reading: "",
    vitalsHistory: [
      { Created: "2024-01-02T02:00:00Z", Value: "" },
      { Created: "2023-11-29T02:00:00Z", Value: "" },
    ],
  },
};

export const Weights: Story = {
  args: {
    historyType: "weights",
    reading: "Weight",
    vitalsHistory: [
      { Created: "Fri, Jan 26, 2024", Value: "120" },
      { Created: "Fri, Dec 01, 2023", Value: "125" },
    ],
  },
};
