<script>
  //AspireVitalSigns.svelte
  //Vital signs component based on event type
  import VitalInput from "./VitalInput.svelte";
  import AspireHeader from "./Completed/AspireHeader.svelte";
  import AspireDatePicker from "./Completed/AspireDatePicker.svelte";

  export let eventTemp = undefined;
  export let eventPulse = undefined;
  export let eventRespiration = undefined;
  export let eventBP = undefined;
  export let O2Sat = undefined;
  export let bloodGlucose = undefined;
  export let a1C = undefined;
  export let a1CDate = undefined;
  export let eventType = "";
  export let MAHC10Score = "";
  export let MAHC10ScoreDate = undefined;
  export let SLUMSScore = "";
  export let SLUMSScoreDate = undefined;
  export let eventLungSounds = undefined;
  export let eventOxygenSaturation = undefined;
  export let fallError = false;
  export let fallMitigationError = false;
  export let generalDeclineError = false;
  export let glucoseError = false;
  export let chfError = false;

  const bloodPressureRegex = /^$|^\d{1,3}\/\d{1,3}$/;
  const numRegex = /^$|^\d+$/;
  const tempRegex = /^\d{0,4}(?:[.,]\d{1,1})?$/;

  //vital error checking
  $: bloodPressureError = bloodPressureRegex.test(eventBP) === false;
  $: tempError = tempRegex.test(eventTemp) === false;
  $: pulseError = numRegex.test(eventPulse) === false;
  $: respirationError = numRegex.test(eventRespiration) === false;
  $: O2SatError = numRegex.test(O2Sat) === false;
  $: bloodGlucoseError = numRegex.test(bloodGlucose) === false;
  $: a1CError = numRegex.test(a1C) === false;
  $: MAHC10ScoreError = numRegex.test(MAHC10Score) === false;
  $: SLUMSScoreError = numRegex.test(SLUMSScore) === false;
  $: OxygenSaturationError = numRegex.test(eventOxygenSaturation) === false;

  $: fallError =
    tempError ||
    pulseError ||
    respirationError ||
    bloodPressureError ||
    MAHC10ScoreError ||
    SLUMSScoreError;

  $: fallMitigationError =
    tempError || pulseError || bloodPressureError || respirationError;

  $: generalDeclineError =
    tempError ||
    pulseError ||
    bloodPressureError ||
    respirationError ||
    OxygenSaturationError;

  $: glucoseError =
    tempError ||
    pulseError ||
    bloodPressureError ||
    respirationError ||
    O2SatError ||
    bloodGlucoseError ||
    a1CError;

  $: chfError =
    tempError ||
    pulseError ||
    bloodPressureError ||
    respirationError ||
    OxygenSaturationError;
</script>

<AspireHeader primary label="Evaluation Vital Signs" />
<div class="form-row my-1">
  <VitalInput
    bind:label={eventTemp}
    placeholder={"Temperature"}
    id={"eventTemp"}
    withTooltip={true}
    hasWarning={eventTemp === ""
      ? false
      : eventTemp < 94 || eventTemp > 99
        ? true
        : false}
    hasError={tempError}
    errorMessage={"Please enter a valid temperature"}
    warningMessage={"Please double check temperature and contact primary care provider if needed."}
  />
  <VitalInput
    bind:label={eventPulse}
    placeholder={"Pulse"}
    id={"eventPulse"}
    withTooltip={true}
    hasWarning={eventPulse === ""
      ? false
      : eventPulse < 60 || eventPulse > 100
        ? true
        : false}
    hasError={pulseError}
    errorMessage={"Please enter a valid pulse rate"}
    warningMessage={"Please double check pulse and contact primary care provider if needed"}
  />
  <VitalInput
    bind:label={eventRespiration}
    placeholder={"Respiration"}
    id={"eventRespiration"}
    withTooltip={true}
    hasWarning={eventRespiration === ""
      ? false
      : eventRespiration < 10 || eventRespiration > 30
        ? true
        : false}
    hasError={respirationError}
    errorMessage={"Please enter a valid respiration rate"}
    warningMessage={"Please double check respiration and contact primary care provider if needed"}
  />
  <VitalInput
    bind:label={eventBP}
    placeholder={"Blood Pressure"}
    id={"eventBP"}
    withTooltip={true}
    hasWarning={false}
    hasError={bloodPressureError}
    errorMessage={"Please enter a valid blood pressure"}
    warningMessage={"Please double check blood pressure and contact primary care provider if needed"}
  />
</div>
{#if eventType == "glucose"}
  <div class="form-row">
    <VitalInput
      bind:label={O2Sat}
      placeholder={"Oxygen Saturation (Percent)"}
      id={"o2Sat"}
      withTooltip={true}
      hasWarning={O2Sat === ""
        ? false
        : O2Sat < 95 || O2Sat > 100
          ? true
          : false}
      hasError={O2SatError}
      errorMessage={"Please enter a valid oxygen saturation"}
      warningMessage={"Please double check oxygen saturation and contact primary care provider if needed"}
    />
    <VitalInput
      bind:label={bloodGlucose}
      placeholder={"Blood Glucose"}
      id={"bloodGlucose"}
      withTooltip={true}
      hasWarning={bloodGlucose === ""
        ? false
        : bloodGlucose < 90 || bloodGlucose > 150
          ? true
          : false}
      hasError={bloodGlucoseError}
      errorMessage={"Please enter a valid blood glucose"}
      warningMessage={"Please double check blood glucose and contact primary care provider if needed"}
    />
    <VitalInput
      bind:label={a1C}
      placeholder={"Most Recent A1C (Percent)"}
      id={"A1C"}
      withTooltip={true}
      hasWarning={a1C === "" ? false : a1C < 7 || a1C > 8.5 ? true : false}
      hasError={a1CError}
      errorMessage={"Please enter a valid A1C"}
      warningMessage={"Please double check A1C and contact primary care provider if needed"}
    />
    {#if a1C}
      <AspireDatePicker
        bind:value={a1CDate}
        id={"A1CDate"}
        label={"A1C Date"}
        size={"20"}
      />
    {/if}
  </div>
{/if}
{#if eventType == "falls"}
  <div class="form-row">
    <VitalInput
      bind:label={MAHC10Score}
      placeholder={"MAHC 10 Score"}
      id={"MAHC10Score"}
      withTooltip={true}
      hasWarning={false}
      hasError={MAHC10ScoreError}
      errorMessage={"Please enter a valid MAHC 10 Score"}
    />
    <AspireDatePicker
      bind:value={MAHC10ScoreDate}
      id={"MAHC10ScoreDate"}
      label={"MAHC10 Score Date"}
      size={"20"}
    />
    <VitalInput
      bind:label={SLUMSScore}
      placeholder={"SLUMS/MMSE Score"}
      id={"SLUMSScore"}
      withTooltip={true}
      hasWarning={false}
      hasError={SLUMSScoreError}
      errorMessage={"Please enter a valid SLUMS/MMSE Score"}
    />
    <AspireDatePicker
      bind:value={SLUMSScoreDate}
      id={"SLUMSScoreDate"}
      label={"SLUMS/MMSE Score Date"}
      size={"20"}
    />
  </div>
{/if}
{#if eventType == "generalDecline" || eventType == "chf"}
  <div class="form-row">
    <VitalInput
      bind:label={eventLungSounds}
      id={"lungSounds"}
      placeholder={"Lung Sounds"}
      withTooltip={true}
    />
    <VitalInput
      bind:label={eventOxygenSaturation}
      id={"oxygenSaturation"}
      placeholder={"Oxygen Saturation"}
      withTooltip={true}
      hasWarning={eventOxygenSaturation === ""
        ? false
        : eventOxygenSaturation < 95 || eventOxygenSaturation > 100
          ? true
          : false}
      hasError={OxygenSaturationError}
      errorMessage={"Please enter a valid oxygen saturation"}
      warningMessage={"Please double check oxygen saturation and contact primary care provider if needed"}
    />
  </div>
{/if}
<br />

<style>
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
</style>
