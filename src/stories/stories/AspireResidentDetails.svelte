<script>
  import AspireHeader from "./AspireHeader.svelte";

  export let residentId;
  export let whviewresidentdetail;

//   $: if (residentId) {
//     whviewresidentdetail = [];

//     const urlParams = {
//       path: `/wapi/residentbasics/${residentId}/`,
//     };

//     fetch(`/api/fetchdata`, {
//       method: "POST",
//       body: JSON.stringify(urlParams),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         whviewresidentdetail = res.data[0] || {};
//       });
//   }

//   $: if (!residentId) {
//     whviewresidentdetail = {};
//   }
</script>

<center>
  <AspireHeader label="Resident Information" primary />
  <a
    href="/residents/resident/{whviewresidentdetail
      ? whviewresidentdetail.ResidentPK
      : ''}"
  >
    {#if whviewresidentdetail && whviewresidentdetail.Photo}
      <img
        class="img-fluid residentimage"
        src={whviewresidentdetail && whviewresidentdetail.Photo
          ? `${whviewresidentdetail.Photo}?sv=2020-08-04&ss=f&srt=o&sp=rl&se=2024-07-20T20:39:41Z&st=2021-07-20T12:39:41Z&spr=https&sig=u7BZzUmu2trUho9Fl2QVzUAiRewD5UFyOIZCJru74lA%3D`
          : ""}
        style="width: 55%;"
        alt="Resident {whviewresidentdetail &&
        whviewresidentdetail.ResidentFirstName
          ? whviewresidentdetail.ResidentFirstName
          : ''} {whviewresidentdetail && whviewresidentdetail.ResidentLastName
          ? whviewresidentdetail.ResidentLastName
          : ''} Image"
      />
    {/if}
  </a>
</center>
<div class="card-title !justify-center mb-1 mt-2">
  {#if whviewresidentdetail}
    <a class="font-bold" href="/resident/{whviewresidentdetail.ResidentPK}">
      {whviewresidentdetail && whviewresidentdetail.ResidentFirstName
        ? whviewresidentdetail.ResidentFirstName
        : ""}
      {whviewresidentdetail && whviewresidentdetail.ResidentLastName
        ? whviewresidentdetail.ResidentLastName
        : ""}
    </a>
  {:else}
    Loading...
  {/if}
</div>
<hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700" />
<div class="card-actions mb-3">
  <span class="font-bold">DATE OF BIRTH:</span>
  {whviewresidentdetail && whviewresidentdetail.ResidentDOB
    ? whviewresidentdetail.ResidentDOB
    : ""}
</div>
<div class="card-actions mb-3">
  <span class="font-bold">UNIT:</span>
  {whviewresidentdetail && whviewresidentdetail.UnitNumber
    ? whviewresidentdetail.UnitNumber
    : ""}{whviewresidentdetail && whviewresidentdetail.ProductLine
    ? `, ${whviewresidentdetail.ProductLine}`
    : ""}
</div>
<div class="card-actions mb-3">
  <span class="font-bold">GENDER:</span>
  {whviewresidentdetail && whviewresidentdetail.Gender
    ? whviewresidentdetail.Gender
    : ""}
</div>
<div class="card-actions mb-3">
  <span class="font-bold">MEDICATION ALLERGIES:</span>
  {whviewresidentdetail && whviewresidentdetail.MedicationAllergies
    ? whviewresidentdetail.MedicationAllergies
    : ""}
</div>
