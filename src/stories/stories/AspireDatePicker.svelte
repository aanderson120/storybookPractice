<script>
  //AspireDatePicker.svelte
  //Date picker component
  export let dateValue="";
  export let id="";
  export let label="";
</script>

<div class="col">
  <input
    {id}
    type="date"
    class="form-control max-w-[100% ]"
    bind:value={dateValue}
    placeholder={label}
  />
  <label for={id}>{label}</label>
</div>

<style>
  .form-control {
    flex-direction: row;
  }
</style>
