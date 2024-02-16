<script>
  // AspireCollapsibleSection.svelte
  // A box that can be collapsed/expanded, using our standard icons.
  // isCollapsible let someone parameterize the user of this element more easily

  import Row from "./AspireRow.svelte";
  import Col from "./AspireColumn.svelte";

  // Expanded state can be set on input and maintained by binding this variable.
  export let expanded = false;
  export let headerText = "";
  export let headerClass = "";
  // hoverText will show on mouse-over of this field.
  export let hoverText = "";
</script>

<div title={hoverText}>
  <Row
    className=" rounded-xl w-full text-center text-xl bg-[#223FAB] text-white p-2"
  >
    <Col size="10" margin1="" className={headerClass + " flex-1 md:flex-1"}
      ><span class="px-4" style="text-wrap: nowrap;">{headerText}</span>
    </Col>
    <Col size="2">
      <!-- Clicking toggles the status of "expanded"-->
      <button
        class="float-right focus:outline-none"
        title="Click to expand or collapse"
        type="button"
        on:click={() => (expanded = !expanded)}
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="text-right">
          <!-- Show the icont that is the opposite of the current status of expanded -->
          {#if expanded}
            +
          {:else}
            -
          {/if}
        </a></button
      >
    </Col>
  </Row>

  <div class="collapsible my-2">
    <div class="contents" hidden={!expanded}>
      <slot />
    </div>
  </div>
</div>

<style>
  .collapsible {
    border-bottom: 1px solid var(--gray-light, #eee);
  }
</style>
