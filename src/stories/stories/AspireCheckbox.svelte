<script>
  //AspireCheckbox.svelte
  //Reusable checkbox component
  export let id = undefined;
  export let label = undefined;
  export let check = false;
  export let required = false;

  $: require = required ? "" : "hidden";
</script>

<div class="ml-5">
  <input
    class="form-check-input"
    type="checkbox"
    name={id}
    {id}
    bind:checked={check}
  />
  <label class="form-check-label" for={id}> {label} </label>
  <span class={["text-[#D42142]", require].join(" ")} data-tooltip={"This field is required"}
    >*
  </span>
</div>

<style>
  [data-tooltip],
  .tooltip {
    position: relative;
    cursor: help;
  }
  /* Base styles for the entire tooltip */
  [data-tooltip]:before,
  [data-tooltip]:after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    pointer-events: none;
  }

  /* Show the entire tooltip on hover and focus */
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip]:focus:before,
  [data-tooltip]:focus:after {
    visibility: visible;
    opacity: 1;
  }

  /* Base styles for the tooltip's directional arrow */
  [data-tooltip]:before {
    z-index: 1001;
    border: 6px solid transparent;
    background: transparent;
    content: "";
  }

  /* Base styles for the tooltip's content area */
  [data-tooltip]:after {
    z-index: 1000;
    padding: 8px;
    min-width: 160px;
    background-color: #000;
    background-color: #333333e6;
    color: #fff;
    content: attr(data-tooltip);
    line-height: 1.2;
  }

  /* Top (default) */
  [data-tooltip]:before,
  [data-tooltip]:after {
    bottom: 100%;
    left: 50%;
  }

  [data-tooltip]:before  {
    margin-left: -6px;
    margin-bottom: -12px;
    border-top-color: #000;
    border-top-color: #333333e6;
  }

  /* Horizontally align top/bottom tooltips */
  [data-tooltip]:after {
    margin-left: -80px;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip]:focus:before,
  [data-tooltip]:focus:after {
    transform: translateY(-12px);
  }

</style>
