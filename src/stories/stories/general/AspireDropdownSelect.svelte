<script>
  // AspireDropDownSelect: Select from a set of options.
  // alloptions - a list of all the options to display
  // Each object in alloptions must have an element called displayVal, which will be
  // what the field will display.  The result in selectedoption will be the entire object.
  // displayVal can contain HTML.
  export let allOptions = [{ displayVal: "" }];
  // selectedoption is bound to the result
  export let value = undefined;
  export let showArrow = true;
  export let id = "dd";
  // Parameters for the option when none is selected (initial value)
  export let textForNoSelection = "Select An Option";
  export let noneValue = {};

  // title is shown on the field
  export let title = "";
  export let size = 1;
  // hoverText is for mouse-over
  export let hoverText = "";
  export let trueFalse = { true: "on", false: "off" };
  // set required to "required" if required :)  Default is not required.
  export let required = "";
  export let onChangeFunction = () => {};
  let showElement;
  export let componentClass = "font-light";
  // set to include an "Other" option, which will unset the selection
  export let includeOther = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  // Add an asterisk in front of required radio buttons.
  let theasterisk = "";
  if (required == "required") {
    theasterisk = "*";
  }
  if (!showArrow) {
    size = allOptions.length + 1;
  }

  // If the user specified a sub element to check (showElement), check that Element of the
  // given row against the given true/false values and return result.
  // If not, return true unless the displayVal is '*None*'
  function showOption(option) {
    if (showElement) {
      if (option[showElement] == trueFalse[true]) {
        return true;
      }
      return false;
    } else {
      if (option.displayVal.includes("*None*")) {
        return false;
      }
      if (option.displayVal.includes("*Unknown*")) {
        return false;
      }
      return true;
    }
  }
</script>

<div title={hoverText} class={componentClass}>
  <span class="text-[#D42142]">{theasterisk} </span>
  {#if title}
    {title}
  {/if}

  {#if allOptions && allOptions.length}
    <!-- svelte-ignore a11y-no-onchange -->
    <br />
    <select
      {required}
      bind:value
      class:arrow={showArrow}
      {size}
      {id}
      on:change={onChangeFunction}
    >
      <option value={noneValue} selected disabled hidden
        >{textForNoSelection}</option
      >
      {#each allOptions as thisOption}
        {#if showOption(thisOption)}
          <option title={thisOption.displayVal} value={thisOption}>
            <strong>
              {@html thisOption.displayVal}
            </strong>
          </option>
        {/if}
      {/each}
      {#if includeOther}
        <option value={{ other: true }}> Other </option>
      {/if}
    </select>
  {/if}
</div>

<style>
  select {
    width: 100%;
    max-width: 1000px;
    padding: 0.75rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25em;
  }
  .arrow {
    /* Arrow */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
  }
</style>
