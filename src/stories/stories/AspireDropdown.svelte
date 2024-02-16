<script>
  //AspireDropdown.svelte
  //Top level for dropdown component. Has slots for icon and DropdownList
  export let label="";
  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<div class="dropdown dropdown-end">
  <div
    tabindex="0"
    class="btn m-1 content-center py-1.5 bg-transparent text-black"
    {style}
  >
    <slot name="icon" />
    <span class="hidden md:block mr-1 whitespace-normal">
      {label}
    </span>
    <span
      class="
        border-l
        p-2
        hover:bg-gray-100
        dropdown-toggle"
    />
  </div>
  <slot name="menuItems" />
</div>
