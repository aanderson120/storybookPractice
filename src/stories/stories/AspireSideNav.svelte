<script>
  // SideNav.svelte
  // Part of every page like Nav.svelte
  //   import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  //   import NestedMenu from "./NestedMenu.svelte";

  let toggleEventMenu = "hidden";
  let toggleRemoteMenu = "hidden";
  let toggleSupportMenu = "hidden";
  let toggleEventDocMenu = "hidden";

  let disabled = false;
  let logout = () => {};
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
        <li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
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
        </li>
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
              (toggleEventMenu =
                toggleEventMenu === "hidden" ? "block" : "hidden")}
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
              <li class="contents m-1">
                <a
                  href="/events/falls"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Falls
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/fallmitigation"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Fall Reduction & Mitigation
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/forreview"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Executive Director Review
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/generaldecline"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Suspected General Decline
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-[#D42142]
                 rounded-full">6</span
                >
                <span
                  class="
                 invisible
                 group-hover:!visible
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-success
                 rounded-full">6</span
                > -->
                </a>
              </li>
              <!-- {#if showTriage} -->
              <li class="contents m-1">
                <a
                  href="/events/falls"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Falls
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#ff0000]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/fallmitigation"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Fall Reduction & Mitigation
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#ff0000]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/forreview"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Executive Director Review
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#ff0000]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/events/generaldecline"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Suspected General Decline
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-[#D42142]
                 rounded-full">6</span
                >
                <span
                  class="
                 invisible
                 group-hover:!visible
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-success
                 rounded-full">6</span
                > -->
                </a>
              </li>
              <!-- {#if showTriage} -->
              <li class="contents m-1">
                <a
                  href="/events/glucose"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Glucose/Diabetes Alerts
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-[#ff0000]
                 rounded-full">6</span
                >
                <span
                  class="
                 invisible
                 group-hover:!visible
                 absolute
                 right-2
                 inline-flex
                 items-center
                 justify-center
                 w-2
                 h-2
                 p-2
                 ms-2
                 text-sm
                 text-white
                 bg-success
                 rounded-full">6</span
                > -->
                </a>
              </li>
              <!-- {/if}
                {#if showTriage} -->
              <li class="contents m-1">
                <a
                  href="/events/chf"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >CHF Management
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <li class="contents m-1">
                <a
                  href="/"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Priority Review
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <!-- {/if}
                {#if showTriage} -->
              <li class="contents m-1">
                <a
                  href="/events/triage"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Triage
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
              <!-- {/if}
                {#if showTriage} -->
              <li class="contents m-1">
                <a
                  href="/events/polypharmacy"
                  class="
                  group-hover:!visible
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white"
                  >Polypharmacy
                  <!-- TODO: Connect to event tasks 
                <span
                  class="
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-[#D42142]
                    rounded-full">6</span
                >
                <span
                  class="
                    invisible
                    group-hover:!visible
                    absolute
                    right-2
                    inline-flex
                    items-center
                    justify-center
                    w-2
                    h-2
                    p-2
                    ms-2
                    text-sm
                    text-white
                    bg-success
                    rounded-full">6</span
                > -->
                </a>
              </li>
            {/if}
            <!-- {/if}
            {/if} -->
            <li class="contents m-1">
              <a
                href="/RemoteNursing/Review"
                class="
                group-hover:!visible
                text-black
                d-flex
                items-center
                w-full
                p-2
                transition
                duration-75
                rounded-lg
                group
                hover:bg-[#838383]
                font-normal
                hover:text-white"
                >Community Call Log
                <!-- TODO: Connect to event tasks 
              <span
                class="
                  absolute
                  right-2
                  inline-flex
                  items-center
                  justify-center
                  w-2
                  h-2
                  p-2
                  ms-2
                  text-sm
                  text-white
                  bg-[#D42142]
                  rounded-full">6</span
              >
              <span
                class="
                  invisible
                  group-hover:!visible
                  absolute
                  right-2
                  inline-flex
                  items-center
                  justify-center
                  w-2
                  h-2
                  p-2
                  ms-2
                  text-sm
                  text-white
                  bg-success
                  rounded-full">6</span
              > -->
              </a>
            </li>
          </ul>
        </li>
        {#if !disabled}
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
                (toggleEventDocMenu =
                  toggleEventDocMenu === "hidden" ? "block" : "hidden")}
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
                far
                icon="file"
              /> -->
              <span
                class="
                text-black
                flex-1
                ms-3
                text-left
                rtl:text-right
                whitespace-nowrap
                hover:text-white">Event Documentation</span
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
              class="{toggleEventDocMenu} 
              space-y-2
              p-1.5
              pl-6
              text-sm
              bg-[#e6e6e6]
              rounded-br
              rounded-bl"
            >
              <li class="contents m-1">
                <a
                  href="/documentation/falls"
                  class="
              text-black
              d-flex
              items-center
              w-full
              p-2
              transition
              duration-75
              rounded-lg
              group
              hover:bg-[#838383]
              font-normal
              hover:text-white">Falls</a
                >
              </li>
              <li class="contents m-1">
                <a
                  href="/documentation/fallswithedreview"
                  class="
              text-black
              d-flex
              items-center
              w-full
              p-2
              transition
              duration-75
              rounded-lg
              group
              hover:bg-[#838383]
              font-normal
              hover:text-white">Falls With Director Review</a
                >
              </li>
            </ul>
          </li>
        {/if}

        <!-- {#if is_triage} -->
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
              (toggleRemoteMenu =
                toggleRemoteMenu === "hidden" ? "block" : "hidden")}
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
            <li class="contents m-1">
              <a
                href="/RemoteNursing/WorkingCall"
                class="
                    text-black
                    d-flex
                    items-center
                    w-full
                    p-2
                    transition
                    duration-75
                    rounded-lg
                    group
                    hover:bg-[#838383]
                    font-normal
                    hover:text-white">Handle Calls</a
              >
            </li>
            <li class="contents m-1">
              <a
                href="/RemoteNursing/Review"
                class="
                    text-black
                    d-flex
                    items-center
                    w-full
                    p-2
                    transition
                    duration-75
                    rounded-lg
                    group
                    hover:bg-[#838383]
                    font-normal
                    hover:text-white">Review Calls</a
              >
            </li>
          </ul>
        </li>
        <!-- {/if} -->
        <li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
          <a
            href="/residents"
            class="
              d-flex
              items-center
              w-full
              p-2
              transition
              duration-75
              group
              dark:text-white"
            >X
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
            <span
              class="
                text-black
                flex-1
                ms-3
                text-left
                rtl:text-right
                whitespace-nowrap
                font-normal
                hover:text-white">Residents</span
            >
          </a>
        </li>
        <!-- {#if is_superuser} -->
        <li class="hover:bg-[#9c7df7] focus:bg-[#9c7df7] rounded-lg">
          <a
            href="/dbutil/"
            class="
              d-flex
              items-center
              w-full
              p-2
              transition
              duration-75
              group
              dark:text-white"
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
            <span
              class="
                text-black
                flex-1
                ms-3
                text-left
                rtl:text-right
                whitespace-nowrap
                font-normal
                hover:text-white">DBUTIL</span
            >
          </a>
        </li>
        <!-- {/if} -->
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
              (toggleSupportMenu =
                toggleSupportMenu === "hidden" ? "block" : "hidden")}
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
            <li class="contents m-1">
              <a
                href="https://sway.office.com/psh4RnIDqPjtX12c?ref=Link"
                class="
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white">User Guide</a
              >
            </li>
            <li class="contents m-1">
              <a
                href="mailto:customersupport@aspireci.com"
                class="
                  text-black
                  d-flex
                  items-center
                  w-full
                  p-2
                  transition
                  duration-75
                  rounded-lg
                  group
                  hover:bg-[#838383]
                  font-normal
                  hover:text-white">Contact Support</a
              >
            </li>
          </ul>
        </li>
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
