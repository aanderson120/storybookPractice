<script>
  import AspireCard from "./Completed/AspireCard.svelte";
  //AspireEvent.svelte
  //Layout for events

  import AspireEventSelect from "./Completed/AspireEventSelect.svelte";
  import AspireFatalErrorCard from "./Completed/AspireFatalErrorCard.svelte";
  import AspireHeader from "./Completed/AspireHeader.svelte";
  import AspireNoEventCard from "./Completed/AspireNoEventCard.svelte";
  import AspireRow from "./Completed/AspireRow.svelte";
  import AspireTextArea from "./Completed/AspireTextArea.svelte";
  import AspireTextInput from "./Completed/AspireTextInput.svelte";

  export let placement = "sm:!pl-64";
  export let event = "";
  export let atceventopenevents = [
    {
      EventSK: "",
      ResidentSK: "",
      ResidentLastName: "",
      ResidentFirstName: "",
      ResidentDOB: "",
      DateOfFall: "",
      CampusName: "",
    },
  ];
  export let selected = "";
  export let increasedSusceptibility = "";
  export let susceptibilityInterventions = "";
  export let additionalEventInfo = "";
  export let additionalInterventions = "";
  export let selectedEvent = {};

  function saveNoteValues() {
    Object.keys(selectedEvent).forEach((key) => {
      localStorage.setItem(
        `${selectedEvent.EventSK} ${key}`,
        selectedEvent[key]
      );
    });
  }
</script>

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
        <AspireEventSelect
          label="Open Fall Events"
          {atceventopenevents}
          {selected}
        />
        <aside
          class="flex
            hidden
            md:fixed
            md:mr-5
            md:top-[155px]
            mt-4
            w-auto
            md:max-w-[350px]
            right-0"
        >
          <AspireCard residentCard>
            <img
              src="https://th.bing.com/th/id/R.c56f5dfb07c94aa5f6ec414c2a751300?rik=rOqR9dpb6vGblw&pid=ImgRaw&r=0"
              alt="placeholder"
              style="width: 275px; height: 657px; object-fit: cover; object-position: center;"
            />
          </AspireCard>
        </aside>
        <!-- {#if selectedEvent && selectedEvent.isActivated("Fall Events")} -->
        <AspireRow className="justify-between">
          <AspireCard size="md:w-[48%]">
            <AspireHeader label="Nurse's Note - Controls" />
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
            <AspireHeader label="Fall Summary from RTasks" />
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
          <AspireCard>
            <AspireHeader label="Notifications" />
            <AspireTextArea
              label="Increased Susceptibility to Falls"
              bind:text={increasedSusceptibility}
              id="increasedSusceptibility"
              placeholder="Please add any information regarding the resident's increased susceptibility to falls here. (optional)"
            />
            {#if increasedSusceptibility}
              <AspireTextInput
                size="50"
                bind:value={susceptibilityInterventions}
                placeholder="Increased Fall Susceptibility Interventions"
              />
            {/if}
            <AspireTextArea
              label="Additional Information"
              bind:text={additionalEventInfo}
              id="textArea"
              placeholder="Enter text here"
            />
            {#if additionalEventInfo}
              <AspireTextInput
                size="50"
                bind:value={additionalInterventions}
                placeholder="Additional Interventions"
              />
            {/if}
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
          <AspireCard>
            <AspireHeader label="Nurse's Note" />
          </AspireCard>
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
  .buttonTooltip {
    position: relative !important;
    display: inline-block;
    opacity: 1;
    cursor: help;
  }

  .tooltiptext {
    visibility: hidden;
    width: 350px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }

  .buttonTooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
