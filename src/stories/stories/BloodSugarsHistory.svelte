<script>
  import moment from "moment";
  import AspireHeader from "./AspireHeader.svelte";
  export let residentId;
  export let whviewbsugars;
  export let bloodSugarsHistory;

  $: if (residentId) {
    whviewbsugars = [];

    const urlParams = {
      path: `/wapi/rankedmetrics/?q=${residentId}&Type=Bsugar`,
    };

    fetch(`/api/fetchdata`, {
      method: "POST",
      body: JSON.stringify(urlParams),
    })
      .then((res) => res.json())
      .then((res) => {
        whviewbsugars = res.data || {};
      });
  }

  $: if (whviewbsugars) {
    bloodSugarsHistory = whviewbsugars;
  }
</script>

<div class="card shadow-xl mt-3">
  <div class="card-body">
    <AspireHeader label="BLOOD SUGARS HISTORY" primary />
    <table class="table w-full">
      <thead>
        <tr>
          <th class="bg-slate-300">Date</th>
          <th class="bg-slate-300">Reading</th>
        </tr>
      </thead>
      {#if whviewbsugars && whviewbsugars.length > 0}
        {#each whviewbsugars.slice(0, 9) as whviewbsugar}
          <tbody>
            <tr class="hover hover:bg-[#e5e7eb]">
              <td class="!bg-inherit whitespace-pre-wrap"
                >{moment(whviewbsugar.Created)
                  .local()
                  .format("ddd, MMM DD, YYYY  HH:mm:ss")}</td
              >
              <td class="!bg-inherit whitespace-pre-wrap"
                >{whviewbsugar.Value1}</td
              >
            </tr>
          </tbody>
        {/each}
      {:else}
        <p class="text-center mt-2">No blood sugars reported</p>
      {/if}
    </table>
  </div>
</div>
