import AspireEmailInput from "./AspireEmailInput.svelte";

export default {
  title: "Email Input",
  component: AspireEmailInput,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Enter Email",
    value: "",
    hoverText: "The sender Email address.",
  },
};
