<script>
  //AspireRadioSelect.svelte
  //Reusable radio select component
  export let isSelected = false || null;
  export let question = "";
  export let label = "";
  export let additionalInfo = "";
  export let placeholder = "";
  export let email = false;
  export let error = false;
  export let withInfo = false;
  export let infoNegative = false;
  export let hiddenFields = false;
  export let placeholder2 = "";
  export let hidden1 = "";
  export let hidden2 = "";
  export let emsCalled = false || null;
  export let transportedEMS = false || null;
  export let transportedEMSNotes = "";
  export let required = false;
  export let selectedOptions = null;
  export let infoWithDate = false;
  export let infoDate = "";

  $: require = required ? "" : "hidden";
  $: errorIcon = error ? "" : "hidden";

  const emailRegex =
    /^$|^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  $: emailError = emailRegex.test(additionalInfo) === false;
</script>

<div class="mb-1">
  <label class="ml-1" for={label}>
    <span class={["text-[#D42142]", require].join(" ")}>* </span>
    {question}
  </label>
  <div class="float-right">
    <label>
      <input
        {required}
        class="max-w-[90%]"
        type="radio"
        checked={isSelected && typeof isSelected == "boolean"}
        bind:group={selectedOptions}
        on:change={(e) =>
          (isSelected = e.currentTarget.value === "yes" ? true : false)}
        value="yes"
      /> Yes
    </label>&nbsp;
    <label for="">
      <input
        {required}
        class="max-w-[90%]"
        type="radio"
        checked={!isSelected && typeof isSelected == "boolean"}
        bind:group={selectedOptions}
        on:change={(e) =>
          (isSelected = e.currentTarget.value === "yes" ? true : false)}
        value="no"
      /> No
    </label>
  </div>
</div>
{#if isSelected && email}
  <div class="ml-2">
    <div class="form-row mb-2">
      <div class="col pr-10 d-flex">
        <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
          >*
        </span>
        <div class="w-full flex-wrap">
          <input
            {required}
            type="email"
            class="form-control max-w-[90%]"
            size="50"
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
{/if}
{#if isSelected && withInfo}
  <div class="mb-1">
    <div class="form-row">
      <div class="col pr-10 d-flex">
        <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control max-w-[90%]"
          size="50"
          {placeholder}
          bind:value={additionalInfo}
        />
      </div>
    </div>
  </div>
{/if}
{#if !isSelected && typeof isSelected == "boolean" && infoNegative}
  <div class="ml-2">
    <div class="form-row mb-2">
      <div class="col">
        <span class={["text-[#D42142] relative right-1", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control max-w-[90%]"
          size="50"
          {placeholder}
          bind:value={additionalInfo}
        />
      </div>
    </div>
  </div>
{/if}
{#if isSelected && hiddenFields}
  <div class="ml-2">
    <div class="form-row mb-2">
      <div class="col">
        <span class={["text-[#D42142] relative left-8", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control max-w-[90%]"
          {placeholder}
          bind:value={hidden1}
        />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <span class={["text-[#D42142] relative left-8", errorIcon].join(" ")}
          >*
        </span>
        <input
          {required}
          type="text"
          class="form-control max-w-[90%]"
          placeholder={placeholder2}
          bind:value={hidden2}
        />
      </div>
    </div>
  </div>
{:else if label === "emsInvolved" && isSelected}
  <div class="form-row mb-2">
    <div class="col">
      <input
        {required}
        style="flex-direction: row"
        type="datetime-local"
        class="form-control mx-5 max-w-[90%]"
        placeholder="Date/time of EMS Call"
        bind:value={emsCalled}
      />
    </div>
  </div>
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
      <div class="form-row mb-2">
        <div class="col">
          <input
            {required}
            style="flex-direction: row"
            type="datetime-local"
            class="form-control max-w-[90%]"
            placeholder="Date/time of Transport"
            bind:value={transportedEMSNotes}
          />
        </div>
      </div>
    {/if}
  </div>
{/if}
{#if isSelected && infoWithDate}
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
        <input
          {required}
          style="flex-direction: row;"
          type="date"
          class="form-control ml-10"
          size="20"
          bind:value={infoDate}
        />
      </div>
    </div>
  </div>
{/if}

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
  .input-group {
    position: relative;
    flex-wrap: wrap;
  }
</style>
