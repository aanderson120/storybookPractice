<script>
  // AspireCollapsible.svelte
  // A box that can be collapsed/expanded, using our standard icons.

  import AspireColumn from "../AspireColumn.svelte";
  import AspireRow from "../AspireRow.svelte";
  // import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  // Expanded state can be set on input and maintained by binding this variable.
  export let expanded = false;
  export let label = "";
  export let headerClass = "";
  // hoverText will show on mouse-over of this field.
  export let hoverText = "";

  //Only for story example use DO NOT use
  export let story = false;

  let display = "";
  $: display = expanded ? "contents" : "hidden";
</script>

<div title={hoverText}>
  <AspireRow
    className=" rounded-xl w-full text-center text-lg bg-[#223FAB] text-white p-2"
  >
    <AspireColumn
      size="10"
      margin1=""
      className={headerClass + " flex-1 md:flex-1"}
      ><span class="px-4" style="text-wrap: nowrap;">{label}</span>
    </AspireColumn>
    <AspireColumn size="2">
      <!-- Clicking toggles the status of "expanded"-->
      <button
        class="focus:outline-none float-right"
        title="Click to expand or collapse"
        type="button"
        on:click={() => (expanded = !expanded)}
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="text-right">
          <!-- Show the icont that is the opposite of the current status of expanded -->
          {#if expanded}
            -
            <!-- <MDBIcon icon="chevron-up" class="ml-1" /> -->
          {:else}
            +
            <!-- <MDBIcon icon="chevron-down" class="ml-1" /> -->
          {/if}
        </a></button
      >
    </AspireColumn>
  </AspireRow>

  <div class="collapsible my-2">
    <div class={display}>
      <slot />
      {#if story === true}
        <img
          src="https://wallpaperaccess.com/full/349151.jpg"
          alt="placeholder"
        />
      {/if}
    </div>
  </div>
</div>

<style>
  .collapsible {
    border-bottom: 1px solid var(--gray-light, #eee);
  }
  .form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
</style>
