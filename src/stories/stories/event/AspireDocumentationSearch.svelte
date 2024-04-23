<script>
  //AspireDocumentation.svelte
  //Component to search residents in event documentation
  import AspireHeader from "../general/AspireHeader.svelte";
  import AspireButton from "../general/AspireButton.svelte";
  import AspireDisplayInputItems from "../general/AspireDisplayInputItems.svelte";
  import AspireDatePicker from "../general/AspireDatePicker.svelte";
  import AspireTextInput from "../general/AspireTextInput.svelte";
  import AspireCard from "../general/AspireCard.svelte";

  export let eventType = "";
  export let startDate = "";
  export let endDate = "";
  export let searchTerm = "";
  export let selectedEvent = {};
  export let updateIncidents = () => {};

  export let atceventopenevents = [
    {
      CampusName: "",
      DateOfFall: "",
      EventSK: "",
      EDNoteText: "",
      NurseNoteText: "",
      ResidentFirstName: "",
      ResidentLastName: "",
      ResidentSK: "",
    },
  ];

  // Function to filter on resident name, given the searchTerm that the
  // user gave us.
  let eventsFilterFn = (event) => {
    return true;
  };
  const filterByResident = () => {
    if (searchTerm) {
      eventsFilterFn = (event) => {
        let residentName =
          `${event.ResidentFirstName} ${selectedEvent.ResidentLastName}`.toLowerCase();
        return residentName.includes(searchTerm.toLocaleLowerCase());
      };
    } else {
      eventsFilterFn = () => {
        return true;
      };
    }
  };
  async function selectionsChanged() {
    // for (var i = 0; i < allEvents.objList.length; i++) {
    //   await new Promise(async (next) => {
    //     let result = {};
    //     if (allEvents.objList[i].selected) {
    //       result = await allEvents.objList[i].activate({
    //         purpose: "Doc Falls Not Reviewed",
    //       });
    //       if (result) {
    //         if (result.error) {
    //           console.log("Internal Error reading fall details.");
    //           return {};
    //         }
    //       }
    //     }
    //     if (result) {
    //       return next();
    //     }
    //   });
    // }
    // allEvents.objList = allEvents.objList;
    // return {};
  }
</script>

<AspireCard>
  <AspireHeader label={`${eventType} Events`} />
  <h4 class="text-xl font-light mb-1">Date Range</h4>
  <div>
    <span class="date-input inline-flex m-2.5">
      <AspireDatePicker
        label="Start date:"
        bind:value={startDate}
        placeholder="Select Date"
        size={10}
        id="start-date"
      />
    </span>
    <span class="date-input inline-flex m-2.5">
      <AspireDatePicker
        label="End date:"
        bind:value={endDate}
        placeholder="Select Date"
        size={10}
        id="end-date"
      />
    </span>
    <AspireButton label="Change" primary={false} clickFn={updateIncidents} />
  </div>
  <AspireTextInput
    size={50}
    placeholder="Search Residents"
    bind:value={searchTerm}
    on:input={filterByResident}
  />
  <div class="text-base m-4 d-flex flex-wrap justify-between">
    <AspireDisplayInputItems
      itemSet={atceventopenevents.map((event) => ({
        formType: "checkBox",
        value: false,
        promptText: event.ResidentFirstName + " " + event.ResidentLastName,
        id: event.EventSK,
      }))}
      callbackOnSelectFn={selectionsChanged}
      filterFn={eventsFilterFn}
    />
  </div>
  <div>
    <AspireButton
      clickFn={() => {
        // allEvents.markAllSelected();
        // selectionsChanged();
      }}
      label="Select All"
    ></AspireButton>
    <AspireButton
      clickFn={() => {
        // allEvents.clearAllSelected();
        // selectionsChanged();
      }}
      label="Remove Selected"
    ></AspireButton>
  </div>
  <!-- {#if allEvents.selectedCount() === 0}
    <h4 class="text-xl font-light m-2">No Events Selected</h4>
  {/if} -->
</AspireCard>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
