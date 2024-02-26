<script>
  //AspireDatePicker.svelte
  //Date picker component

  import moment from "moment";

  export let value = "";
  export let placeholder = "";
  export let size;

  let defaultTime = moment().format("mm/dd/yyyy hh:i");
  if (!value) {
    value = defaultTime;
  }
</script>

<input
  type="date"
  {placeholder}
  bind:value
  class="form-control mx-5 max-w-[90%] ml-10 flex-row"
  {size}
/>

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
