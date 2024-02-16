import "../src/index.css";

/** @type { import('@storybook/svelte').Preview } */

const preview = {
  backgrounds:{
default: 'light'
  },
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
