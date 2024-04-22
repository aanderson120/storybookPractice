<script>
  //TopNav.svelte
  //Top navigation bar component
  import { createEventDispatcher } from "svelte";

  import AspireButton from "./AspireButton.svelte";

  export let allCustomers = [{ displayVal: "" }];
  export let allCampuses = [{ displayVal: "" }];
  export let atceventopenevents = [
    {
      displayVal: "",
      EventSK: "",
      ResidentSK: "",
      ResidentLastName: "",
      ResidentFirstName: "",
      ResidentDOB: "",
      DateOfFall: "",
      CampusName: "",
      residentObj: {},
    },
  ];
  export let selectedCampus = {};
  export let selectedCustomer = {};
  export let selectedEvent = {};

  let showElement;
  let trueFalse = { true: "on", false: "off" };

  const dispatch = createEventDispatcher();

  const switchCustomer = (customer) => () => (selectedCustomer += customer);
  const switchCampus = (campus) => () => (selectedCampus += campus);
  const switchEvent = (event) => () => (selectedEvent += event);

  // If the user specified a sub element to check (showElement), check that Element of the
  // given row against the given true/false values and return result.
  // If not, return true unless the displayVal is '*None*'
  function showOption(option) {
    if (showElement) {
      if (option[showElement] == trueFalse[true]) {
        return true;
      }
      return false;
    } else {
      if (option.displayVal.includes("*None*")) {
        return false;
      }
      if (option.displayVal.includes("*Unknown*")) {
        return false;
      }
      return true;
    }
  }
</script>

<div
  class="card w-full bg-white fixed top-0 shadow-xl mb-5 overflow-visible !p-0 rounded-none z-[1]"
>
  <div
    class="card-body items-center p-0 !flex-row h-32 !shadow-none"
    id="breadcrumb"
  >
    <a href="/" class="logo-wrapper waves-effect max-w-[200px]">
      <img
        alt="Aspire Logo"
        class="img-fluid !w-[200px] !h-[80px]"
        src="https://th.bing.com/th/id/OIP.WV2__AG0EMxrBhZ0S8tH9AHaC9?rs=1&pid=ImgDetMain"
      />
    </a>
    <div class="text-sm text-black breadcrumbs ml-12 !overflow-visible w-full relative left-[130px]">
      <ul>
        <li>
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button" class="m-1">
              {selectedCustomer.displayVal === undefined
                ? "Select Customer"
                : selectedCustomer.displayVal}
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="dropdown-content z-10 menu p-2 shadow rounded-box bg-white w-full"
            >
              {#each allCustomers as customer}
                {#if showOption(customer)}
                  <li class="hover:bg-[#E6E6E6] rounded-md">
                    <AspireButton
                      backgroundColor="transparent"
                      flat
                      label={customer.displayVal}
                      clickFn={() => {
                        switchCustomer(customer);
                        selectedCustomer = customer;
                      }}
                      on:click={() => dispatch("submit")}
                    />
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button" class="m-1">
              {selectedCampus.displayVal === undefined
                ? "Select Campus"
                : selectedCampus.displayVal}
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow rounded-box bg-white w-max"
            >
              {#each allCampuses as campus}
                {#if showOption(campus)}
                  <li class="flex-nowrap hover:bg-[#E6E6E6] rounded-md">
                    <AspireButton
                      backgroundColor="transparent"
                      flat
                      label={campus.displayVal}
                      clickFn={() => {
                        switchCampus(campus);
                        selectedCampus = campus;
                      }}
                      on:change={() => dispatch("submit")}
                    />
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button" class="m-1">
              {selectedEvent.displayVal === undefined
                ? "Select Event"
                : selectedEvent.displayVal}
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow rounded-box bg-white w-max"
            >
              {#each atceventopenevents as event}
                {#if showOption(event)}
                  <li class="flex-nowrap hover:bg-[#E6E6E6] rounded-md">
                    <AspireButton
                      backgroundColor="transparent"
                      flat
                      label={event.displayVal}
                      clickFn={() => {
                        switchEvent(event);
                        selectedEvent = event;
                      }}
                      on:change={() => dispatch("submit")}
                    />
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-full d-flex flex-row-reverse">
      <AspireButton
        clickFn={() => {
          console.log(selectedCustomer);
        }}
        size="icon"
        label=":D"
        flat
        border
      />
    </div>
  </div>
</div>

<style>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .waves-effect {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .d-flex {
    display: flex !important;
  }
</style>
