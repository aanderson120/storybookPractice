<script>
  //AspireEventSelect.svelte
  //Event select component

  import moment from "moment";
  import { createEventDispatcher } from "svelte";
  import AspireHeader from "./AspireHeader.svelte";

  const dispatch = createEventDispatcher();

  export let atceventopenevents = [
    {
      EventSK: "",
      ResidentSK: "",
      ResidentFirstName: "",
      ResidentLastName: "",
      ResidentDOB: "",
      DateOfFall: "",
      CampusName: "",
    },
  ];
  export let selected = "";
  export let label = "";
  export let eventType = "";
  export let loading = false;
</script>

<div class="card w-96 shadow-xl p-4 !rounded-none" style="width:inherit">
  <AspireHeader {label} primary />
  <div>
    {#if atceventopenevents && atceventopenevents.length}
      <!-- svelte-ignore a11y-no-onchange -->
      <select bind:value={selected} on:change={() => dispatch("clear")}>
        {#each atceventopenevents as atceventopenevent}
          <option class="text-center" value={atceventopenevent}>
            <strong>
              {atceventopenevent.ResidentFirstName}
              {atceventopenevent.ResidentLastName}
            </strong>
            {#if atceventopenevent.ResidentDOB}
              ({atceventopenevent.ResidentDOB})
            {/if} -

            {#if eventType === "newadmissions"}
              {moment(atceventopenevent.DateOfAdmission)
                .local()
                .format("ddd, MMM DD, YYYY")}
            {:else if eventType === "falls"}
              {moment(atceventopenevent.DateOfFall)
                .local()
                .format("ddd, MMM DD, YYYY  HH:mm:ss")}
            {:else if eventType === "weightlosses" || eventType === "generaldecline"}
              {moment(atceventopenevent.EndDate)
                .local()
                .format("ddd, MMM DD, YYYY")}
            {:else if eventType === "triage"}
              {atceventopenevent.CampusName}
            {:else}
              {moment(atceventopenevent.Created)
                .local()
                .format("ddd, MMM DD, YYYY  HH:mm:ss")}
            {/if}
            {#if eventType === "generaldecline"}
              {#if atceventopenevent.DiagnosisForWeightLoss === "No"}
                *
              {/if}
            {/if}
          </option>
        {/each}
      </select>
    {:else if loading}
      <select>
        <option> Loading Events... </option>
      </select>
    {:else}
      <select>
        <option> No Events </option>
      </select>
    {/if}
  </div>
  {#if eventType === "generaldecline"}
    <br />
    <h6>
      * Residents who are new to the suspected general decline system will
      require confirmation of weights before processing.
    </h6>
  {/if}
</div>

<style>
  select {
    /* Reset. */
    /* Style */
    width: 100%;
    max-width: 600px;
    padding: 0.75rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25em;
    /* Arrow */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
  }
</style>
