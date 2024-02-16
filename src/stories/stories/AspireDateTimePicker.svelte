<script>
  //AspireDateTimePicker.svelte
  //A date-time picker that can be used in forms

  export let dateValue;
  export let id;
  export let label;
</script>

<div class="col">
  <input
    {id}
    type="datetime-local"
    class="form-control"
    bind:value={dateValue}
    placeholder={label}
  />
  <label for={id}>{label}</label>
</div>

<style>
  .form-control {
    flex-direction: row;
    display: flex;
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
