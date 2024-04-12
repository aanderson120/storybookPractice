<script>
  import moment from "moment";
  import AspireContainer from "./stories/stories/AspireContainer.svelte";
  import TopNav from "./stories/stories/TopNav.svelte";
  import Drawer from "./stories/stories/Drawer.svelte";
  import AspireCard from "./stories/stories/AspireCard.svelte";
  import AspireNurseNote from "./stories/stories/AspireNurseNote.svelte";
  import AspireRow from "./stories/stories/AspireRow.svelte";
  import AspireHeader from "./stories/stories/AspireHeader.svelte";
  import AspireLocalSave from "./stories/stories/AspireLocalSave.svelte";
  import AspireFormQuestion from "./stories/stories/AspireFormQuestion.svelte";
  import AspireTextInput from "./stories/stories/AspireTextInput.svelte";
  import AspireDatePicker from "./stories/stories/AspireDatePicker.svelte";
  import AspireCheckbox from "./stories/stories/AspireCheckbox.svelte";
  import AspireDateTimePicker from "./stories/stories/AspireDateTimePicker.svelte";
  import AspireTextArea from "./stories/stories/AspireTextArea.svelte";
  import AspireButton from "./stories/stories/AspireButton.svelte";

  let allCustomers = [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }];
  let allCampuses = [
    { displayVal: "A Test Campus" },
    { displayVal: "Alexandria" },
    { displayVal: "Baxter" },
    { displayVal: "Belgrade" },
    { displayVal: "Billings" },
  ];
  let selectedCustomer = {};
  let selectedCampus = {
    CampusName: "A Test Campus",
  };

  let providerScheduled = false;
  let atceventopenevents = [
    {
      displayVal: "Martin Alwauysfalls",
      EventSK: "6156445",
      ResidentSK: "4060123",
      ResidentLastName: "Alwauysfalls",
      ResidentFirstName: "Martin",
      ResidentDOB: "1930-02-01",
      DateOfFall: "2023-06-15T21:00:00Z",
      CampusName: "A Test Campus",
      residentObj: {
        BradenScore: "-1",
        CampusId: "RTasks2",
        CampusName: "A Test Campus",
        CareStatus: "Active",
        CodeStatus: "DNR",
        DateOfAdmission: "2023-02-01",
        Diagnoses: "chronic pain syndrome",
        Diet: "Portions, Large",
        EmailSent: false,
        FoodAllergies: "Lactose, Apples",
        Gender: "Male",
        Height: "5' 10",
        MAHC10Score: "9",
        MaritalStatus: "married",
        MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
        Nickname: "*not provided*",
        OtherAllergies: "Environmental",
        Phone: "2187238905",
        Photo:
          "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
        PrimaryProvider: "Dr. Smith",
        ProductLine: "Assisted Living",
        Religion: "Lutheran",
        ResidentDOB: "1930-02-01",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentPK: "1440477",
        SLUMsScore: "-1",
        UnitNumber: "310",
      },
    },
    {
      displayVal: "Betty Boop",
      EventSK: "6156451",
      ResidentSK: "2405",
      ResidentLastName: "Boop",
      ResidentFirstName: "Betty",
      ResidentDOB: "02/11/1930",
      DateOfFall: "2023-06-15T21:00:00Z",
      CampusName: "A Test Campus",
      residentObj: {
        BradenScore: "-1",
        CampusId: "RTasks2",
        CampusName: "A Test Campus",
        CareStatus: "Active",
        CodeStatus: "DNR",
        DateOfAdmission: "2023-02-01",
        Diagnoses: "chronic pain syndrome",
        Diet: "Portions, Large",
        EmailSent: false,
        FoodAllergies: "Lactose, Apples",
        Gender: "Male",
        Height: "5' 10",
        MAHC10Score: "9",
        MaritalStatus: "married",
        MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
        Nickname: "*not provided*",
        OtherAllergies: "Environmental",
        Phone: "2187238905",
        Photo:
          "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
        PrimaryProvider: "Dr. Smith",
        ProductLine: "Assisted Living",
        Religion: "Lutheran",
        ResidentDOB: "1930-02-01",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentPK: "1440477",
        SLUMsScore: "-1",
        UnitNumber: "310",
      },
    },
  ];
  let selectedEvent = {
    residentObj: {
      BradenScore: "-1",
      CampusId: "RTasks2",
      CampusName: "A Test Campus",
      CareStatus: "Active",
      CodeStatus: "DNR",
      DateOfAdmission: "2023-02-01",
      Diagnoses: "chronic pain syndrome",
      Diet: "Portions, Large",
      EmailSent: "false",
      FoodAllergies: "Lactose",
      polypharm: {
        Antihypertensive: "",
        Diabetes: "",
        Antidepressants: "",
        Antisychotics: "",
        Pain: "",
        Supplement: "",
      },
    },
    skinRelated: false,
    skinSeverity: "",
    skinInverventions: "",
    injurySelected: "",
    injuryObservations: "",
    injuryInterventions: "",
    headInvolvementSelected: "",
    headInvolvementObservations: "",
    headInvolvementInterventions: "",
    emsSelected: "",
    emsCalled: "",
    transportedEMS: "",
    transportedEMSNotes: "",
    fallDetails: {
      PersonRecording: "",
      DateOfRecording: "",
      ProviderVisitScheduled: "",
      Narrative: "",
      Hypertension: false,
      Arrhythmia: false,
      FallReductionPlan: "",
      OnAntihypertensives: "",
      MAHC10Score: "",
      MAHC10ScoreDate: "",
      SLUMSScore: "",
      SLUMSScoreDate: "",
    },
    eventTemp: "",
    eventPulse: "",
    eventRespiration: "",
    eventBP: "",
    responsibleParty: false,
    responsiblePartyName: "",
    responsiblePartyDate: "",
    primaryPhysician: false,
    physicianName: "",
    notificationDate: "",
    Hypertension: false,
    OnAntihypertensives: "",
    Arrhythmia: false,
    orthostaticLast14Days: "",
    evidenceOfHypotension: "",
    hypoTensionDetails: "",
    inabilityToStandNotes: "",
    abletoStand: "",
    anticoagulationObservations: "",
    anticoagulationInterventions: "",
    anticoagulationSelected: "",
    homeHealth: "",
    homeHealthEmail: "",
    hospice: "",
    hospiceEmail: "",
    outpatient: "",
    outpatientEmail: "",
    protocolsEntered: "",
    activeInfection: "",
    activeInfectionDetails: "",
    increasedSusceptibility: "",
    susceptibilityInterventions: "",
    additionalEventInfo: "",
    includeFallSummary: false,
    ResidentLastName: "Alwauysfalls",
    ResidentFirstName: "Martin",
    ResidentDOB: "1930-02-01",
    DateOfFall: "2023-06-15T21:00:00Z",
    ProviderVisitScheduled: false,
  };
  let submitButtonPush = () => {};

  // showCampusListOnPage is used to communicate between pages and the Nav.svelte banner at the top.
  // On some pages, only the customer is selected as the page crosses campus boundaries.

  let numFallInLast90Days;

  let notifiedVia = "the Access to Care Dashboard";
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<TopNav
  {allCustomers}
  {allCampuses}
  {atceventopenevents}
  bind:selectedCustomer
  bind:selectedCampus
  bind:selectedEvent
/>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<form class="sm:!pl-64" id="falls-form">
  <AspireContainer className="mb-4">
    <div class="w-full">
      <Drawer bind:residentObj={selectedEvent.residentObj}>
        <fieldset class="md:mr-[366px]">
          <aside
            class="flex
            md:fixed
            md:mr-5
            md:top-[275px]
            w-auto
            md:max-w-[30%]
            right-0"
          >
            <AspireCard asideCard>
              <AspireNurseNote event="Falls" {selectedEvent} {submitButtonPush}>
                <br />
                {#if (selectedEvent.fallDetails && selectedEvent.fallDetails.ProviderVisitScheduled === "Yes") || providerScheduled}
                  This resident has been scheduled with the medical director.
                  <br /><br />
                {/if}

                <p class="mb-4">
                  This writer was notified via {notifiedVia} that {selectedEvent
                    ? selectedEvent.ResidentFirstName
                    : ""}
                  {selectedEvent ? selectedEvent.ResidentLastName : ""} (DOB: {selectedEvent
                    ? selectedEvent.ResidentDOB
                    : ""}) experienced a fall on {selectedEvent
                    ? moment(selectedEvent.DateOfFall)
                        .local()
                        .format("ddd, MMM DD, YYYY")
                    : ""} at {selectedEvent
                    ? moment(selectedEvent.DateOfFall)
                        .local()
                        .format("HH:mm:ss")
                    : ""}. {#if selectedEvent.emsSelected}EMS was notified on {selectedEvent.emsCalled}.
                    {#if !selectedEvent.transportedEMS}Resident was not
                      transported via EMS.{/if}
                    {#if selectedEvent.transportedEMS}Resident was transported
                      via EMS at {selectedEvent.transportedEMSNotes}.{/if}{/if}

                  {#if selectedEvent.injurySelected}
                    The resident did experience an injury. {#if selectedEvent.injuryObservations}{selectedEvent.injuryObservations.replace(
                        /\.$/,
                        ""
                      )}.{/if}
                    {#if selectedEvent.skinRelated}
                      The resident has a skin integrity concern. {#if selectedEvent.skinObservations}{selectedEvent.skinObservations.replace(
                          /\.$/,
                          ""
                        )}.{/if}
                    {/if}
                  {:else}
                    The resident did not experience an injury.
                  {/if}
                  {#if selectedEvent.headInvolvementSelected}
                    The resident did experience actual or suspected head
                    involvement. {#if selectedEvent.headInvolvementObservations}{selectedEvent.headInvolvementObservations.replace(
                        /\.$/,
                        ""
                      )}.{/if}
                  {:else}
                    The resident did not experience actual or suspected head
                    involvement.
                  {/if}
                  {#if selectedEvent.anticoagulationSelected}
                    The resident is receiving anticoagulation therapy {selectedEvent.anticoagulationObservations}.
                  {/if}
                  {#if selectedEvent.orthostaticLast14Days}
                    The resident has had orthostatic blood pressure checks 1
                    time per day for 3 days, including heart rate within the
                    last 60 days.
                    {#if selectedEvent.evidenceOfHypotension}
                      Previously monitored orthostatic blood pressures indicated
                      orthostatic hypotension: {selectedEvent.hypotensionDetails}.
                      See the vital signs flow sheet for further information.
                    {:else}
                      The previously checked orthostatic pressures were WNL.
                    {/if}
                  {/if}
                  {#if selectedEvent.fallDetails.Hypertension}
                    The resident does have a diagnosis of hypertension.
                  {:else}
                    The resident does not have a diagnosis of hypertension.
                  {/if}
                  {#if selectedEvent.fallDetails.Arrhythmia}
                    The resident does have a diagnosis of cardiac arrhythmia{#if selectedEvent.cardiacArrhythmiaNotes}:
                      {selectedEvent.cardiacArrhythmiaNotes}.{:else}.{/if}
                  {:else}
                    The resident does not have a diagnosis of cardiac
                    arrhythmia.
                  {/if}
                  {#if selectedEvent.ableToStand}
                    The resident is able to stand with or without assistance.
                  {:else}
                    The resident is not able to stand with or without
                    assistance. {#if selectedEvent.inabilityToStandNotes}{selectedEvent.inabilityToStandNotes}{/if}
                  {/if}
                  Vital signs are – T {selectedEvent.eventTemp || ""}, P {selectedEvent.eventPulse ||
                    ""}, R {selectedEvent.eventRespiration || ""}, B/P {selectedEvent.eventBP ||
                    ""}.
                  {#if selectedEvent.MAHC10Score}
                    {#if selectedEvent.MAHC10ScoreDate}
                      Current MAHC 10 score is {selectedEvent.MAHC10Score} and was
                      obtained on
                      {selectedEvent.MAHC10ScoreDate}.
                    {:else}
                      Current MAHC 10 score is {selectedEvent.MAHC10Score}.
                    {/if}{/if}
                  {#if selectedEvent.SLUMSScore}
                    {#if selectedEvent.SLUMSScoreDate}
                      Current SLUMS/MMSE score is {selectedEvent.SLUMSScore} and
                      was obtained on
                      {selectedEvent.SLUMSScoreDate}.
                    {:else}
                      Current SLUMS/MMSE score is {selectedEvent.SLUMSScore}.
                    {/if}{/if}
                  {#if selectedEvent.activeInfection}
                    The resident has an active infection: {selectedEvent.activeInfectionDetails ||
                      ""}
                  {/if}
                  {#if selectedEvent.homeHealth}
                    The resident is on home health services.
                  {/if}
                  {#if selectedEvent.hospice}
                    The resident is on hospice services.
                  {/if}
                  {#if selectedEvent.outpatient}
                    The resident is on outpatient services.
                  {/if}
                  <br />
                </p>
                {#if selectedEvent.includeFallSummary}
                  <h6 class="font-light text-base mb-2">
                    Fall Summary From RTasks:
                  </h6>
                  <ul class="pl-10 mb-4">
                    <li>
                      "{selectedEvent.fallDetails &&
                      selectedEvent.fallDetails.Narrative
                        ? selectedEvent.fallDetails.Narrative
                        : ""}"
                    </li>
                    <li>
                      Written By: {selectedEvent.fallDetails
                        ? selectedEvent.fallDetails.PersonRecording == undefined
                          ? "Unknown"
                          : selectedEvent.fallDetails.PersonRecording
                        : ""}
                    </li>
                    <li>
                      Date: {selectedEvent.fallDetails
                        ? moment(selectedEvent.fallDetails.DateOfRecording)
                            .local()
                            .format("ddd, MMM DD, YYYY")
                        : ""}
                    </li>
                  </ul>
                {/if}
                {#if selectedEvent.increasedSusceptibility || selectedEvent.fallDetails.Arrhythmia || (selectedEvent.residentObj.medicalStatus && selectedEvent.fallDetails.OnAntihypertensives) || numFallInLast90Days > 0}
                  <h6 class="font-light text-base mb-2">
                    Increased Susceptibility to Falls:
                  </h6>
                  <ul class="pl-10 mb-4">
                    {#if selectedEvent.increasedSusceptibility}
                      <li>{selectedEvent.increasedSusceptibility}</li>
                    {/if}
                    {#if selectedEvent.residentObj.medicalStatus && selectedEvent.fallDetails.OnAntihypertensives}
                      <li>
                        This resident is taking one or more anti-hypertensive
                        medications.
                      </li>
                    {/if}
                    {#if selectedEvent.cardiacArrhythmia}
                      <li>
                        This resident has a diagnosis of cardiac arrhythmia.
                      </li>
                    {/if}
                    {#if numFallInLast90Days > 0}
                      <li>
                        The resident has had {numFallInLast90Days} falls in the last
                        90 days.
                      </li>
                    {/if}
                    {#if selectedEvent.susceptibilityInterventions}
                      <li>
                        Interventions: {selectedEvent.susceptibilityInterventions}
                      </li>
                    {/if}
                  </ul>
                {/if}

                {#if selectedEvent.additionalEventInfo}
                  <h6 class="font-light text-base mb-2">
                    Additonal Information:
                  </h6>
                  <p class="mb-4">
                    {selectedEvent.additionalEventInfo}
                    {#if selectedEvent.additionalInterventions}
                      Interventions: {selectedEvent.additionalInterventions}
                    {/if}
                  </p>
                {/if}
                <h5 class="text-lg font-light">Actions Taken</h5>
                <ul class="pl-10 mb-4">
                  <li class="list-disc">
                    Will complete focused assessment and upgrade the plan of
                    care as appropriate
                  </li>
                  {#if selectedEvent.placedProvider}<li>
                      Outside services have been notified of event.
                    </li>{/if}
                  {#if numFallInLast90Days >= 3}
                    {#if selectedEvent.placedFallReduction}
                      <li class="list-disc">
                        The resident is on a Fall Reduction Protocol. Will
                        review interventions and modify if necessary.
                      </li>
                    {:else}
                      <li class="list-disc">
                        The resident has been placed on the Fall Reduction
                        Protocol with individualized interventions.
                      </li>
                    {/if}
                  {:else if numFallInLast90Days < 3}
                    <li class="list-disc">
                      Will update the plan of care with interventions to
                      minimize falls.
                    </li>
                  {/if}
                  {#if selectedEvent.skinSeverity == "moderate" || selectedEvent.skinSeverity == "significant"}
                    <li class="list-disc" />
                    <li class="list-disc">
                      The resident has been placed on the Skin Protocol. A
                      licensed nurse will evaluate the wound weekly until
                      resolved.
                    </li>{/if}
                  {#if selectedEvent.protocolsEntered}<li>
                      The protocols have been entered on the residents Service
                      Plan.
                    </li>{/if}
                  {#if selectedEvent.skinRelated}
                    {#if selectedEvent.skinSeverity === "mild"}
                      <li class="list-disc">
                        Licensed Nurse will monitor until skin integrity issue
                        is resolved
                      </li>{/if}
                    {#if selectedEvent.skinSeverity === "moderate" || selectedEvent.skinSeverity === "significant"}
                      <li class="list-disc">
                        Licensed Nurse will monitor weekly until skin integrity
                        issue is resolved
                      </li>{/if}
                  {/if}
                </ul>
                {#if selectedEvent.injurySelected && selectedEvent.injuryInterventions}
                  <h6 class="font-light text-base mb-2">
                    Injury Interventions
                  </h6>
                  <ul class="pl-10 mb-4">
                    <li class="list-disc">
                      {selectedEvent.injuryInterventions}
                    </li>
                  </ul>
                {/if}
                {#if selectedEvent.injurySelected && selectedEvent.skinInterventions}
                  <h6 class="font-light text-base mb-2">Skin Interventions</h6>
                  <ul class="pl-10 mb-4">
                    <li class="list-disc">
                      {selectedEvent.skinInterventions}
                    </li>
                  </ul>
                {/if}
                {#if selectedEvent.headInvolvementSelected && selectedEvent.headInvolvementInterventions}
                  <h6 class="font-light text-base mb-2">
                    Head Involvement Interventions
                  </h6>
                  <ul class="pl-10 mb-4">
                    <li class="list-disc">
                      {selectedEvent.headInvolvementInterventions}
                    </li>
                  </ul>
                {/if}
                {#if selectedEvent.anticoagulationSelected && selectedEvent.anticoagulationInterventions}
                  <h6 class="font-light text-base mb-2">
                    Interventions due to Anticoagulation Therapy
                  </h6>
                  <ul class="pl-10 mb-4">
                    <li class="list-disc">
                      {selectedEvent.anticoagulationInterventions}
                    </li>
                  </ul>
                  <br />
                {/if}
                <h5 class="text-lg font-light">Polypharmacy</h5>
                <ul class="pl-10 mb-4">
                  {#if selectedEvent.residentObj.polypharm.Antihypertensive}
                    <li class="list-disc mt-3">
                      <b>Current Antihypertensives: </b>{selectedEvent
                        .residentObj.polypharm.Antihypertensive}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                  {#if selectedEvent.residentObj.polypharm.Diabetes}
                    <li class="list-disc mt-3">
                      <b>Current Diabetes Medications: </b>{selectedEvent
                        .residentObj.polypharm.Diabetes}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                  {#if selectedEvent.residentObj.polypharm.Antidepressant}
                    <li class="list-disc mt-3">
                      <b>Current Antidepressants: </b>{selectedEvent.residentObj
                        .polypharm.Antidepressant}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                  {#if selectedEvent.residentObj.polypharm.Antipsychotic}
                    <li class="list-disc mt-3">
                      <b>Current Antipsychotics: </b>{selectedEvent.residentObj
                        .polypharm.Antipsychotic}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                  {#if selectedEvent.residentObj.polypharm.Pain}
                    <li class="list-disc mt-3">
                      <b>Current Pain Medications: </b>{selectedEvent
                        .residentObj.polypharm.Pain}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                  {#if selectedEvent.residentObj.polypharm.Supplement}
                    <li class="list-disc mt-3">
                      <b>Current Vitamins & Supplements: </b>{selectedEvent
                        .residentObj.polypharm.Supplement}
                    </li>
                    <li class="mt-2 ml-3">
                      Physician Recommendation:
                      __________________________________________
                    </li>
                    <li class="ml-3 mt-2">
                      ___________________________________________________________________
                    </li>
                  {/if}
                </ul>
                <br />
                {#if selectedEvent.responsibleParty || selectedEvent.primaryPhysician}
                  <h5 class="text-lg font-light">Notified:</h5>
                  <ul class="pl-10 mb-4">
                    {#if selectedEvent.responsibleParty}
                      <li class="list-disc">
                        Responsible Party{#if selectedEvent.responsiblePartyName}:
                          {selectedEvent.responsiblePartyName}{/if}

                        {#if selectedEvent.responsiblePartyDate}
                          on {moment(selectedEvent.responsiblePartyDate)
                            .local()
                            .format("ddd, MMM DD, YYYY  HH:mm:ss")}{/if}
                      </li>
                    {/if}
                    {#if selectedEvent.primaryPhysician}
                      <li class="list-disc">
                        Primary Physician: {selectedEvent.physicianName}
                        {#if selectedEvent.notificationDate}
                          on {moment(selectedEvent.notificationDate)
                            .local()
                            .format("ddd, MMM DD, YYYY  HH:mm:ss")}{/if}
                      </li>
                    {/if}
                  </ul>
                  <br /><br />
                {/if}
              </AspireNurseNote>
            </AspireCard>
          </aside>
          <AspireRow className="justify-between max-w-[1000px]">
            <AspireCard size="md:w-[48%]">
              <AspireHeader label={"Nurse's Note - Controls"} />
              <div class="form-row ml-5">
                <label for="notifiedVia">
                  <h4 class="text-lg font-light mb-1">Notified Via:</h4>
                </label>
                <div class="col">
                  <input
                    id="notifiedVia"
                    type="text"
                    class="form-control"
                    bind:value={notifiedVia}
                    required
                  />
                </div>
              </div>
              <h6 class="mb-2">
                <i>
                  Fields marked with <span class="text-[#D42142]">*</span> are required.
                </i>
              </h6>

              <div class="relative block ml-1">
                <div>
                  <div class="mb-1">
                    <label class="ml-1" for="skinRelated">
                      <span class="text-[#D42142]">* </span>Experienced Skin
                      Related Injury?
                    </label>
                    <div class="float-right">
                      <label>
                        <input
                          type="radio"
                          checked={selectedEvent.skinRelated &&
                            typeof selectedEvent.skinRelated == "boolean"}
                          on:change={(e) =>
                            (selectedEvent.skinRelated =
                              e.currentTarget.value === "yes" ? true : false)}
                          value="yes"
                        /> Yes
                      </label>&nbsp;
                      <label for="">
                        <input
                          type="radio"
                          checked={!selectedEvent.skinRelated &&
                            typeof selectedEvent.skinRelated == "boolean"}
                          on:change={(e) =>
                            (selectedEvent.skinRelated =
                              e.currentTarget.value === "yes" ? true : false)}
                          value="no"
                        /> No
                      </label>
                    </div>
                  </div>

                  {#if selectedEvent.skinRelated}
                    <div class="mb-1">
                      <label for="skinSeverity">
                        What is the severity of the skin injury?
                      </label>&nbsp;
                      <div class="float-right">
                        <select
                          class="border"
                          bind:value={selectedEvent.skinSeverity}
                          name="skinSeverity"
                          id="skinSeverity"
                        >
                          <option value="mild">Mild</option>
                          <option value="moderate">Moderate</option>
                          <option value="significant">Significant</option>
                        </select>
                        <span class="buttonTooltip"
                          >&#9432;
                          <div class="tooltiptext -left-44">
                            <p>
                              Mild: minor cut scrape or abrasion requiring
                              minimal oversight.
                            </p>
                            <p>
                              Moderate: skin integrity issue requiring treatment
                              and clinical monitoring until resolved.
                            </p>
                            <p>
                              Significant: skin integrity issue that requires
                              medical intervention and or ongoing clinical
                              monitoring until resolved.
                            </p>
                          </div>
                        </span>
                      </div>

                      <div class="ml-2">
                        <div class="form-row mb-2">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control max-w-[90%]"
                              placeholder="* Skin Symptoms & Observations"
                              bind:value={selectedEvent.skinObservations}
                              required
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control max-w-[90%]"
                              placeholder="* Skin Interventions"
                              bind:value={selectedEvent.skinInterventions}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  {/if}
                </div>
                <br />

                <!-- Experienced additional injury? -->
                <AspireFormQuestion
                  with2Inputs
                  required={true}
                  label={"experiencedInjury"}
                  bind:value={selectedEvent.injurySelected}
                  question="Experienced additional injury?"
                  input1={selectedEvent.injuryObservations}
                  input2={selectedEvent.injuryInterventions}
                  placeholder="* Injury Symptoms & Observations"
                  placeholder2="* Injury Interventions"
                />

                <!-- Actual or Suspected Head Involvement? -->
                <AspireFormQuestion
                  with2Inputs
                  required={true}
                  label={"headInvolvement"}
                  bind:value={selectedEvent.headInvolvementSelected}
                  question={"Actual or suspected head involvement?"}
                  input1={selectedEvent.headInvolvementObservations}
                  input2={selectedEvent.headInvolvementInterventions}
                  placeholder="* Injury Symptoms & Observations"
                  placeholder2="* Injury Interventions"
                />

                <!-- EMS was Involved? -->
                <AspireFormQuestion
                  required={true}
                  label={"emsInvolved"}
                  question="EMS was Involved?"
                  bind:value={selectedEvent.emsSelected}
                  bind:emsCalled={selectedEvent.emsCalled}
                  bind:transportedEMS={selectedEvent.transportedEMS}
                  bind:transportedEMSNotes={selectedEvent.transportedEMSNotes}
                />

                <AspireLocalSave {selectedEvent} />
              </div></AspireCard
            >

            <AspireCard size="md:w-[48%]">
              <AspireHeader label={"Fall Summary From RTasks"} />
              <div class="form-group">
                <p>
                  <i
                    >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."</i
                  >
                </p>
                <div class="ml-12 text-base">
                  <p>
                    Written By: {selectedEvent.fallDetails
                      ? selectedEvent.fallDetails.PersonRecording == undefined
                        ? "Unknown"
                        : selectedEvent.fallDetails.PersonRecording
                      : ""}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Date: {selectedEvent.fallDetails
                      ? moment(selectedEvent.fallDetails.DateOfRecording)
                          .local()
                          .format("ddd, MMM DD, YYYY")
                      : ""}
                  </p>
                </div>
              </div>
              <AspireFormQuestion
                question="Should the fall summary be included in note?"
                value="selectedEvent.includeFallSummary"
                label="includeFallSummary"
              />

              <br />
              <AspireHeader label={"Evaluation Vital Signs"} />
              <div class="form-row">
                <AspireTextInput
                  bind:value={selectedEvent.eventTemp}
                  placeholder={"Temperature"}
                  id={"eventTemp"}
                  required={true}
                  size="20"
                />
                <AspireTextInput
                  bind:value={selectedEvent.eventPulse}
                  placeholder={"Pulse"}
                  id={"eventPulse"}
                  size="20"
                />
                <AspireTextInput
                  bind:value={selectedEvent.eventRespiration}
                  placeholder={"Respiration"}
                  id={"eventRespiration"}
                  size="20"
                />
                <AspireTextInput
                  bind:value={selectedEvent.eventBP}
                  placeholder={"Blood Pressure"}
                  id={"eventBP"}
                  size="20"
                />
              </div>

              <AspireLocalSave {selectedEvent} />
            </AspireCard>
          </AspireRow>

          <AspireRow className="justify-between max-w-[1000px]">
            <AspireCard>
              <AspireHeader label={"Notifications"} />
              <div class="form-group">
                <span>Who was notified:</span>
                <AspireCheckbox
                  id={"responsibleParty"}
                  label={"Responsible Party"}
                />
                {#if selectedEvent.responsibleParty}
                  <AspireTextInput
                    bind:value={selectedEvent.responsiblePartyName}
                    placeholder={"Name"}
                    id={"responsiblePartyName"}
                    required={true}
                    size="20"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label for="responsiblePartyDate">Date: </label>
                  <AspireDateTimePicker
                    placeholder="Notification Date"
                    size="20"
                    bind:value={selectedEvent.responsiblePartyDate}
                  />
                {/if}
                <AspireCheckbox
                  id={"primaryPhysician"}
                  label={"Primary Physician"}
                />
                {#if selectedEvent.primaryPhysician}
                  <AspireTextInput
                    bind:value={selectedEvent.physicianName}
                    placeholder={"Physician Name"}
                    id={"physicianName"}
                    required={true}
                    size="20"
                  />&nbsp;&nbsp;&nbsp;
                  <label for="notificationDate">Date: </label>
                  <AspireDateTimePicker
                    placeholder="Notification Date"
                    size="20"
                    bind:value={selectedEvent.notificationDate}
                  />
                {/if}
              </div>
              <!-- Does the resident have a diagnosis of hypertension? -->
              <AspireFormQuestion
                required={true}
                question={"Does the resident have a diagnosis of hypertension?"}
                bind:value={selectedEvent.Hypertension}
                label={"hypertensionDiagnosis"}
              />
              <!-- Is the resident on anti-hypertensive medication? -->
              <AspireFormQuestion
                required={true}
                bind:value={selectedEvent.OnAntihypertensives}
                question={"Is the resident on anti-hypertensive medication?"}
                label={"OnHypertensive"}
              />
              <!-- Does the resident have a diagnosis of cardiac arrhythmia? -->
              <AspireFormQuestion
                withText
                required={true}
                question={"Does the resident have a diagnosis of cardiac arrhythmia?"}
                bind:additionalInfo={selectedEvent.cardiacArrhythmiaNotes}
                placeholder={"Cardiac Arrhythmia Details"}
                label={"cardiacArrhythmia"}
                bind:value={selectedEvent.Arrhythmia}
              />

              {#if selectedEvent.Hypertension || selectedEvent.Arrhythmia}
                <!-- Was there evidence of orthostatic hypotension from those previous readings? -->
                <AspireFormQuestion
                  required={true}
                  question={`Has the resident had orthostatic blood pressure taken in the last 60 days?`}
                  bind:value={selectedEvent.orthostaticLast14Days}
                  label={"orthostaticLast14Days"}
                />
                {#if selectedEvent.orthostaticLast14Days}
                  <!-- Was there evidence of orthostatic hypotension from those previous readings? -->
                  <AspireFormQuestion
                    withText
                    required={true}
                    question={`Was there evidence of orthostatic hypotension from those previous readings?`}
                    additionalInfo={selectedEvent.hypotensionDetails}
                    placeholder="(Please enter more information)"
                    label={"evidenceOfHypotension"}
                    bind:value={selectedEvent.evidenceOfHypotension}
                  />
                {/if}
              {/if}
              <!-- Is the resident able to stand with or without assistance? -->
              <AspireFormQuestion
                infoNegative
                required={true}
                question={"Is the resident able to stand with or without assistance?"}
                bind:additionalInfo={selectedEvent.inabilityToStandNotes}
                placeholder={"Inability To Stand Details"}
                label={"ableToStand"}
                bind:value={selectedEvent.ableToStand}
              />
              <!-- Is the resident currently receiving anticoagulation therapy? -->
              <AspireFormQuestion
                with2Inputs
                required={true}
                question={"Is the resident currently receiving anticoagulation therapy?"}
                input1={selectedEvent.anticoagulationObservations}
                input2={selectedEvent.anticoagulationInterventions}
                placeholder="Input 1"
                placeholder2="Input 2"
                label={"anticoagulation"}
                bind:value={selectedEvent.anticoagulationSelected}
              />
              <!-- Is the resident on home health services? -->
              <AspireFormQuestion
                email
                required={true}
                question={"Is the resident on home health services?"}
                bind:additionalInfo={selectedEvent.homeHealthEmail}
                placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                value={selectedEvent.homeHealth}
                label={"homeHealth"}
              />
              <!-- Is the resident on hospice services? -->
              <AspireFormQuestion
                email
                required={true}
                question={"Is the resident on hospice services?"}
                bind:additionalInfo={selectedEvent.hospiceEmail}
                placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                value={selectedEvent.hospice}
                label={"hospice"}
              />
              <!-- Is the resident on outpatient services? -->
              <AspireFormQuestion
                email
                required={true}
                question={"Is the resident on outpatient services?"}
                bind:additionalInfo={selectedEvent.outpatientEmail}
                placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                value={selectedEvent.outpatient}
                label={"outpatient"}
              />
              {#if numFallInLast90Days >= 3}
                <!-- Is the resident on a fall reduction protocol? -->
                <AspireFormQuestion
                  question={"Is the resident on a fall reduction protocol?"}
                  bind:value={selectedEvent.fallDetails.FallReductionPlan}
                  label={"placedFallReduction"}
                />
              {/if}
              <!-- The protocols have been entered on the resident's service plan/care plan. -->
              <AspireFormQuestion
                required={true}
                bind:value={selectedEvent.protocolsEntered}
                question={`The protocols have been entered on the resident's service plan/care plan.`}
                label={"protocolsEntered"}
              />

              <!-- Does the resident have an active infection? -->
              <AspireFormQuestion
                withText
                required={true}
                question={"Does the resident have an active infection?"}
                bind:additionalInfo={selectedEvent.activeInfectionDetails}
                placeholder={"What is the infection?"}
                label={"activeInfection"}
                bind:value={selectedEvent.activeInfection}
              />
              <br />

              <!-- Please add any information regarding the resident's increased susceptibility to falls here. (optional) -->
              <AspireTextArea
                label={"Increased Susceptibility to Falls"}
                bind:text={selectedEvent.increasedSusceptibility}
                id="increasedSusceptibility"
                placeholder="Please add any information regarding the resident's increased susceptibility to falls here. (optional)"
              />
              {#if selectedEvent.increasedSusceptibility}
                <AspireTextInput
                  bind:value={selectedEvent.susceptibilityInterventions}
                  placeholder="Increased Fall Susceptibility Interventions"
                  size={50}
                />
              {/if}
              <br />

              <AspireTextArea
                label={"Additional Information"}
                bind:text={selectedEvent.additionalEventInfo}
                id="increasedSusceptibility"
                placeholder="Please add any additional information for your Nurse's Note here. (optional)"
              />
              <AspireLocalSave {selectedEvent} />
            </AspireCard>
          </AspireRow>
          <!-- <div class="card shadowl-xl p-4 my-4 !rounded-none">
          <span id="formattedNurseNote">
            <AspireHeader label={"Nurse's Note"} />
            <h6 class="font-light text-base mb-2">
              Resident's Name (DOB): {selectedEvent
                ? selectedEvent.ResidentFirstName
                : ""}
              {selectedEvent ? selectedEvent.ResidentLastName : ""} ({selectedEvent
                ? selectedEvent.ResidentDOB
                : ""})
            </h6>
            <h6 class="font-light text-base mb-2">
              Campus: {selectedEvent ? selectedEvent.CampusName : ""}
            </h6>
            <h6 class="font-light text-base mb-2">
              Event Date and Time: {selectedEvent
                ? moment(selectedEvent.DateOfFall)
                    .local()
                    .format("ddd, MMM DD, YYYY  HH:mm:ss")
                : ""}
            </h6>
            <br />
            {#if (selectedEvent.fallDetails && selectedEvent.fallDetails.ProviderVisitScheduled === "Yes") || providerScheduled}
              This resident has been scheduled with the medical director.
              <br /><br />
            {/if}

            <p class="mb-4">
              This writer was notified via {notifiedVia} that {selectedEvent
                ? selectedEvent.ResidentFirstName
                : ""}
              {selectedEvent ? selectedEvent.ResidentLastName : ""} (DOB: {selectedEvent
                ? selectedEvent.ResidentDOB
                : ""}) experienced a fall on {selectedEvent
                ? moment(selectedEvent.DateOfFall)
                    .local()
                    .format("ddd, MMM DD, YYYY")
                : ""} at {selectedEvent
                ? moment(selectedEvent.DateOfFall).local().format("HH:mm:ss")
                : ""}. {#if selectedEvent.emsSelected}EMS was notified on {selectedEvent.emsCalled}.
                {#if !selectedEvent.transportedEMS}Resident was not transported
                  via EMS.{/if}
                {#if selectedEvent.transportedEMS}Resident was transported via
                  EMS at {selectedEvent.transportedEMSNotes}.{/if}{/if}

              {#if selectedEvent.injurySelected}
                The resident did experience an injury. {#if selectedEvent.injuryObservations}{selectedEvent.injuryObservations.replace(
                    /\.$/,
                    ""
                  )}.{/if}
                {#if selectedEvent.skinRelated}
                  The resident has a skin integrity concern. {#if selectedEvent.skinObservations}{selectedEvent.skinObservations.replace(
                      /\.$/,
                      ""
                    )}.{/if}
                {/if}
              {:else}
                The resident did not experience an injury.
              {/if}
              {#if selectedEvent.headInvolvementSelected}
                The resident did experience actual or suspected head
                involvement. {#if selectedEvent.headInvolvementObservations}{selectedEvent.headInvolvementObservations.replace(
                    /\.$/,
                    ""
                  )}.{/if}
              {:else}
                The resident did not experience actual or suspected head
                involvement.
              {/if}
              {#if selectedEvent.anticoagulationSelected}
                The resident is receiving anticoagulation therapy {selectedEvent.anticoagulationObservations}.
              {/if}
              {#if selectedEvent.orthostaticLast14Days}
                The resident has had orthostatic blood pressure checks 1 time
                per day for 3 days, including heart rate within the last 60
                days.
                {#if selectedEvent.evidenceOfHypotension}
                  Previously monitored orthostatic blood pressures indicated
                  orthostatic hypotension: {selectedEvent.hypotensionDetails}.
                  See the vital signs flow sheet for further information.
                {:else}
                  The previously checked orthostatic pressures were WNL.
                {/if}
              {/if}
              {#if selectedEvent.fallDetails.Hypertension}
                The resident does have a diagnosis of hypertension.
              {:else}
                The resident does not have a diagnosis of hypertension.
              {/if}
              {#if selectedEvent.fallDetails.Arrhythmia}
                The resident does have a diagnosis of cardiac arrhythmia{#if selectedEvent.cardiacArrhythmiaNotes}:
                  {selectedEvent.cardiacArrhythmiaNotes}.{:else}.{/if}
              {:else}
                The resident does not have a diagnosis of cardiac arrhythmia.
              {/if}
              {#if selectedEvent.ableToStand}
                The resident is able to stand with or without assistance.
              {:else}
                The resident is not able to stand with or without assistance. {#if selectedEvent.inabilityToStandNotes}{selectedEvent.inabilityToStandNotes}{/if}
              {/if}
              Vital signs are – T {selectedEvent.eventTemp || ""}, P {selectedEvent.eventPulse ||
                ""}, R {selectedEvent.eventRespiration || ""}, B/P {selectedEvent.eventBP ||
                ""}.
              {#if selectedEvent.MAHC10Score}
                {#if selectedEvent.MAHC10ScoreDate}
                  Current MAHC 10 score is {selectedEvent.MAHC10Score} and was obtained
                  on
                  {selectedEvent.MAHC10ScoreDate}.
                {:else}
                  Current MAHC 10 score is {selectedEvent.MAHC10Score}.
                {/if}{/if}
              {#if selectedEvent.SLUMSScore}
                {#if selectedEvent.SLUMSScoreDate}
                  Current SLUMS/MMSE score is {selectedEvent.SLUMSScore} and was
                  obtained on
                  {selectedEvent.SLUMSScoreDate}.
                {:else}
                  Current SLUMS/MMSE score is {selectedEvent.SLUMSScore}.
                {/if}{/if}
              {#if selectedEvent.activeInfection}
                The resident has an active infection: {selectedEvent.activeInfectionDetails ||
                  ""}
              {/if}
              {#if selectedEvent.homeHealth}
                The resident is on home health services.
              {/if}
              {#if selectedEvent.hospice}
                The resident is on hospice services.
              {/if}
              {#if selectedEvent.outpatient}
                The resident is on outpatient services.
              {/if}
              <br />
            </p>
            {#if selectedEvent.includeFallSummary}
              <h6 class="font-light text-base mb-2">
                Fall Summary From RTasks:
              </h6>
              <ul class="pl-10 mb-4">
                <li>
                  "{selectedEvent.fallDetails &&
                  selectedEvent.fallDetails.Narrative
                    ? selectedEvent.fallDetails.Narrative
                    : ""}"
                </li>
                <li>
                  Written By: {selectedEvent.fallDetails
                    ? selectedEvent.fallDetails.PersonRecording == undefined
                      ? "Unknown"
                      : selectedEvent.fallDetails.PersonRecording
                    : ""}
                </li>
                <li>
                  Date: {selectedEvent.fallDetails
                    ? moment(selectedEvent.fallDetails.DateOfRecording)
                        .local()
                        .format("ddd, MMM DD, YYYY")
                    : ""}
                </li>
              </ul>
            {/if}
            {#if selectedEvent.increasedSusceptibility || selectedEvent.fallDetails.Arrhythmia || (selectedEvent.residentObj.medicalStatus && selectedEvent.fallDetails.OnAntihypertensives) || numFallInLast90Days > 0}
              <h6 class="font-light text-base mb-2">
                Increased Susceptibility to Falls:
              </h6>
              <ul class="pl-10 mb-4">
                {#if selectedEvent.increasedSusceptibility}
                  <li>{selectedEvent.increasedSusceptibility}</li>
                {/if}
                {#if selectedEvent.residentObj.medicalStatus && selectedEvent.fallDetails.OnAntihypertensives}
                  <li>
                    This resident is taking one or more anti-hypertensive
                    medications.
                  </li>
                {/if}
                {#if selectedEvent.cardiacArrhythmia}
                  <li>This resident has a diagnosis of cardiac arrhythmia.</li>
                {/if}
                {#if numFallInLast90Days > 0}
                  <li>
                    The resident has had {numFallInLast90Days} falls in the last
                    90 days.
                  </li>
                {/if}
                {#if selectedEvent.susceptibilityInterventions}
                  <li>
                    Interventions: {selectedEvent.susceptibilityInterventions}
                  </li>
                {/if}
              </ul>
            {/if}

            {#if selectedEvent.additionalEventInfo}
              <h6 class="font-light text-base mb-2">Additonal Information:</h6>
              <p class="mb-4">
                {selectedEvent.additionalEventInfo}
                {#if selectedEvent.additionalInterventions}
                  Interventions: {selectedEvent.additionalInterventions}
                {/if}
              </p>
            {/if}
            <h5 class="text-lg font-light">Actions Taken</h5>
            <ul class="pl-10 mb-4">
              <li class="list-disc">
                Will complete focused assessment and upgrade the plan of care as
                appropriate
              </li>
              {#if selectedEvent.placedProvider}<li>
                  Outside services have been notified of event.
                </li>{/if}
              {#if numFallInLast90Days >= 3}
                {#if selectedEvent.placedFallReduction}
                  <li class="list-disc">
                    The resident is on a Fall Reduction Protocol. Will review
                    interventions and modify if necessary.
                  </li>
                {:else}
                  <li class="list-disc">
                    The resident has been placed on the Fall Reduction Protocol
                    with individualized interventions.
                  </li>
                {/if}
              {:else if numFallInLast90Days < 3}
                <li class="list-disc">
                  Will update the plan of care with interventions to minimize
                  falls.
                </li>
              {/if}
              {#if selectedEvent.skinSeverity == "moderate" || selectedEvent.skinSeverity == "significant"}
                <li class="list-disc" />
                <li class="list-disc">
                  The resident has been placed on the Skin Protocol. A licensed
                  nurse will evaluate the wound weekly until resolved.
                </li>{/if}
              {#if selectedEvent.protocolsEntered}<li>
                  The protocols have been entered on the residents Service Plan.
                </li>{/if}
              {#if selectedEvent.skinRelated}
                {#if selectedEvent.skinSeverity === "mild"}
                  <li class="list-disc">
                    Licensed Nurse will monitor until skin integrity issue is
                    resolved
                  </li>{/if}
                {#if selectedEvent.skinSeverity === "moderate" || selectedEvent.skinSeverity === "significant"}
                  <li class="list-disc">
                    Licensed Nurse will monitor weekly until skin integrity
                    issue is resolved
                  </li>{/if}
              {/if}
            </ul>
            {#if selectedEvent.injurySelected && selectedEvent.injuryInterventions}
              <h6 class="font-light text-base mb-2">Injury Interventions</h6>
              <ul class="pl-10 mb-4">
                <li class="list-disc">
                  {selectedEvent.injuryInterventions}
                </li>
              </ul>
            {/if}
            {#if selectedEvent.injurySelected && selectedEvent.skinInterventions}
              <h6 class="font-light text-base mb-2">Skin Interventions</h6>
              <ul class="pl-10 mb-4">
                <li class="list-disc">
                  {selectedEvent.skinInterventions}
                </li>
              </ul>
            {/if}
            {#if selectedEvent.headInvolvementSelected && selectedEvent.headInvolvementInterventions}
              <h6 class="font-light text-base mb-2">
                Head Involvement Interventions
              </h6>
              <ul class="pl-10 mb-4">
                <li class="list-disc">
                  {selectedEvent.headInvolvementInterventions}
                </li>
              </ul>
            {/if}
            {#if selectedEvent.anticoagulationSelected && selectedEvent.anticoagulationInterventions}
              <h6 class="font-light text-base mb-2">
                Interventions due to Anticoagulation Therapy
              </h6>
              <ul class="pl-10 mb-4">
                <li class="list-disc">
                  {selectedEvent.anticoagulationInterventions}
                </li>
              </ul>
              <br />
            {/if}
            <h5 class="text-lg font-light">Polypharmacy</h5>
            <ul class="pl-10 mb-4">
              {#if selectedEvent.residentObj.polypharm.Antihypertensive}
                <li class="list-disc mt-3">
                  <b>Current Antihypertensives: </b>{selectedEvent.residentObj
                    .polypharm.Antihypertensive}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
              {#if selectedEvent.residentObj.polypharm.Diabetes}
                <li class="list-disc mt-3">
                  <b>Current Diabetes Medications: </b>{selectedEvent
                    .residentObj.polypharm.Diabetes}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
              {#if selectedEvent.residentObj.polypharm.Antidepressant}
                <li class="list-disc mt-3">
                  <b>Current Antidepressants: </b>{selectedEvent.residentObj
                    .polypharm.Antidepressant}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
              {#if selectedEvent.residentObj.polypharm.Antipsychotic}
                <li class="list-disc mt-3">
                  <b>Current Antipsychotics: </b>{selectedEvent.residentObj
                    .polypharm.Antipsychotic}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
              {#if selectedEvent.residentObj.polypharm.Pain}
                <li class="list-disc mt-3">
                  <b>Current Pain Medications: </b>{selectedEvent.residentObj
                    .polypharm.Pain}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
              {#if selectedEvent.residentObj.polypharm.Supplement}
                <li class="list-disc mt-3">
                  <b>Current Vitamins & Supplements: </b>{selectedEvent
                    .residentObj.polypharm.Supplement}
                </li>
                <li class="mt-2 ml-3">
                  Physician Recommendation:
                  __________________________________________
                </li>
                <li class="ml-3 mt-2">
                  ___________________________________________________________________
                </li>
              {/if}
            </ul>
            <br />
            {#if selectedEvent.responsibleParty || selectedEvent.primaryPhysician}
              <h5 class="text-lg font-light">Notified:</h5>
              <ul class="pl-10 mb-4">
                {#if selectedEvent.responsibleParty}
                  <li class="list-disc">
                    Responsible Party{#if selectedEvent.responsiblePartyName}:
                      {selectedEvent.responsiblePartyName}{/if}

                    {#if selectedEvent.responsiblePartyDate}
                      on {moment(selectedEvent.responsiblePartyDate)
                        .local()
                        .format("ddd, MMM DD, YYYY  HH:mm:ss")}{/if}
                  </li>
                {/if}
                {#if selectedEvent.primaryPhysician}
                  <li class="list-disc">
                    Primary Physician: {selectedEvent.physicianName}
                    {#if selectedEvent.notificationDate}
                      on {moment(selectedEvent.notificationDate)
                        .local()
                        .format("ddd, MMM DD, YYYY  HH:mm:ss")}{/if}
                  </li>
                {/if}
              </ul>
              <br /><br />
            {/if}
          </span>
          <AspireButton
            primary
            label="Close Event and Send Note"
            clickFn={submitButtonPush}
          ></AspireButton>
        </div> -->
        </fieldset>
      </Drawer>
    </div>
  </AspireContainer>
</form>

<style>
  .d-flex {
    display: flex;
  }
  .buttonTooltip {
    position: relative !important;
    display: inline-block;
    opacity: 1;
    cursor: help;
  }

  .tooltiptext {
    visibility: hidden;
    width: 350px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }

  .buttonTooltip:hover .tooltiptext {
    visibility: visible;
  }

  .scroll {
    overflow-y: auto;
  }
  .scroll::-webkit-scrollbar {
    width: 10px;
  }

  .scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #cccaca;
    border-radius: 1rem;
  }
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .col {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
  }
  .form-row .col {
    padding-right: 5px;
    padding-left: 5px;
  }
  .form-control {
    flex-direction: row;
    display: flex;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
</style>
