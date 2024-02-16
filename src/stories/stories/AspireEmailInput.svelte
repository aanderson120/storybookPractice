<script>
  // A generic text input area, with default row count of 3, not required.
  // The result is bound to "value"
  export let value;
  //
  export let label;
  //  title is the text that appears above the text area.
  export let title = "";
  // set required to "required" if required :)  Default is not required.
  export let required = "";
  // Text size
  export let ourStyle = "font-light";
  // Text for mouse-over
  export let hoverText = "";
  export let onChangeFunction;
  // Add an asterisk in front of required radio buttons.
  let theasterisk = "";
  if (required == "required") {
    theasterisk = "*";
  }
</script>

<div class={ourStyle}>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a><span class="text-[#ff0000]">{theasterisk} </span>{title}</a>
  <label for={label} />
  <input
    {required}
    type="email"
    title={hoverText}
    class={"form-control"}
    id={label}
    bind:value
    on:change={onChangeFunction}
  />
</div>
