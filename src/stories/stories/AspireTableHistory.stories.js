import AspireTableHistory from "./AspireTableHistory.svelte";

export default {
  title: "Table History",
  component: AspireTableHistory,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    historyType: "",
    reading: "Reading",
    vitalHistory: [],
  },
};

export const BloodSugars = {
  args: {
    historyType: "bloodSugars",
    reading: "Reading",
    vitalHistory: [],
  },
};

export const BloodPressures = {
  args: {
    historyType: "bloodPressures",
    reading: "BP",
    vitalHistory: [],
  },
};

export const Falls = {
  args: {
    historyType: "falls",
    reading: "",
    vitalHistory: [],
  },
};

export const Weights = {
  args: {
    historyType: "weights",
    reading: "Weight",
    vitalHistory: [],
  },
};
