<script>
  // AspireFallsHistory.svelte
  // Display falls history for a resident (residentId)
  //

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
</script>

{#if residentObj}
  <h6 class="text-center mb-2">(Falls within last 90 days: #)</h6>
{/if}
<!-- Build a table of all falls and their timestamps, put it in a collapsible section if so 
        requested. -->
<div class="content">
  <table class="table w-full">
    <thead>
      <tr>
        <th class="bg-[#838383] text-white !rounded-none">Date of Fall</th>
      </tr>
    </thead>
    <h6 class="mb-2">None</h6>
  </table>
</div>
