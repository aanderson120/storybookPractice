<script>
  import SideNavSubItem from "./SideNavSubItem.svelte";

  export let is_triage;

  let toggleRemoteMenu = "hidden";
</script>

{#if is_triage}
  <li>
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
        (toggleRemoteMenu = toggleRemoteMenu === "hidden" ? "block" : "hidden")}
      >X
      <!-- <MDBIcon
      slot="icon"
      class="
        mr-2 
        ml-1 
        text-gray-500 
        group-hover:text-gray-900 
        dark:group-hover:text-white"
      id="dropdowneventicon"
      fas
      icon="phone"
    /> -->
      <span
        class="
        text-black
        flex-1
        ms-3
        text-left
        rtl:text-right
        whitespace-nowrap
        hover:text-white">Remote Nursing</span
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
      class="{toggleRemoteMenu} 
        space-y-2
        p-1.5
        pl-6
        text-sm
        bg-[#e6e6e6]
        rounded-br
        rounded-bl"
    >
      <SideNavSubItem label="Handle Calls" link="/RemoteNursing/WorkingCall" />
      <SideNavSubItem label="Review Calls" link="/RemoteNursing/Review" />
    </ul>
  </li>
{/if}

<style>
  .d-flex {
    display: flex !important;
  }
</style>
