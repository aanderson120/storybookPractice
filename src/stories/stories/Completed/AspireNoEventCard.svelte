<script>
  //AspireNoEventCard.svelte
  //Card to show when campus has no events

  export let CampusName = "";
  export let event = "";
</script>

<div class="card shadow-xl m-4">
  <div class="card-body text-center text-lg">
    There are no open {event} events for {CampusName}.
  </div>
</div>
