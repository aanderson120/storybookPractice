<script>
  //SideNavListItem.svelte
  //Reusable li component for side nav
  export let label = "";
  export let link = "";
</script>

<li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
  <a
    href={link}
    class="
        d-flex
        items-center
        w-full
        p-2
        transition
        duration-75
        group
        dark:text-white"
    ><slot />
    <span
      class="
        text-black
        flex-1
        ms-3
        text-left
        rtl:text-right
        whitespace-nowrap
        font-normal
        hover:text-white">{label}</span
    >
  </a>
</li>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
