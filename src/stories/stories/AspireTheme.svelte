<script>
  //AspireTheme.svelte
  //Visual of colors used

  export let label = "";
  export let theme = "";
</script>

<div class={["btn border-none !shadow-none ", `${theme}`].join("")}>
  {label}
</div>

<style>
  .primary {
    background-color: #223fab;
    color: white;
  }
  .secondary {
    background-color: #6600cc;
    color: white;
  }
  .accent {
    background-color: #22ab7a;
    color: white;
  }
  .neutral {
    background-color: #e6e6e6;
    color: black;
  }
  .base-100 {
    background-color: #f3f3f3;
    color: black;
  }
  .info{
    background-color: #0078A8;
    color: white;
  }
  .success {
    background-color: #539b4b;
    color: white;
  }
  .warning {
    background-color: #b38000;
    color: white;
  }
  .error {
    background-color: #d42142;
    color: white;
  }
</style>
