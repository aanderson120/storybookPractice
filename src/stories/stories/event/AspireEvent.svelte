<script>
  //AspireEvent.svelte
  //Layout for events
  import moment from "moment";
  // import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  import AspireEventSelect from "./AspireEventSelect.svelte";
  import AspireFatalErrorCard from "./AspireFatalErrorCard.svelte";
  import AspireHeader from "../general/AspireHeader.svelte";
  import AspireNoEventCard from "./AspireNoEventCard.svelte";
  import AspireRow from "../AspireRow.svelte";
  import AspireResidentBox from "./AspireResidentBox.svelte";
  import AspireButton from "../general/AspireButton.svelte";
  import AspireCard from "../general/AspireCard.svelte";
  import AspireNurseNote from "./AspireNurseNote.svelte";
  import TopNav from "../layout/TopNav.svelte";
  import Drawer from "../layout/Drawer.svelte";
  import AspireLocalSave from "./AspireLocalSave.svelte";

  export let allCustomers = [{ displayVal: "" }];
  export let allCampuses = [{ displayVal: "" }];
  let selectedCustomer = {};
  let selectedCampus = {};

  export let placement = "sm:!pl-64";
  export let event = "";
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
  export let selectedEvent = {};
  //headers for each card - slot names are card1, card2, card3, nurseNote
  export let card1Header = "Nurse's Note - Controls";
  export let card2Header = "Vitals from RTasks";
  export let card3Header = "";
  export let submitButtonPush = () => {};

  function saveNoteValues() {
    Object.keys(selectedEvent).forEach((key) => {
      localStorage.setItem(
        `${selectedEvent.EventSK} ${key}`,
        selectedEvent[key]
      );
    });
  }
</script>

<TopNav
  {allCustomers}
  {allCampuses}
  {atceventopenevents}
  bind:selectedCustomer
  bind:selectedCampus
  bind:selectedEvent
/>
<form class={placement} id={`${event}-form`}>
  <!-- {#if $thisSession && $thisSession.fatalErrorOnPage}
    <AspireFatalErrorCard ErrMsg$FatalErrorOnPage="Fatal Error on Page" />
  {:else if $thisSession && $thisSession.selectedCampusObj && $thisSession.selectedCampusObj.isActivated("Fall Events")}
    {#if $thisSession.selectedCampusObj.getContainer(AspireOpenFallEvents).objList.length == 0}
      <AspireNoEventCard CampusName="A Test Campus" event="Falls" />
    {:else} -->
  <div class="w-full px-4 mx-auto mb-4">
    <div class="w-full">
      <fieldset class="md:mr-[366px]">
        <aside
          class="flex
            md:absolute
            md:mr-5
            md:top-[132px]
            mt-4
            w-auto
            md:max-w-[350px]
            right-0
            flex-col"
        >
          <Drawer bind:residentObj={selectedEvent.residentObj} />
          <AspireCard asideCard>
            <!-- <AspireResidentBox bind:residentObj={selectedEvent.residentObj} /> -->
            <AspireNurseNote {event} {selectedEvent} {submitButtonPush}
            ></AspireNurseNote>
          </AspireCard>
        </aside>
        <!-- {#if selectedEvent && selectedEvent.isActivated("Fall Events")} -->
        <AspireRow className="justify-between">
          <AspireCard size="md:w-[48%]">
            <AspireHeader label={card1Header} />
            <slot name="card1" />
            <AspireLocalSave {selectedEvent} />
          </AspireCard>
          <AspireCard size="md:w-[48%]">
            <AspireHeader label={card2Header} />
            <slot name="card2" />
            <div class="d-flex flex-row-reverse w-full h-full">
              <div class="d-flex flex-col-reverse buttonTooltip ml-7">
                <button
                  class="hover:text-white rounded hover:bg-[#223FAB] text-[#838383] w-[30px] h-[30px]"
                  on:click={saveNoteValues}
                >
                  Save
                  <!-- <MDBIcon size="lg" icon="save" /> -->
                </button>
                <span class="tooltiptext left-14"
                  >Click to temporarily save all entered values. Values will be
                  saved until user logs out.</span
                >
              </div>
            </div>
          </AspireCard>
          <AspireCard size="md:w-[48%]">
            <AspireHeader label={card3Header} />
            <slot name="card3" />
            <div class="d-flex flex-row-reverse w-full h-full">
              <div class="d-flex flex-col-reverse buttonTooltip ml-7">
                <button
                  class="hover:text-white rounded hover:bg-[#223FAB] text-[#838383] w-[30px] h-[30px]"
                  on:click={saveNoteValues}
                >
                  Save
                  <!-- <MDBIcon size="lg" icon="save" /> -->
                </button>
                <span class="tooltiptext left-14"
                  >Click to temporarily save all entered values. Values will be
                  saved until user logs out.</span
                >
              </div>
            </div>
          </AspireCard>
          <!-- <AspireCard>
              <AspireNurseNote {event} {selectedEvent} {submitButtonPush}>
                <slot name="nurseNote" /></AspireNurseNote
              >
            </AspireCard> -->
        </AspireRow>

        <!-- {/if} -->
      </fieldset>
    </div>
  </div>
  <!-- {/if}
  {/if} -->
</form>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
