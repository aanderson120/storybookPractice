<script>
  //AspireDateTimePicker.svelte
  //A date-time picker that can be used in forms

  import moment from "moment";

  export let required = false;
  export let value = "";
  export let placeholder = "";
  export let size;

  let defaultTime = moment().format("mm/dd/yyyy hh:i");
  if (!value) {
    value = defaultTime;
  }
</script>

<div class="form-row mb-2">
  <div class="col">
    <input
      {required}
      type="datetime-local"
      {placeholder}
      {size}
      class="form-control mx-5 max-w-[90%]"
      bind:value
    />
  </div>
</div>

<style>
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .col {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
  }
  .form-row .col {
    padding-right: 5px;
    padding-left: 5px;
  }
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
