<script>
  //AspireFormQuestion.svelte
  //Reusable component for form questions

  import AspireEmailInput from "../general/AspireEmailInput.svelte";
  import AspireTextInput from "../general/AspireTextInput.svelte";
  import AspireDatePicker from "../general/AspireDatePicker.svelte";
  import AspireDateTimePicker from "../general/AspireDateTimePicker.svelte";

  export let question = "";
  export let placeholder = "";
  export let email = false;
  export let value;

  // label must be unique. It will be used in the name value of the
  // input field.
  export let label = "";
  //Has single input field when 'yes' is selected and additional details are needed
  export let withText = false;
  export let additionalInfo = "";
  //Has input field when 'no' is selected and additional details are needed
  export let infoNegative = false;
  //Has 2 input fields when 'yes' is selected
  export let with2Inputs = false;
  //second placeholder for 2 input fields
  export let placeholder2 = "";
  //value of inputs for 2 input fields
  export let input1 = "";
  export let input2 = "";
  //When EMS involvement is needs to be notes
  export let emsCalled = false || null;
  export let transportedEMS = false || null;
  export let transportedEMSNotes = "";
  //when a text input and a date or date/time input are needed
  export let infoWithDate = false;
  export let infoDate = "";
  export let infoWithDateTime = false;
  export let infoDateTime = "";
  //for error handling specifc to inputs
  export let error = false;
  export let warning = false;
  export let required = false;
  export let warningMessage = "";
  export let errorMessage = "";

  // hoverText will be shown on mouse-over
  export let hoverText = "";

  $: require = required ? "" : "hidden";
  $: errorIcon = error ? "" : "hidden";
</script>

<div title={hoverText} class="mb-1">
  <label class="ml-1" for={label}>
    <span class={["text-[#D42142]", require].join(" ")}>* </span>
    {question}
  </label>

  <div class="float-right">
    <!-- Create a labled option for each item of input.-->
    <label>
      <input
        type="radio"
        checked={value && typeof value == "boolean"}
        on:change={(e) =>
          (value = e.currentTarget.value === "yes" ? true : false)}
        value="yes"
      /> Yes
    </label>&nbsp;
    <label for="">
      <input
        type="radio"
        checked={!value && typeof value == "boolean"}
        on:change={(e) =>
          (value = e.currentTarget.value === "yes" ? true : false)}
        value="no"
      /> No
    </label>
  </div>
</div>
{#if value && email}
  <div class="ml-2">
    <div class="form-row mb-2">
      <AspireEmailInput
        {required}
        {placeholder}
        {additionalInfo}
        size="50"
        noTitle={true}
      />
    </div>
  </div>
{/if}
{#if value && withText}
  <AspireTextInput
    withTooltip={true}
    value={additionalInfo}
    {placeholder}
    {required}
    size="50"
    hasWarning={warning}
    hasError={error}
    {warningMessage}
    {errorMessage}
  />
{/if}
{#if !value && typeof value == "boolean" && infoNegative}
  <AspireTextInput
    withTooltip={true}
    value={additionalInfo}
    {placeholder}
    {required}
    size="50"
    hasWarning={warning}
    hasError={error}
    {warningMessage}
    {errorMessage}
  />
{/if}
{#if value && with2Inputs}
  <AspireTextInput
    withTooltip={true}
    bind:value={input1}
    {placeholder}
    {required}
    size="50"
    hasWarning={warning}
    hasError={error}
    {warningMessage}
    {errorMessage}
  />
  <AspireTextInput
    withTooltip={true}
    bind:value={input2}
    placeholder={placeholder2}
    {required}
    size="50"
    hasWarning={warning}
    hasError={error}
    {warningMessage}
    {errorMessage}
  />
{/if}
{#if label === "emsInvolved" && value}
  <AspireDateTimePicker
    size="50"
    {required}
    placeholder="Date/time of EMS Call"
    bind:value={emsCalled}
  />
  <div class="form-check ml-10">
    <input
      {required}
      class="form-check-input max-w-[90%]"
      type="checkbox"
      name="transportedEMS"
      id="transportedEMS"
      bind:checked={transportedEMS}
    />
    <label class="form-check-label" for="transportedEMS">
      Resident was transported via EMS?
    </label>
    {#if transportedEMS}
      <AspireDateTimePicker
        {required}
        size="50"
        placeholder="Date/time of Transport"
        bind:value={transportedEMSNotes}
      />
    {/if}
  </div>
{/if}
{#if value && infoWithDate}
  <div class="ml-2">
    <div class="form-row mb-2">
      <div class="col flex flex-row">
        <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control input-sm mr-10"
          size="20"
          {placeholder}
          bind:value={additionalInfo}
        />
        {#if error}
          <p class="text-[#D42142]">Please enter a valid value</p>
        {/if}
        <span class="input-group-btn input-wrapper" style="padding: 0px;" />
        <AspireDatePicker bind:value={infoDate} size="50" />
      </div>
    </div>
  </div>
{/if}
{#if value && infoWithDateTime}
  <div class="ml-2">
    <div class="form-row mb-2">
      <div class="col flex flex-row">
        <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control input-sm mr-10"
          size="20"
          {placeholder}
          bind:value={additionalInfo}
        />
        {#if error}
          <p class="text-[#D42142]">Please enter a valid value</p>
        {/if}
        <span class="input-group-btn input-wrapper" style="padding: 0px;" />
        <AspireDateTimePicker {required} bind:value={infoDateTime} size="50" />
      </div>
    </div>
  </div>
{/if}

<style>
  .d-flex {
    display: flex !important;
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
  .form-control {
    border-color: #3c4144;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .input-group {
    position: relative;
    flex-wrap: wrap;
  }
</style>
