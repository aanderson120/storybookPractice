<script>
  //AspireDropdownListItem.svelte
  //Third layer for dropdown component. Has slot for menu items
  export let label="";
  export let size = "large";
  export let backgroundColor = undefined;
  /**
   * @type {string} What background color to use
   */
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
  /**
   * @type {'small' | 'medium' | 'large' } How large should the button be?
   */
</script>

<li class={["border-b", `${size}`].join(" ")} {style} on:click>
  <span class="active:bg-gray-100 text-black">
    {label}
    <slot />
  </span>
</li>
