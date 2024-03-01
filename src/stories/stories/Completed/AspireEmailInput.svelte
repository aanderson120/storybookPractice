<script>
  // A generic text input area, with default row count of 3, not required.
  // The result is bound to "value"
  export let additionalInfo = "";
  //
  export let label = "";
  //  title is the text that appears above the text area.
  export let title = "";
  // set required to "required" if required :)  Default is not required.
  export let required = false;
  // Text size
  export let ourStyle = "font-light";
  // Text for mouse-over
  export let hoverText = "";
  export let placeholder = "";
  export let error = false;
  export let noTitle = false;
  export let size;

  $: require = required ? "" : "hidden";
  $: errorIcon = error ? "" : "hidden";
  $: show = noTitle ? "hidden" : "";

  //Regex to validate email address
  const emailRegex =
    /^$|^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  $: emailError = emailRegex.test(additionalInfo) === false;
</script>

<div class={ourStyle}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <label class={["ml-1 mb-1", `${show}`].join(" ")} for={label}>
    <span
      class={["text-[#D42142] relative right-1", `${require}`].join(" ")}
      data-tooltip={"This field is required"}
      >*
    </span>{title}
  </label>
  <div class="ml-2">
    <div class="form-row mb-2">
      <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
        >*
      </span>
      <div class="w-full flex-wrap">
        <input
          {required}
          type="email"
          title={hoverText}
          class="form-control max-w-[90%]"
          {size}
          id={label}
          {placeholder}
          bind:value={additionalInfo}
        />
        {#if emailError}
          <p class="text-[#D42142]">Please enter a valid email address</p>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
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
  .form-control {
    border-color: #3c4144;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .d-flex {
    display: flex !important;
  }
</style>
