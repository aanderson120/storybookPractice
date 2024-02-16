<script>
  import moment from "moment";

  export let reading = "";
  export let vitalsHistory;
  export let historyType =
    "bloodSugars" || "bloodPressures" || "falls" || "weights";
  //   export let whviewresidentfalls;
  //   export let numFallInLast90Days;
</script>

<!-- {#if (historyType = "falls")}
  {#if whviewresidentfalls.length}
    <h6 class="text-center mb-2">
      (Falls within last 90 days: {numFallInLast90Days})
    </h6>
  {/if}
{/if} -->
<table class="table w-full">
  <thead>
    <tr>
      <th class="bg-[#838383] text-white !rounded-none !p-2">Date</th>
      <th class="bg-[#838383] text-white !rounded-none !p-2">{reading}</th>
    </tr>
  </thead>
  {#if vitalsHistory && vitalsHistory.length > 0}
    {#each vitalsHistory.slice(0, 9) as vital}
      <tbody class="h-14 border-t-2 border-solid border-[#dee2e6]">
        <tr class="duration-500 hover:bg-[#00000013]">
          <td class="!bg-inherit whitespace-pre-wrap"
            >{moment(vital.Created)
              .local()
              .format("ddd, MMM DD, YYYY  HH:mm:ss")}</td
          >
          <td class="!bg-inherit whitespace-pre-wrap">{vital.Value}</td>
        </tr>
      </tbody>
    {/each}
  {:else if historyType === "bloodSugars"}
    <p class="text-center mt-2">No blood sugars reported</p>
  {:else if historyType === "bloodPressures"}
    <p class="text-center mt-2">No blood pressures reported</p>
  {:else if historyType === "falls"}
    <p class="text-center mt-2">No falls reported</p>
  {:else if historyType === "weights"}
    <p class="text-center mt-2">No weights reported</p>
  {:else}
    <p class="text-center mt-2">No reported vitals</p>
  {/if}
</table>
