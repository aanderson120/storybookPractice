<script>
  import AspireTooltip from "./AspireTooltip.svelte";

  //AspireTextInput.svelte
  //Reusable text input component

  export let placeholder = "";
  export let value = "";
  //Variables for error handling
  export let required = false;
  export let withTooltip = false;
  export let hasWarning = false;
  export let hasError = false;
  export let warningMessage = "";
  export let errorMessage = "";
  export let size;
  export let id = "";

  //warnings and errors show up as a border around the input box as well as icon
  $: warnBorder = hasWarning ? "!border-[#B38000] !border-3 !border-solid" : "";
  $: errorBorder = hasError ? "!border-[#D42142] !border-3 !border-solid" : "";

  $: warnAlert = hasWarning ? "" : "!hidden";
  $: errorAlert = hasError ? "" : "!hidden";
</script>

<div class="ml-2">
  <div class="form-row mb-2">
    <div class="col pr-10 d-flex">
      {#if withTooltip}
        <div class="buttonTooltip self-center !static">
          <AspireTooltip
            position="top"
            visability={errorAlert}
            tooltipText={errorMessage}
            textColor="text-[#D42142]">*</AspireTooltip
          >
          <AspireTooltip
            position="top"
            visability={warnAlert}
            tooltipText={warningMessage}
            textColor="text-[#B38000]">!</AspireTooltip
          >
        </div>
      {/if}
      <input
        {required}
        type="text"
        {id}
        {size}
        {placeholder}
        class={["form-control max-w-[90%]", warnBorder, errorBorder].join(" ")}
        bind:value
      />
    </div>
  </div>
</div>

<style>
  .event-text-box {
    position: relative;
  }
  .form-control {
    border-color: #3c4144;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .col {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
  }
  .form-row .col {
    padding-right: 5px;
    padding-left: 5px;
  }
  .buttonTooltip {
    display: flex;
  }
  .d-flex {
    display: flex !important;
  }
  @media screen and (min-width: 900px) {
    .buttonTooltip {
      top: -90px;
      position: relative;
      display: flex;
      font-size: 12px;
      font-weight: bold;
    }
  }
</style>
