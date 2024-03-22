<script>
  //AspireTextArea.svelte
  //Reusable textarea component
  import AspireHeader from "./AspireHeader.svelte";

  export let text = "";
  export let label = "";
  export let placeholder = "";
  export let id = "";
</script>

<AspireHeader {label} primary />
<div class="form-group">
  <label for={id} />
  <textarea
    class="form-control"
    {id}
    rows="3"
    bind:value={text}
    {placeholder}
  />
</div>

<style>
  .form-group {
    margin-bottom: 0;
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
