<script>
  import SideNavSubItem from "./SideNavSubItem.svelte";

  let toggleSupportMenu = "hidden";
</script>

<li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
  <button
    type="button"
    class="
        d-flex
        items-center
        w-full
        p-2
        text-base
        transition
        duration-75
        rounded-lg
        group
        hover:bg-[#9c7df7]
        hover:text-white
        focus:bg-[#9c7df7]
        dark:text-white
        focus:outline-none"
    aria-controls="dropdown-example"
    data-collapse-toggle="dropdown-example"
    on:click={() =>
      (toggleSupportMenu = toggleSupportMenu === "hidden" ? "block" : "hidden")}
  >
    ?
    <!-- <MDBIcon
      slot="icon"
      class="
        mr-2 
        ml-1 
        text-gray-500 
        group-hover:text-gray-900 
        dark:group-hover:text-white"
      id="dropdownusericon"
      fas
      icon="question"
    /> -->
    <span
      class="
        text-black
        flex-1
        ms-3
        text-left
        rtl:text-right
        whitespace-nowrap
        hover:text-white">Support</span
    >
    <svg
      class="
        w-3
        h-3
        text-gray-500
        group-hover:text-gray-900
        dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  <ul
    id="dropdown-example"
    class="{toggleSupportMenu} 
        space-y-2
        p-1.5
        pl-6
        text-sm
        bg-[#e6e6e6]
        rounded-br
        rounded-bl"
  >
    <SideNavSubItem
      label="Contact Support"
      link="https://sway.office.com/psh4RnIDqPjtX12c?ref=Link"
    />
    <SideNavSubItem label="FAQ" link="mailto:customersupport@aspireci.com" />
  </ul>
</li>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
