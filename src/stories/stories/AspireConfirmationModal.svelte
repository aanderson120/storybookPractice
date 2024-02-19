<script>
  // Confirmation box, allowing for errors, a callback (submit handler) for
  // the accept button, and a callback function for the successful completion (clearFunction)
  // If you have more than one of these on a page, the id value will distinguish.
  import { listen } from "svelte/internal";
  // submitHandler function must be set, and will be called when the accept button is clicked.
  export let submitHandler = () => {};
  // Optional function to be run when modal is closed.
  export let cancelFunction = () => {};
  export let confirmationMessage = "";
  export let successMessage = "";
  export let loading = false;
  export let errors = {};
  // Clear function is called on success. Not required.
  export let clearFunction;
  // Uniquely identify the modal on the page, if you intend more than one.
  // Otherwise set to a default.
  export let id = "confirmation-modal";
  export let modalOpen = false;
  export let reload = false;

  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  async function onClick() {
    let confirm = document.getElementById("confirm");
    confirm.setAttribute("disabled", "disabled");
    await submitHandler();
    // modalOpen = false;
  }

  function clearValues() {
    if (clearFunction && successMessage) {
      clearFunction();
    }
    let confirm = document.getElementById("confirm");
    if (confirm) {
      confirm.removeAttribute("disabled");
    }
    successMessage = "";
    loading = false;
    errors.clearErrors();
    if (cancelFunction) {
      cancelFunction();
    }
    if (reload) {
      location.reload();
    }
  }
</script>

<input type="checkbox" {id} class="modal-toggle" bind:checked={modalOpen} />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <p>
      {confirmationMessage}
    </p>
    {#if errors?.errors?.length}
      <br />
      <div class="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <!-- <h5 class="bold underline mr-5">
            Error: Please contact Aspire support.
          </h5> -->
          <ul>
            <li><u>The following errors occurred</u></li>
            {#each errors.errors as error}
              {#each Object.entries(error.detail) as [key, value], index (key)}
                <li>{value}</li>
              {/each}
            {/each}
          </ul>
        </div>
      </div>
    {/if}
    {#if successMessage}
      <br />
      <div class="alert alert-success shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>{successMessage}</span>
        </div>
      </div>
    {/if}
    <div id="modal" class="modal-action">
      {#if loading}
        <div class="flex items-center justify-center mr-4">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
        </div>
      {/if}
      {#if !errors.length && !successMessage}
        <button
          type="button"
          id="confirm"
          class="btn btn-primary"
          on:click={onClick}
        >
          Accept
        </button>
      {/if}
      <label for={id} class="btn" on:click={clearValues}>Close</label>
    </div>
  </div>
</div>

<style>
  p {
    color: black;
  }

  .btn {
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    p {
      color: white;
    }
  }
</style>
