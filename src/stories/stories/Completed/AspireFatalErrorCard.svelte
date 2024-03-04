<script>
  //AspireFatalErrorCard.svelte
  //Card to show fatal error
  export let ErrMsg$FatalErrorOnPage = "";
</script>

<div class="card shadow-xl m-4">
  <div class="card-body text-center text-lg">{ErrMsg$FatalErrorOnPage}</div>
</div>
