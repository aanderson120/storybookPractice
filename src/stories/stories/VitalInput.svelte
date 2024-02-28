<script>
  //AspireTextInput.svelte
  //Reusable text input component

  import AspireTooltip from "./Completed/AspireTooltip.svelte";

  export let label = "";
  export let placeholder = "";
  export let id = "";
  export let withTooltip = false;
  export let hasWarning = false;
  export let hasError = false;
  export let warningMessage = "";
  export let errorMessage = "";
  export let required = false;
  export let error = false;

  //warnings and errors show up as a border around the input box as well as icon
  $: warnBorder = hasWarning ? "!border-[#B38000] !border-3 !border-solid" : "";
  $: errorBorder = hasError ? "!border-[#D42142] !border-3 !border-solid" : "";

  $: warnAlert = hasWarning ? "" : "!hidden";
  $: errorAlert = hasError ? "" : "!hidden";

  $: require = required ? "" : "hidden";
  $: errorIcon = error ? "" : "hidden";
</script>

<div class="col event-text-box">
  {#if withTooltip}
    <div class="buttonTooltip">
      <AspireTooltip
        position="right"
        visability={errorAlert}
        tooltipText={errorMessage}
        textColor="text-[#D42142]">*</AspireTooltip
      >
      <AspireTooltip
        position="right"
        visability={warnAlert}
        tooltipText={warningMessage}
        textColor="text-[#B38000]">!</AspireTooltip
      >
    </div>
  {/if}
  <input
    {required}
    type="text"
    {placeholder}
    size="50"
    class={["form-control max-w-[90%]", warnBorder, errorBorder].join(" ")}
    bind:value={label}
  />
</div>

<style>
  .event-text-box {
    position: relative;
  }
  .form-control {
    height: calc(1.5em + 0.75rem + 2px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  .col {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
  }
  .buttonTooltip {
    display: flex;
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
