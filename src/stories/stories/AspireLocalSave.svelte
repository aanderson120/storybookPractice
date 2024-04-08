<script>
  //AspireLocalSave.svelte
  //Button to save the current event to local storage
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
      >Click to temporarily save all entered values. Values will be saved until
      user logs out.</span
    >
  </div>
</div>

<style>
  .d-flex {
    display: flex;
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
