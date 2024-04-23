<script>
  //AspireDropdownList.svelte
  //Second layer for dropdown component. Has slot for menu ListItems
  export let scroll = false;
  export let backgroundColor = undefined;
  export let position = "";
  /**
   * @type {string} What background color to use
   */
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
  $: scrolling = scroll ? "scroll" : "";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul
  tabindex="0"
  class="
    dropdown-content
    menu
    bg-white
    w-max
    shadow
    {scrolling}"
  style="max-height: calc(100vh - 300px); {style} {position}"
>
  <slot />
</ul>

<style>
  .scroll {
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    width: 10px;
  }
  ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ul::-webkit-scrollbar-thumb {
    background-color: #cccaca;
    border-radius: 1rem;
  }
</style>
