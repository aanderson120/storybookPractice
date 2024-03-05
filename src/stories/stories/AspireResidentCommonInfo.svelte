<script>
  // AspireResidentCommonInfo.svelte
  // Element for displaying the commonly used resident information
  import AspireCollapsibleSection from "./Completed/AspireCollapsibleSection.svelte";
  //   import AspireInputTable from "./AspireInputTable.svelte";
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
  //   let medsTableFormat = [
  //     { label: "Name", hoverText: "Medication Name", display: "Name" },
  //     { label: "Date", hoverText: "Date of prescription", display: "StartDate" },
  //     { label: "Instructions", display: "Instruction" },
  //   ];
</script>

<center class="mb-2">
  <h3 class="text-xl">Resident Information</h3>
  <br />
  <!-- svelte-ignore a11y-missing-attribute -->
  <a>
    {#if residentObj && residentObj.Photo}
      <img
        class="img-fluid residentimage"
        src={residentObj && residentObj.Photo
          ? `${residentObj.Photo}?sv=2020-08-04&ss=f&srt=o&sp=rl&se=2024-07-20T20:39:41Z&st=2021-07-20T12:39:41Z&spr=https&sig=u7BZzUmu2trUho9Fl2QVzUAiRewD5UFyOIZCJru74lA%3D`
          : ""}
        style="width: 45%;"
        alt="Resident {residentObj && residentObj.ResidentFirstName
          ? residentObj.ResidentFirstName
          : ''} {residentObj && residentObj.ResidentLastName
          ? residentObj.ResidentLastName
          : ''} Image"
      />
    {/if}

    <div class="justify-center mb-1 mt-2">
      {#if residentObj}
        <div class="text-xl">
          {residentObj && residentObj.ResidentFirstName
            ? residentObj.ResidentFirstName
            : ""}
          {residentObj && residentObj.ResidentLastName
            ? residentObj.ResidentLastName
            : ""}
        </div>
        <div class="text-sm">
          {residentObj.Gender}
          - Born: {residentObj && residentObj.ResidentDOB
            ? residentObj.ResidentDOB
            : "No DOB present"}
        </div>
      {/if}
    </div>
  </a></center
>
<hr class="h-px mb-2 bg-gray-200 border-0" />
<div class="card-actions mb-1 text-sm">
  <span class="font-bold"> Hospice?: </span>
  {residentObj && residentObj.isOnHospice ? "Yes" : "No"}
</div>
<div class="card-actions mb-1 text-sm">
  <span class="font-bold">Code Status: </span>
  {residentObj && residentObj.CodeStatus
    ? residentObj.CodeStatus
    : "None Listed"}
</div>
<div class="card-actions mb-1 text-sm">
  <span class="font-bold">MAHC 10:</span>
  <!-- {residentObj && residentObj.getAssessmentScore("MAHC10")
    ? residentObj.getAssessmentScore("MAHC10").Value
    : "None Listed"} -->
</div>
<div class="card-actions mb-1 text-sm">
  <span class="font-bold">SLUMs:</span>
  <!-- {residentObj && residentObj.getAssessmentScore("SLUMs")
    ? residentObj.getAssessmentScore("SLUMs").Value
    : "None Listed"} -->
</div>
<div class="card-actions mb-2 text-sm">
  <span class="font-bold">Medication Allergies:</span>
  {residentObj && residentObj.MedicationAllergies
    ? residentObj.MedicationAllergies
    : "None Listed"}
</div>

<AspireCollapsibleSection label="As-Needed Meds:" headerClass="text-lg">
  <!-- {#if residentObj && residentObj.PRNMedsContainer && residentObj.PRNMedsContainer.objList.length > 0}
    <AspireInputTable
      bind:allRows={residentObj.PRNMedsContainer.objList}
      initialOrderAscending="true"
      initialOrderCol="0"
      cols={medsTableFormat}
    />
  {:else} -->
  None
  <!-- {/if} -->
</AspireCollapsibleSection>
<AspireCollapsibleSection label="Scheduled Meds:" headerClass="text-lg">
  <!-- {#if residentObj && residentObj.scheduledMedsContainer && residentObj.scheduledMedsContainer.objList.length > 0}
    <AspireInputTable
      bind:allRows={residentObj.scheduledMedsContainer.objList}
      initialOrderAscending="true"
      initialOrderCol="0"
      cols={medsTableFormat}
    />
  {:else} -->
  None
  <!-- {/if} -->
</AspireCollapsibleSection>
<AspireCollapsibleSection label="Diagnoses:" headerClass="text-lg">
  <div class="content">
    {residentObj && residentObj.Diagnoses
      ? residentObj.Diagnoses
      : "None Listed"}
  </div>
</AspireCollapsibleSection>
<div class="card-actions" />
<!-- <AspireResidentContacts
  headerText={"Contacts:"}
  bind:residentContacts
  bind:residentObj
/> -->
