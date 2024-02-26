<script>
  import AspireDateTimePicker from "./AspireDateTimePicker.svelte";
  //AspireRadioSelect.svelte
  //Reusable radio select component

  import AspireEmailInput from "./AspireEmailInput.svelte";
  import AspireTextInput from "./AspireTextInput.svelte";
  import AspireDatePicker from "./AspireDatePicker.svelte";

  export let question = "";
  export let placeholder = "";
  export let email = false;

  // label must be unique. It will be used in the name value of the
  // input field.
  export let label = "";
  //When radio select has input field when 'yes' is selected and additional details are needed
  export let withInfo = false;
  export let additionalInfo = "";
  //When radio select has input field when 'no' is selected and additional details are needed
  export let infoNegative = false;
  //When radio select has 2 input fields when 'yes' is selected
  export let hiddenFields = false;
  //second placeholder for hidden fields
  export let placeholder2 = "";
  //value of inputs for hidden fields
  export let hidden1 = "";
  export let hidden2 = "";
  //When radio select specific to EMS involvement
  export let emsCalled = false || null;
  export let transportedEMS = false || null;
  export let transportedEMSNotes = "";
  //when radio select needs a text input and a date input
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

  // Options "Yes" and "No", with boolean return values of true and false.
  // Options on radio button fields are mutually exclusive.
  //
  // selected contains the result
  export let value;
  if (value === false) {
    value = undefined;
  }

  // hoverText will be shown on mouse-over
  export let hoverText = "";

  export let onChangeFunction;

  // items is the list of items for the radio buttons. The name field
  // will be displayed with a button, and the value is the result of selecting
  // that option. Default is a yes/no field returning true or false boolean.

  export let items = [
    { name: "Yes", value: true },
    { name: "No", value: false },
  ];

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
    {#each items as item}
      <label>
        <!-- Name must be the same for the options generated to identify with the same input field.
           Use the label passed in.-->
        <input
          {required}
          class="max-w-[90%]"
          type="radio"
          name={label}
          bind:group={value}
          on:change={onChangeFunction}
          value={item.value}
        />
        {item.name + ""}
      </label>&nbsp;
    {/each}
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
{#if value && withInfo}
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
{#if value && hiddenFields}
  <AspireTextInput
    withTooltip={true}
    value={hidden1}
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
    value={hidden2}
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
        <AspireDatePicker bind:value={infoDate} size="20" />
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
