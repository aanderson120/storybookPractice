<script>
  import { customer, campus } from "$lib/stores/auth";
  import {
    inputModal,
    errorModal,
    thisSession,
    showCampusListOnPage,
  } from "$lib/stores/shared";
  import { session } from "$app/stores";
  import moment from "moment";
  import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  import {
    ErrMsg$FatalErrorOnPage,
    AspireErrorAreas,
  } from "$lib/Classes/AspireError.js";

  import {
    getFallsLastXDays,
    shouldShowSchedule,
    setVitals,
    setFallSchedule,
  } from "$lib/utils";

  import Container from "$lib/components/Container.svelte";
  import Row from "$lib/components/Row.svelte";
  import AspireButton from "$lib/components/AspireButton.svelte";
  import EventTextInput from "$lib/components/Events/EventTextInput.svelte";
  import EventDatePicker from "$lib/components/Events/EventDatePicker.svelte";
  import AspireResidentBox from "$lib/components/Residents/AspireResidentBox.svelte";
  import EventCheckboxRequired from "$lib/components/Events/EventCheckboxRequired.svelte";
  import RadioSelectWithHiddenFields from "$lib/components/Events/RadioSelectWithHiddenFields.svelte";
  import AspireRadioSelect from "$lib/components/AspireRadioSelect.svelte";
  import EventTextArea from "$lib/components/Events/EventTextArea.svelte";
  import EventSelect from "$lib/components/Events/EventSelect.svelte";
  import EventRadioSelectWithEmail from "$lib/components/Events/EventRadioSelectWithEmail.svelte";
  import AspireRadioSelectWithInfo from "$lib/components/AspireRadioSelectWithInfo.svelte";
  import AdditionalInformation from "$lib/components/Events/AdditionalInformation.svelte";
  import AspireDefaultHeader from "$lib/components/AspireDefaultHeader.svelte";

  import { SANFORD_EMAIL, PROVIDER_EMAIL } from "$lib/config/constants";
  import {
    shouldSendProviderEmail,
    targetProviderEmail,
    isLegacy,
  } from "$lib/utils/campuses";
  import { AspireCommunication } from "$lib/Classes/AspireCommClasses.js";
  import { AspireOpenFallEvents } from "$lib/Classes/AspireEventClasses.js";
  import { AspireNursesNote } from "$lib/Classes/AspireNurseNoteClasses.js";
  import { closeAllModals } from "$lib/components/AspireModal.svelte";

  // showCampusListOnPage is used to communicate between pages and the Nav.svelte banner at the top.
  // On some pages, only the customer is selected as the page crosses campus boundaries.
  $showCampusListOnPage = true;

  let numFallInLast90Days;
  let providerScheduled = false;
  let sanford = false;
  let notifiedVia = "the Access to Care Dashboard";
  let isLegacyOverride = false;

  let selectedEvent;
  let previousEvent = null;

  // When a new campus is chosen, svelte will hit the following. Customer changes are handled in Nav.svelte.
  // Nav.svelte also verifies if a change has actually resulted in a new campus before $campus is modified.
  // Don't reference any other variables in this $: statement or it will get hit when other things change.
  $: if ($campus) {
    doContextChange();
  }

  // Change context/campus. Either because the page is just loaded, or in reaction to a change in campus selection.
  function doContextChange() {
    if (!$thisSession) {
      return {};
    }
    selectedEvent = undefined;
    previousEvent = undefined;
    processContextChange().then(function () {});
  }
 
  // When a new event is set, activate that event which will cause its details to be rendered.
  // The svelte component below binds to selectedEvent and binds it be default to the first element in the list, so
  // this code gets fired automatically the first time a list of events is established.
  $: if (selectedEvent) {
    activateNewEvent(selectedEvent).then(function () {});
  }

  // Do the processing necessary for a new event. Assumes the customer and campus are already activated.
  async function activateNewEvent(newEvent) {
    if (previousEvent && previousEvent.EventSK == newEvent.EventSK) {
      return {};
    }
    // Must set previousEvent ASAP to prevent svelte generated infinite loops
    previousEvent = newEvent;
    $inputModal.setDoingSomething("Loading event details...");
    $inputModal.open();
    let result = await newEvent.activate({
      campusObj: $thisSession.selectedCampusObj,
      purpose: "Fall Events",
    });
    if (result) {
      if (result.error) {
        let theSession = $thisSession;
        closeAllModals();
        theSession.fatalError(result.errorMsg, AspireErrorAreas.falls);
      }
      providerScheduled = false;
      sanford = false;
      $thisSession.selectedCampusObj = $thisSession.selectedCampusObj;
      selectedEvent.fallDetails = selectedEvent.fallDetails;
      $inputModal.close();
      return {};
    }
  }
  // A new campus has been selected. Do the necessary work, including activating the
  // session object for this campus and purpose.
  async function processContextChange() {
      // On campus switch, deactivate the previous campus so a) the next activation does a refresh, and b) we 
      // save space.
    if ($thisSession.selectedCampusObj){
      $thisSession.selectedCampusObj.deactivate("Fall Events");
    }
    let sessionResult = await $thisSession.activate({
      customerName: $customer,
      campusName: $campus,
      purpose: "Fall Events",
    });
    if (sessionResult) {
      if (sessionResult.error) {
        $inputModal.close();
        $thisSession.fatalError(sessionResult.errorMsg, AspireErrorAreas.falls);
        return sessionResult;
      }
      $thisSession.selectedCustomerObj = $thisSession.selectedCustomerObj;
      $thisSession.selectedCampusObj = $thisSession.selectedCampusObj;
      $inputModal.close();
      return {};
    }
  }

  function submitButtonPush() {
    $inputModal.set(
      "content",
      "Closing event and sending Nurse note; are you sure?"
    );
    $inputModal.set("submitCallback", submitHandler);
    $inputModal.set("textForSubmit", "Accept");
    $inputModal.open();
  }
  async function submitHandler() {
    $inputModal.setDoingSomething("Saving Note...");
    $inputModal.set("content", "Closing Event");
    saveNoteValues();
    if (!document.getElementById("falls-form").checkValidity()) {
      document.getElementById("falls-form").reportValidity();
      $inputModal.close();
      return;
    }
    let injury = selectedEvent.injurySelected;
    let eventDate = selectedEvent.DateOfFall;

    const nurseNoteBody =
      document.getElementById("formattedNurseNote").innerText;
    if (!nurseNoteBody) {
      // submitError = true;
      return;
    }
    // Get scheduler email for selected community
    let targetEmailList = [];
    let providerEmail;
    if ($campus == "Edgewood Grand Forks" && sanford == true) {
      providerEmail = SANFORD_EMAIL;
    } else if ($campus == "Edgewood Grand Forks" && isLegacyOverride == true) {
      providerEmail = PROVIDER_EMAIL;
    } else {
      providerEmail = targetProviderEmail($campus);
    }
    let fallLast30Days = false;
    let numFallsLast30Days = await getFallsLastXDays(
      selectedEvent.ResidentSK,
      30,
      true
    );
    if (numFallsLast30Days) {
      if (numFallsLast30Days.error) {
        $thisSession.nonFatalError(
          "Internal Error on fetch of last 30 days of falls:" +
            numFallsLast30Days.error,
          AspireErrorAreas.Falls
        );
        return;
      }
    }
    if (numFallsLast30Days > 0) {
      fallLast30Days = true;
    }
    // Do not send email if there has been a previous fall within 30 days
    // AND the resident did not experience an injury
    // Do not send email if resident was transported via EMS
    // Do not send email for communities not prepared for scheduler emails
    if (
      (fallLast30Days && !injury) ||
      selectedEvent.transportedEMS ||
      !shouldSendProviderEmail($campus) ||
      (providerScheduled && isLegacy($campus))
    ) {
    } else {
      targetEmailList.push(providerEmail);
    }
    // Check for additional email address and combine them into one string
    if (selectedEvent.homeHealthEmail) {
      targetEmailList.push(selectedEvent.homeHealthEmail);
    }
    if (selectedEvent.hospiceEmail) {
      targetEmailList.push(selectedEvent.hospiceEmail);
    }
    if (selectedEvent.outpatientEmail) {
      targetEmailList.push(selectedEvent.outpatientEmail);
    }

    // Create Fall Nurse Note

    let nurseNote = new AspireNursesNote({
      ResidentSK: selectedEvent.ResidentSK,
      user: $session.user,
      nurseNoteBody,
      eventDate,
      EventSK: selectedEvent.EventSK,
    });
    let res = await nurseNote.saveNote("Fall");
    if (res) {
      if (res.error) {
        $thisSession.nonFatalError(
          "Internal Error on save of nurse note - save not complete!" +
            res.error,
          AspireErrorAreas.Falls
        );
        return;
      }
      $inputModal.addProgress("Nurse Note saved");
      $inputModal.setDoingSomething("Saving/Sending emails...");
      // Send Email/PDF to Current User
      if ($session.user.email) {
        targetEmailList.push($session.user.email);
      }
      // If list is not empty, store the comm record to get the emails sent.
      if (targetEmailList) {
        // Create Communication Object
        let Communication = new AspireCommunication({
          ResidentSK: selectedEvent.ResidentSK,
          user: $session.user,
          nurseNoteBody,
          email: targetEmailList.join(","),
        });
        res = await Communication.sendCommunication("Fall");
        if (res.error) {
          $thisSession.nonFatalError(
            "Internal Error on send emails to list:" + Communication.TargetAddr,
            ", Error:" + res.error,
            AspireErrorAreas.Falls
          );
          return;
        }
        // Remove the processed event from the list.
        $thisSession.selectedCampusObj
          .getContainer(AspireOpenFallEvents)
          .removeObj(selectedEvent.EventSK);
        selectedEvent = null;
        $thisSession.selectedCampusObj = $thisSession.selectedCampusObj;
        $inputModal.clearDoingSomething();
        $inputModal.set("Success", "Note Successfully Saved and Emails sent.");
        $inputModal.set("submitCallback", $inputModal.close);
        $inputModal.set("textForSubmit", "Done");
        return {};
      }
    }
  }
  async function setScheduled() {
    let result = setFallSchedule(selected.EventSK, residentId, userName);
    let message = document.getElementById("visit-message");

    if (!result.ResidentSK) {
      submitError = true;
      message.textContent = "Error setting visit schedule.";
      message.style.color = "red";
      return;
    } else {
      message.textContent = "Success!";
      message.style.color = "green";
      providerScheduled = true;
    }
  }
  function saveNoteValues() {
    Object.keys(selectedEvent).forEach((key) => {
      localStorage.setItem(
        `${selectedEvent.EventSK} ${key}`,
        selectedEvent[key]
      );
    });
  }
</script>

<!-- The form must apply to everything that follows, with class="sm:!pl-64" so the side bar does not hide parts of the page. -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<form
  class="sm:!pl-64"
  id="falls-form"
  on:submit|preventDefault
  on:keydown={(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }}
>
  {#if $thisSession && $thisSession.fatalErrorOnPage}
    <div class="card shadow-xl m-4">
      <div class="card-body text-center text-lg">{ErrMsg$FatalErrorOnPage}</div>
    </div>
  {:else if $thisSession && $thisSession.selectedCampusObj && $thisSession.selectedCampusObj.isActivated("Fall Events")}
    {#if $thisSession.selectedCampusObj.findContainer(AspireOpenFallEvents).objList.length == 0}
      <div class="card shadow-xl m-4">
        <div class="card-body text-center text-lg">
          There are no open Fall events for campus {$thisSession
            .selectedCampusObj.CampusName}.
        </div>
      </div>
    {:else}
      <Container className="mb-4">
        <div class="w-full">
          <fieldset class="md:mr-[366px]">
            <EventSelect
              title="Open Fall Events"
              eventList={$thisSession.selectedCampusObj.getContainer(
                AspireOpenFallEvents
              ).objList}
              bind:selected={selectedEvent}
              eventType="falls"
            />
            <aside
              class="flex
              hidden
              md:fixed
              md:mr-5
              md:top-[155px]
              mt-4
              w-auto
              md:max-w-[350px]
              right-0"
            >
              <div class="w-full">
                {#if selectedEvent && selectedEvent.isActivated("Fall Events")}
                  <div
                    class="card
                    shadowl-xl
                    p-4
                    bg-white
                    max-h-[73vh]
                    scroll
                    overflow-y-auto
                    dark:bg-gray-800
                    !rounded-none"
                  >
                    <div class="card-body !p-0">
                      <AspireResidentBox
                        bind:residentObj={selectedEvent.residentObj}
                      />
                    </div>
                  </div>
                  {#if selectedEvent.fallDetails.Diagram && selectedEvent.fallDetails.Diagram !== "*Not provided*" && selectedEvent.fallDetails.Diagram !== "https://aspireci.file.core.windows.net/images/default.png"}
                    <center>
                      <h3 class="text-2xl font-normal">
                        <u>Fall Diagram</u>
                      </h3>
                      <br />
                      <img
                        class="img-fluid residentimage"
                        src={selectedEvent.fallDetails &&
                        selectedEvent.fallDetails.Diagram
                          ? `${selectedEvent.fallDetails.Diagram}?sv=2020-08-04&ss=f&srt=o&sp=rl&se=2024-07-20T20:39:41Z&st=2021-07-20T12:39:41Z&spr=https&sig=u7BZzUmu2trUho9Fl2QVzUAiRewD5UFyOIZCJru74lA%3D`
                          : ""}
                        style="width: 90%;"
                        alt="Diagram"
                      />
                    </center>
                  {/if}
                {/if}
              </div>
            </aside>
            {#if selectedEvent && selectedEvent.isActivated("Fall Events")}
              <Row className="justify-between">
                <div
                  class="card shadowl-xl p-4 mt-4 !rounded-none w-full md:w-[48%]"
                >
                  {#if shouldShowSchedule($campus)}
                    {#if selectedEvent.fallDetails.ProviderVisitScheduled === "Yes" || providerScheduled}
                      <h5 class="text-lg font-light mb-2">
                        This resident has been scheduled with the medical
                        director.
                      </h5>
                    {:else if $session.user.is_triage && (selectedEvent.fallDetails.ProviderVisitScheduled === "Unknown" || selectedEvent.fallDetails.ProviderVisitScheduled === "No")}
                      <AspireButton
                        buttonText="Schedule resident for provider visit"
                        on:click={setScheduled}
                      />

                      <div class="container">
                        <span id="visit-message" />
                      </div>
                    {/if}
                  {/if}
                  <AspireDefaultHeader headerText={"Nurse's Note - Controls"} />
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
                      Fields marked with <span class="text-[#D42142]">*</span> are
                      required.
                    </i>
                  </h6>

                  <div class="relative block ml-1 form-row">
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
                                  e.currentTarget.value === "yes"
                                    ? true
                                    : false)}
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
                                  e.currentTarget.value === "yes"
                                    ? true
                                    : false)}
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
                                  Moderate: skin integrity issue requiring
                                  treatment and clinical monitoring until
                                  resolved.
                                </p>
                                <p>
                                  Significant: skin integrity issue that
                                  requires medical intervention and or ongoing
                                  clinical monitoring until resolved.
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
                    <div class="mb-1">
                      <label class="ml-1" for="experiencedInjury">
                        <span class="text-[#D42142]">* </span>Experienced
                        additional injury?
                      </label>
                      <div class="float-right">
                        <label>
                          <input
                            class="max-w-[90%]"
                            type="radio"
                            checked={selectedEvent.injurySelected === true &&
                              typeof selectedEvent.injurySelected == "boolean"}
                            on:change={(e) =>
                              (selectedEvent.injurySelected =
                                e.currentTarget.value === "yes" ? true : false)}
                            value="yes"
                          /> Yes
                        </label>
                        <label for="">
                          <input
                            class="max-w-[90%]"
                            type="radio"
                            checked={selectedEvent.injurySelected === false &&
                              typeof selectedEvent.injurySelected == "boolean"}
                            on:change={(e) =>
                              (selectedEvent.injurySelected =
                                e.currentTarget.value === "yes" ? true : false)}
                            value="no"
                          /> No
                        </label>
                      </div>
                    </div>
                    {#if selectedEvent.injurySelected}
                      <div class="ml-2">
                        <div class="form-row mb-2">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control max-w-[90%]"
                              placeholder="* Injury Symptoms & Observations"
                              bind:value={selectedEvent.injuryObservations}
                              required
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control max-w-[90%]"
                              placeholder="* Injury Interventions"
                              bind:value={selectedEvent.injuryInterventions}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Actual or Suspected Head Involvement? -->
                  <RadioSelectWithHiddenFields
                    required={true}
                    name={"headInvolvement"}
                    bind:selected={selectedEvent.headInvolvementSelected}
                    bind:observations={selectedEvent.headInvolvementObservations}
                    bind:interventions={selectedEvent.headInvolvementInterventions}
                    question={"Actual or suspected head involvement?"}
                    additionalInfo={true}
                  />
                  <!-- EMS was Involved? -->
                  <RadioSelectWithHiddenFields
                    required={true}
                    name={"emsInvolved"}
                    bind:selected={selectedEvent.emsSelected}
                    bind:emsCalled={selectedEvent.emsCalled}
                    bind:transportedEMS={selectedEvent.transportedEMS}
                    bind:transportedEMSNotes={selectedEvent.transportedEMSNotes}
                    question={"EMS was involved?"}
                    additionalInfo={false}
                  />
                  <div class="d-flex flex-row-reverse w-full h-full">
                    <div class="d-flex flex-col-reverse buttonTooltip ml-7">
                      <button
                        class="hover:text-white rounded hover:bg-[#223FAB] text-[#838383] w-[30px] h-[30px]"
                        on:click={saveNoteValues}
                      >
                        <MDBIcon size="lg" icon="save" />
                      </button>
                      <span class="tooltiptext left-14"
                        >Click to temporarily save all entered values. Values
                        will be saved until user logs out.</span
                      >
                    </div>
                  </div>
                </div>

                <div
                  class="card shadowl-xl p-4 mt-4 !rounded-none w-full md:w-[48%]"
                >
                  <AspireDefaultHeader
                    headerText={"FALL SUMMARY FROM RTASKS"}
                  />
                  <div class="form-group">
                    <p>
                      <i
                        >"{selectedEvent.fallDetails &&
                        selectedEvent.fallDetails.Narrative
                          ? selectedEvent.fallDetails.Narrative
                          : ""}"</i
                      >
                    </p>
                    <div class="ml-12 text-base">
                      <p>
                        Written By: {selectedEvent.fallDetails
                          ? selectedEvent.fallDetails.PersonRecording ==
                            undefined
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
                  <div>
                    <label class="form-check-label" for="includeFallSummary">
                      Should the fall summary be included in note?
                    </label>
                    <div class="float-right">
                      <label>
                        <input
                          type="radio"
                          checked={selectedEvent.includeFallSummary}
                          on:change={(e) =>
                            (selectedEvent.includeFallSummary =
                              e.currentTarget.value === "yes" ? true : false)}
                          value="yes"
                        /> Yes
                      </label>&nbsp;
                      <label for="">
                        <input
                          type="radio"
                          checked={!selectedEvent.includeFallSummary}
                          on:change={(e) =>
                            (selectedEvent.includeFallSummary =
                              e.currentTarget.value === "yes" ? true : false)}
                          value="no"
                        /> No
                      </label>
                    </div>
                  </div>

                  {#if selectedEvent.fallDetails.Vitals && (selectedEvent.fallDetails.Vitals.Temp || selectedEvent.fallDetails.Vitals["Blood Pressure"] || selectedEvent.fallDetails.Vitals.Pulse || selectedEvent.fallDetails.Vitals.Respiration)}
                    <br />

                    <AspireDefaultHeader headerText={"Vitals From RTasks"} />
                    <div class="form-group">
                      {#if selectedEvent.fallDetails.Vitals.Temp}
                        <h5 class="text-lg font-light mb-2">
                          Temperature: {selectedEvent.fallDetails.Vitals.Temp}
                        </h5>
                      {/if}
                      {#if selectedEvent.fallDetails.Vitals.Respiration}
                        <h5 class="text-lg font-light mb-2">
                          Respiration: {selectedEvent.fallDetails.Vitals
                            .Respiration}
                        </h5>
                      {/if}
                      {#if selectedEvent.fallDetails.Vitals["Blood Pressure"]}
                        <h5 class="text-lg font-light mb-2">
                          Blood Pressure: {selectedEvent.fallDetails.Vitals[
                            "Blood Pressure"
                          ]}
                        </h5>
                      {/if}
                      {#if selectedEvent.fallDetails.Vitals.Pulse}
                        <h5 class="text-lg font-light mb-2">
                          Pulse: {selectedEvent.fallDetails.Vitals.Pulse}
                        </h5>
                      {/if}
                    </div>
                    <div>
                      <label class="form-check-label" for="useVitals">
                        Do you want to use these vitals?
                      </label>
                      <div class="float-right">
                        <label>
                          <input
                            type="radio"
                            checked={selectedEvent.useImportedVitals}
                            on:change={(e) => {
                              selectedEvent.useImportedVitals =
                                e.currentTarget.value === "yes" ? true : false;
                              setVitals(
                                true,
                                selectedEvent.fallDetails.Vitals,
                                selectedEvent
                              );
                            }}
                            value="yes"
                          /> Yes
                        </label>&nbsp;
                        <label for="">
                          <input
                            type="radio"
                            checked={!selectedEvent.useImportedVitals}
                            on:change={(e) => {
                              selectedEvent.useImportedVitals =
                                e.currentTarget.value === "yes" ? true : false;
                              setVitals(
                                false,
                                selectedEvent.fallDetails.Vitals,
                                selectedEvent
                              );
                            }}
                            value="no"
                          /> No
                        </label>
                      </div>
                    </div>
                  {/if}
                  <br />
                  <AspireDefaultHeader headerText={"Evaluation Vital Signs"} />
                  <div class="form-row">
                    <EventTextInput
                      bind:text={selectedEvent.eventTemp}
                      placeholder={"Temperature"}
                      id={"eventTemp"}
                      required={true}
                    />
                    <EventTextInput
                      bind:text={selectedEvent.eventPulse}
                      placeholder={"Pulse"}
                      id={"eventPulse"}
                    />
                    <EventTextInput
                      bind:text={selectedEvent.eventRespiration}
                      placeholder={"Respiration"}
                      id={"eventRespiration"}
                    />
                    <EventTextInput
                      bind:text={selectedEvent.eventBP}
                      placeholder={"Blood Pressure"}
                      id={"eventBP"}
                    />
                  </div>
                  <br /><br />
                  <div class="form-row flex">
                    <EventTextInput
                      text={selectedEvent.residentObj.getAssessmentScore(
                        "MAHC10"
                      ).Value}
                      placeholder={"MAHC 10 Score"}
                      id={"MAHC10Score"}
                    />
                    <EventDatePicker
                      dateValue={selectedEvent.residentObj.getAssessmentScore(
                        "MAHC10"
                      ).dateObtained}
                      id={"MAHC10ScoreDate"}
                      label={"MAHC10 Score Date"}
                    />
                    <EventTextInput
                      text={selectedEvent.residentObj.getAssessmentScore(
                        "SLUMs"
                      ).Value}
                      placeholder={"SLUMS/MMSE Score"}
                      id={"SLUMSScore"}
                    />
                    <EventDatePicker
                      dateValue={selectedEvent.residentObj.getAssessmentScore(
                        "SLUMs"
                      ).dateObtained}
                      id={"SLUMSScoreDate"}
                      label={"SLUMS/MMSE Score Date"}
                    />
                  </div>
                  <div class="d-flex flex-row-reverse w-full h-full">
                    <div class="d-flex flex-col-reverse buttonTooltip ml-7">
                      <button
                        class="hover:text-white rounded hover:bg-[#223FAB] text-[#838383] w-[30px] h-[30px]"
                        on:click={saveNoteValues}
                      >
                        <MDBIcon size="lg" icon="save" />
                      </button>
                      <span class="tooltiptext left-14"
                        >Click to temporarily save all entered values. Values
                        will be saved until user logs out.</span
                      >
                    </div>
                  </div>
                </div>
              </Row>

              <div class="card shadowl-xl p-4 mt-4 !rounded-none w-full">
                <AspireDefaultHeader headerText={"Notifications"} />
                <div class="form-group">
                  <span>Who was notified:</span>
                  <EventCheckboxRequired
                    id={"responsibleParty"}
                    bind:name={selectedEvent.responsibleParty}
                    title={"Responsible Party"}
                  />
                  {#if selectedEvent.responsibleParty}
                    <div class="form-row mt-2.5">
                      <div class="col">
                        <input
                          id="responsiblePartyName"
                          type="text"
                          class="form-control w-44 inline-block ml-10"
                          name="responsiblePartyName"
                          placeholder="Name"
                          bind:value={selectedEvent.responsiblePartyName}
                          required
                        />&nbsp;&nbsp;&nbsp;
                        <label for="responsiblePartyDate">Date: </label>
                        <input
                          style="flex-direction: row"
                          id="responsiblePartyDate"
                          type="datetime-local"
                          class="form-control w-64 inline-block"
                          placeholder="Notification Date"
                          bind:value={selectedEvent.responsiblePartyDate}
                        />
                      </div>
                    </div>
                  {/if}
                  <EventCheckboxRequired
                    id={"primaryPhysician"}
                    bind:name={selectedEvent.primaryPhysician}
                    title={"Primary Physician"}
                  />
                  {#if selectedEvent.primaryPhysician}
                    <div class="form-row mt-2.5">
                      <div class="col">
                        <input
                          id="physicianName"
                          type="text"
                          class="form-control w-44 inline-block ml-10"
                          name="physicianName"
                          placeholder="Physician Name"
                          bind:value={selectedEvent.physicianName}
                          required
                        />&nbsp;&nbsp;&nbsp;
                        <label for="notificationDate">Date: </label>
                        <input
                          style="flex-direction: row"
                          id="notificationDate"
                          type="datetime-local"
                          class="form-control w-64 inline-block"
                          placeholder="Notification Date"
                          bind:value={selectedEvent.notificationDate}
                        />
                      </div>
                    </div>
                  {/if}
                </div>
                <br />
                <!-- Does the resident have a diagnosis of hypertension? -->
                <AspireRadioSelect
                  required={true}
                  bind:value={selectedEvent.fallDetails.Hypertension}
                  question={"Does the resident have a diagnosis of hypertension?"}
                  label={"hypertensionDiagnosis"}
                />
                <!-- Is the resident on anti-hypertensive medication? -->
                <AspireRadioSelect
                  required={true}
                  bind:value={selectedEvent.fallDetails.OnAntihypertensives}
                  question={"Is the resident on anti-hypertensive medication?"}
                  label={"OnHypertensive"}
                />

                <!-- Does the resident have a diagnosis of cardiac arrhythmia? -->
                <AspireRadioSelectWithInfo
                  required="true"
                  bind:isSelected={selectedEvent.fallDetails.Arrhythmia}
                  bind:additionalInfo={selectedEvent.cardiacArrhythmiaNotes}
                  question={"Does the resident have a diagnosis of cardiac arrhythmia?"}
                  label={"cardiacArrhythmia"}
                  additionalInfoTitle={"(Please enter more information about the resident's diagnosis of cardiac arrhythmia)"}
                  placeholder={"Cardiac Arrhythmia Details"}
                />
                {#if selectedEvent.fallDetails.Hypertension || selectedEvent.fallDetails.Arrhythmia}
                  <!-- Was there evidence of orthostatic hypotension from those previous readings? -->
                  <AspireRadioSelect
                    required="true"
                    bind:value={selectedEvent.orthostaticLast14Days}
                    question={`Has the resident had orthostatic blood pressure taken in the last 60 days?`}
                    label={"orthostaticLast14Days"}
                  />
                  {#if selectedEvent.orthostaticLast14Days}
                    <!-- Was there evidence of orthostatic hypotension from those previous readings? -->
                    <AspireRadioSelect
                      required="true"
                      bind:value={selectedEvent.evidenceOfHypotension}
                      question={`Was there evidence of orthostatic hypotension from those previous readings?`}
                      label={"evidenceOfHypotension"}
                    />
                    {#if selectedEvent.evidenceOfHypotension}
                      <div class="ml-2">
                        <div class="form-row mb-2">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control max-w-[90%]"
                              size="30"
                              placeholder="Details"
                              bind:value={selectedEvent.hypotensionDetails}
                            />
                          </div>
                        </div>
                      </div>
                    {/if}
                  {/if}
                {/if}
                <!-- Is the resident able to stand with or without assistance? -->
                <AspireRadioSelectWithInfo
                  infoOnSelected="No"
                  required={true}
                  bind:isSelected={selectedEvent.ableToStand}
                  bind:additionalInfo={selectedEvent.inabilityToStandNotes}
                  question={"Is the resident able to stand with or without assistance?"}
                  label={"ableToStand"}
                  placeholder={"Inability To Stand Details"}
                />
                <!-- Is the resident currently receiving anticoagulation therapy? -->
                <RadioSelectWithHiddenFields
                  required={true}
                  name={"anticoagulation"}
                  bind:selected={selectedEvent.anticoagulationSelected}
                  bind:observations={selectedEvent.anticoagulationObservations}
                  bind:interventions={selectedEvent.anticoagulationInterventions}
                  question={"Is the resident currently receiving anticoagulation therapy?"}
                  additionalInfo={true}
                />
                <!-- Is the resident on home health services? -->
                <EventRadioSelectWithEmail
                  required={true}
                  bind:isSelected={selectedEvent.homeHealth}
                  bind:additionalInfo={selectedEvent.homeHealthEmail}
                  question={"Is the resident on home health services?"}
                  label={"homeHealth"}
                  placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                />
                <!-- Is the resident on hospice services? -->
                <EventRadioSelectWithEmail
                  required={true}
                  bind:isSelected={selectedEvent.hospice}
                  bind:additionalInfo={selectedEvent.hospiceEmail}
                  question={"Is the resident on hospice services?"}
                  label={"hospice"}
                  placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                />
                <!-- Is the resident on outpatient services? -->
                <EventRadioSelectWithEmail
                  required={true}
                  bind:isSelected={selectedEvent.outpatient}
                  bind:additionalInfo={selectedEvent.outpatientEmail}
                  question={"Is the resident on outpatient services?"}
                  label={"outpatient"}
                  placeholder={"Please enter the appropriate email addresses for a copy of the note to be forwarded to"}
                />
                {#if numFallInLast90Days >= 3}
                  <!-- Is the resident on a fall reduction protocol? -->

                  <AspireRadioSelect
                    bind:value={selectedEvent.fallDetails.FallReductionPlan}
                    question={"Is the resident on a fall reduction protocol?"}
                    label={"placedFallReduction"}
                  />
                {/if}
                <!-- The protocols have been entered on the resident's service plan/care plan. -->
                <AspireRadioSelect
                  required={true}
                  bind:value={selectedEvent.protocolsEntered}
                  question={`The protocols have been entered on the resident's service plan/care plan.`}
                  label={"protocolsEntered"}
                />

                <!-- Does the resident have an active infection? -->
                <AspireRadioSelectWithInfo
                  required={true}
                  bind:isSelected={selectedEvent.activeInfection}
                  bind:additionalInfo={selectedEvent.activeInfectionDetails}
                  question={"Does the resident have an active infection?"}
                  label={"activeInfection"}
                  additionalInfoTitle={"(Enter details about the infection)"}
                  placeholder={"What is the infection?"}
                />
                {#if $campus == "Edgewood Grand Forks"}
                  <!-- Is the resident a Sanford patient? -->

                  <AspireRadioSelect
                    bind:value={sanford}
                    question={"Is the resident a Sanford patient?"}
                    label={"isSanford"}
                  />
                {/if}

                {#if $campus && $campus === "Edgewood Grand Forks"}
                  <!-- Is this a Legacy patient? -->

                  <AspireRadioSelect
                    bind:value={isLegacyOverride}
                    question={"Is this a Legacy patient?"}
                    label={"isLegacy"}
                  />
                {/if}
                <br />

                <!-- Please add any information regarding the resident's increased susceptibility to falls here. (optional) -->
                <EventTextArea
                  bind:text={selectedEvent.increasedSusceptibility}
                  description={"Please add any information regarding the resident's increased susceptibility to falls here. (optional)"}
                  label={"increasedSusceptibility"}
                  title={"Increased Susceptibility to Falls"}
                />
                {#if selectedEvent.increasedSusceptibility}
                  <div class="form-row">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control max-w[90%]"
                        placeholder="Increased Fall Susceptibility Interventions"
                        bind:value={selectedEvent.susceptibilityInterventions}
                      />
                    </div>
                  </div>
                  <br /><br />
                {/if}
                <AdditionalInformation
                  bind:additionalInformation={selectedEvent.additionalEventInfo}
                  bind:additionalInterventions={selectedEvent.additionalInterventions}
                />
                <div class="d-flex flex-row-reverse w-full h-full">
                  <div class="d-flex flex-col-reverse buttonTooltip ml-7">
                    <button
                      class="hover:text-white rounded hover:bg-[#223FAB] text-[#838383] w-[30px] h-[30px]"
                      on:click={saveNoteValues}
                    >
                      <MDBIcon size="lg" icon="save" />
                    </button>
                    <span class="tooltiptext left-14"
                      >Click to temporarily save all entered values. Values will
                      be saved until user logs out.</span
                    >
                  </div>
                </div>
              </div>
              <div class="card shadowl-xl p-4 my-4 !rounded-none">
                <span id="formattedNurseNote">
                  <AspireDefaultHeader headerText={"Nurse's Note"} />
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
                        Previously monitored orthostatic blood pressures
                        indicated orthostatic hypotension: {selectedEvent.hypotensionDetails}.
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
                        Current MAHC 10 score is {selectedEvent.MAHC10Score} and
                        was obtained on
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
                          ? selectedEvent.fallDetails.PersonRecording ==
                            undefined
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
                          The resident has had {numFallInLast90Days} falls in the
                          last 90 days.
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

                  <!-- {#if (hypertensionDiagnosis || cardiacArrhythmia || OnHypertensive) && !orthostaticLast14Days && ableToStand}
                  <p class="mb-4">
                    This resident may benefit from Orthostatic Blood Pressure checks. Please
                    consider – Obtaining orthostatic blood pressure once a day for three
                    days and report the data to the Medical Director.
                  </p>{/if} -->
                  <h5 class="text-lg font-light">Actions Taken</h5>
                  <ul class="pl-10 mb-4">
                    <li class="list-disc">
                      Will complete focused assessment and upgrade the plan of
                      care as appropriate
                    </li>
                    {#if selectedEvent.placedProvider}<li>
                        Outside services have been notified of event.
                      </li>{/if}
                    <!-- {#if (hypertensionDiagnosis || cardiacArrhythmia || OnHypertensive) && !orthostaticLast14Days && ableToStand}
                    <li class="list-disc">
                      Staff will obtain orthostatic blood pressures, including heart rate,
                      one time per day for three days. Licensed nursing will report those
                      results to the primary provider if there is evidence of orthostatic
                      hypotension.
                    </li>{/if} -->
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
                          Licensed Nurse will monitor weekly until skin
                          integrity issue is resolved
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
                    <h6 class="font-light text-base mb-2">
                      Skin Interventions
                    </h6>
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
                  {#if selectedEvent.residentObj.polypharm && $campus === "A Test Campus"}
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
                          <b>Current Antidepressants: </b>{selectedEvent
                            .residentObj.polypharm.Antidepressant}
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
                          <b>Current Antipsychotics: </b>{selectedEvent
                            .residentObj.polypharm.Antipsychotic}
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
                  {/if}
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
                  className="btn-primary"
                  buttonText="Close Event and Send Note"
                  clickFn={submitButtonPush}
                ></AspireButton>
              </div>
            {/if}
          </fieldset>
        </div>
      </Container>
    {/if}
  {/if}
</form>

<style>
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
</style>