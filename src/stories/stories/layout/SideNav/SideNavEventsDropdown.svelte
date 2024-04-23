<script>
  import SideNavSubItem from "./SideNavSubItem.svelte";

  let toggleEventMenu = "hidden";
  let disabled = false;

  export let showTriage;
</script>

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
      (toggleEventMenu = toggleEventMenu === "hidden" ? "block" : "hidden")}
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
        icon="clipboard-list"
      /> -->
    <span
      class="
          text-black
          flex-1
          ms-3
          text-left
          rtl:text-right
          whitespace-nowrap
          hover:text-white">Events</span
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
    class="{toggleEventMenu} 
        space-y-2
        p-1.5
        pl-6
        text-sm
        bg-[#e6e6e6]
        rounded-br
        rounded-bl"
  >
    {#if !disabled}
      <SideNavSubItem label="Falls" link="/events/falls" />
      <SideNavSubItem
        label="Fall Reduction & Mitigation"
        link="/events/fallmitigation"
      />
      <SideNavSubItem
        label="Executive Director Review"
        link="/events/forreview"
      />
      <SideNavSubItem
        label="Suspected General Decline"
        link="/events/generaldecline"
      />
      {#if showTriage}
        <SideNavSubItem label="Falls" link="/events/falls" />
        <SideNavSubItem
          label="Fall Reduction & Mitigation"
          link="/events/fallmitigation"
        />
        <SideNavSubItem
          label="Executive Director Review"
          link="/events/forreview"
        />
        <SideNavSubItem
          label="Suspected General Decline"
          link="/events/generaldecline"
        />
        {#if showTriage}
          <SideNavSubItem
            label="Glucose/Diabetes Alerts"
            link="/events/glucose"
          />
        {/if}
        {#if showTriage}
          <SideNavSubItem label="CHF Management" link="/events/chf" />
          <SideNavSubItem label="Priority Review" link="/" />
        {/if}
        {#if showTriage}
          <SideNavSubItem label="Triage" link="/events/triage" />
        {/if}
        {#if showTriage}
          <SideNavSubItem label="Polypharmacy" link="/events/polypharmacy" />
        {/if}
      {/if}
    {/if}
    <SideNavSubItem label="Community Call Log" link="/RemoteNursing/Review" />
  </ul>
</li>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
