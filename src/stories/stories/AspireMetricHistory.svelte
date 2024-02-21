<script>
  // AspireMetricHistory.svelte
  // Component to display recent metrics of the given type for the given resident.
  // A count variable is provided, but it defaults to 10.
  // The resident object should be activated for the purpose you intend, to ensure
  // the metrics you want are loaded.
  import moment from "moment";
  export let residentObj = {
    BradenScore: "",
    CampusId: "",
    CampusName: "",
    CareStatus: "",
    CodeStatus: "",
    DateOfAdmission: "",
    Diagnoses: "",
    Diet: "",
    EmailSent: false,
    FoodAllergies: "",
    Gender: "",
    Height: "",
    MAHC10Score: "",
    MaritalStatus: "",
    MedicationAllergies: "",
    Nickname: "",
    OtherAllergies: "",
    Phone: "",
    Photo: "",
    PrimaryProvider: "",
    ProductLine: "",
    Religion: "",
    ResidentDOB: "",
    ResidentFirstName: "",
    ResidentLastName: "",
    ResidentPK: "",
    SLUMsScore: "",
    UnitNumber: "",
  };
  export let metricType="";
  export let count = 10;
</script>

<table class="table w-full">
  <thead>
    <tr>
      <th class="bg-[#838383] text-white !rounded-none !p-2">Date</th>
      <th class="bg-[#838383] text-white !rounded-none !p-2">Reading</th>
    </tr>
    {#if residentObj.getMetricList(metricType) && residentObj.getMetricList(metricType).objList.length > 0}
      {#each residentObj
        .getMetricList(metricType)
        .objList.slice(0, count - 1) as thisMetric}
        <tbody>
          <tr class="hover hover:bg-[#e5e7eb]">
            <td class="!bg-inherit whitespace-pre-wrap"
              >{moment(thisMetric.dateObtained)
                .local()
                .format("ddd, MMM DD, YYYY  HH:mm:ss")}</td
            >
            <td class="!bg-inherit whitespace-pre-wrap"
              >{thisMetric.valueString}</td
            >
          </tr>
        </tbody>
      {/each}
    {:else}
      <p class="text-center mt-2">
        No recent metrics of type {metricType} found.
      </p>
    {/if}
  </thead>
</table>
