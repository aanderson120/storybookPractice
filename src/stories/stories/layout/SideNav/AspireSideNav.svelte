<script>
  // SideNav.svelte
  // Part of every page like Nav.svelte
  //   import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  import SideNavListItem from "./SideNavListItemButton.svelte";
  import SideNavEventsDropdown from "./SideNavEventsDropdown.svelte";
  import SideNavDocDropdown from "./SideNavDocDropdown.svelte";
  import SideNavRemoteNuring from "./SideNavRemoteNuring.svelte";
  import SideNavListItemButton from "./SideNavListItemButton.svelte";
  import SideNavSupportDropdown from "./SideNavSupportDropdown.svelte";

  //   import NestedMenu from "./NestedMenu.svelte";

  let toggleSupportMenu = "hidden";

  let disabled = false;
  let logout = () => {};
  let is_triage = true;
  // let is_triage = $session.user ? $session.user.is_triage : false;
  // let is_superuser = $session.user ? $session.user.is_superuser : false;

  // $: if ($customer) {
  //   if ($customer === "PSLO" || $customer === "Diamond") {
  //     disabled = true;
  //   } else {
  //     disabled = false;
  //   }
  // }

  let campus = "A Test Campus";
  // This code looks incorrect.  The reference to location refers to Window.location and I think it should
  // be the campus name.
  let showTriage =
    is_triage &&
    (campus === "Edgewood Fargo" ||
      campus === "Edgewood Hermantown - Assisted Living" ||
      campus === "Edgewood Hermantown - Memory Care")
      ? true
      : false;
</script>

<!-- <NestedMenu /> -->

<aside
  id="default-sidebar"
  class="
    fixed
    top-0
    left-0
    z-40
    w-64
    h-[calc(120dvh)]
    transition-transform -translate-x-full
    sm:translate-x-0"
  aria-label="Sidebar"
>
  <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
    <a href="/" class="logo-wrapper waves-effect max-w-[200px]">
      <img
        alt="Aspire Logo"
        class="img-fluid !w-[200px] !h-[80px]"
        src="https://th.bing.com/th/id/OIP.WV2__AG0EMxrBhZ0S8tH9AHaC9?rs=1&pid=ImgDetMain"
      />
    </a>
    <ul class="fixed top-44 space-y-2 font-medium w-11/12">
      <div class="max-h-[700px] scroll">
        <SideNavListItem label="Dashboard" link="/">
          <svg
            class="
              w-5
              h-5
              mr-2
              ml-1
              text-gray-500
              transition
              duration-75
              dark:text-gray-400
              group-hover:text-gray-900
              dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path
              d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
            />
            <path
              d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
            />
          </svg>
        </SideNavListItem>
        <!-- <li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
          <a
            href="/"
            class="
              d-flex
              items-center
              w-full
              p-2
              transition
              duration-75
              group
              dark:text-white"
          >
            <svg
              class="
                w-5
                h-5
                mr-2
                ml-1
                text-gray-500
                transition
                duration-75
                dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span
              class="
                text-black
                flex-1
                ms-3
                text-left
                rtl:text-right
                whitespace-nowrap
                font-normal
                hover:text-white">Dashboard</span
            >
          </a>
        </li> -->
        <SideNavEventsDropdown {showTriage} />
        {#if !disabled}
          <SideNavDocDropdown />
        {/if}

        <SideNavRemoteNuring {is_triage} />
        <SideNavListItem label="Residents" link="/residents">
          X
          <!-- <MDBIcon
            class="
              mr-2 
              ml-1 
              text-gray-500 
              group-hover:text-gray-900 
              dark:group-hover:text-white"
            id="dropdownresidenticon"
            icon="home"
          /> -->
        </SideNavListItem>
        <!-- {#if is_superuser} -->
        <SideNavListItemButton label="DBUTIL" link="/dbutil"
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
              icon="tools"
          /> -->
        </SideNavListItemButton>
        <!-- {/if} -->
        <SideNavSupportDropdown />
      </div>
      <li class="fixed bottom-11 left-0 m-2 mr-4" style="width:inherit">
        <button
          on:click={logout}
          class="
            d-flex
            items-center
            w-full
            p-2
            transition
            duration-75
            group
            dark:text-white
            hover:bg-[#9c7df7]
            focus:bg-[#9c7df7]
            rounded-lg"
        >
          <svg
            class="
              w-5
              h-5
              mr-2
              ml-1
              text-gray-500
              transition
              duration-75
              dark:text-gray-400
              group-hover:text-gray-900
              dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
          </svg>
          <span
            class="
              text-black
              flex-1
              ms-3
              text-left
              rtl:text-right
              whitespace-nowrap
              font-normal
              hover:text-white">Log Out</span
          >
        </button>
      </li>
    </ul>
  </div>
</aside>

<style>
  .scroll {
    overflow-y: auto;
  }
  .scroll::-webkit-scrollbar {
    width: 10px;
  }

  .scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #cccaca;
    border-radius: 1rem;
  }
  .d-flex {
    display: flex !important;
  }
</style>
