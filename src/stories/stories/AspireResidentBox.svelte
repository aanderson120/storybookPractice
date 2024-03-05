<script>
  // AspireResidentBox.svelte
  // Component for display of resident info common to multiple pages.
  // Current options: Common resident details, falls history, recent nurse notes, glucose readings
  // The component fills the resident object containers for some of these on demand, that is, when
  // the collapsible section that holds each is expanded.
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
  import AspireResidentCommonInfo from "./AspireResidentCommonInfo.svelte";
  import AspireCollapsibleSection from "./Completed/AspireCollapsibleSection.svelte";
</script>

<AspireCollapsibleSection label="Resident Details" headerClass="text-xl">
  <AspireResidentCommonInfo bind:residentObj />
</AspireCollapsibleSection>
<!-- <AspireCollapsibleSection
  headerText="Falls History"
  headerClass="text-lg"
  expandedCallBackFn={activateFalls}
>
  <AspireFallsHistory bind:residentObj />
</AspireCollapsibleSection> -->
<!-- <AspireCollapsibleSection
  headerText="Recent Nurse Notes"
  headerClass="text-lg"
  expandedCallBackFn={activateNurseNotes}
>
  {#if residentObj && residentObj.getContainer(AspireRecentResidentNursesNotes)}
    {#if residentObj.getContainer(AspireRecentResidentNursesNotes).objList.length > 0}
      <AspireInputTable
        trueFalse={TrueFalseTrueFalse}
        hoverText="Choose a note to view details."
        allRows={residentObj.getContainer(AspireRecentResidentNursesNotes)
          .objList}
        cols={nurseNoteViewFormat}
      />
    {:else}
      <h6 class="mb-2">None</h6>
    {/if}
  {:else}
    <h6 class="mb-2">...Loading data</h6>
  {/if}
</AspireCollapsibleSection> -->
<!-- {#if includeBloodSugarsHistory}
  <AspireCollapsibleSection
    headerText="Blood Sugar History"
    headerClass="text-lg"
  >
    <AspireMetricHistory metricType="Blood Sugar" , {residentObj} />
  </AspireCollapsibleSection>
{/if} -->
