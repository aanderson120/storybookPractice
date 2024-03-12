<script>
  //AspireContainer.svelte
  //Container component
  export let className = "";
</script>

<div class="w-full px-4 mx-auto {className}">
  <slot />
</div>
