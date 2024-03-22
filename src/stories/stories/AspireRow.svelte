<script>
  //AspireRow.svelte
  //Row component to be used with a grid system
  export let className = "";
  export let backgroundColor = undefined;
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<div class="flex-wrap d-flex {className}" {style}>
  <slot />
</div>

<style>
  .d-flex {
    display: flex;
  }
</style>
