<script>
  //BoilerForStorybook.svelte
  //This file is used to provide all boilerplate for the components 
  // in the storybook while sveltekit is being updated
  
  import Header from "./Header.svelte";
  import Button from "./AspireButton.svelte";
  import EventCheckbox from "./EventCheckbox.svelte";
  import EventDatePicker from "./EventDatePicker.svelte";
  import EventSelect from "./EventSelect.svelte";
  import EventTextArea from "./EventTextArea.svelte";
  import EventTextInput from "./EventTextInput.svelte";
  import RadioSelect from "./RadioSelect.svelte";
  import Tooltip from "./Tooltip.svelte";
  import VitalSigns from "./VitalSigns.svelte";

  let undefined;
  let atceventopenevents;
  let selected;
</script>

<!-- Header -->

<!-- Primary (Default) Header -->
<Header primary label="Header" />
<!-- Secondary Header -->
<Header label="Header" />
<!-- Transparent Header -->
<Header label="Header" backgroundColor="transparent" />

<!-- Buttons -->

<!-- Primary(Default) Button -->
<Button primary label="Button" event_click={undefined} />
<!-- Secondary Button -->
<Button label="Button" event_click={undefined} />
<!-- Transparent Button -->
<Button
  label="Button"
  backgroundColor="transparent"
  flat
  border
  event_click={undefined}
/>
<!-- Icon Button -->
<Button label="Button" size="icon" event_click={undefined} />
<!-- Full Width Button -->
<Button label="Button" size="full" event_click={undefined} />
<!-- Large (Secondary) Button -->
<Button label="Button" size="large" event_click={undefined} />
<!-- Medium (Secondary) Button -->
<Button label="Button" size="medium" event_click={undefined} />
<!-- Small (Secondary) Button -->
<Button label="Button" size="small" event_click={undefined} />

<!-- Event Checkbox -->

<!-- Default Checkbox -->
<EventCheckbox
  id={"defaultCheck"}
  label="Default Checkbox"
  bind:name={undefined}
/>
<!-- Required Checkbox -->
<EventCheckbox
  required
  id={"requiredCheck"}
  label="Required Checkbox"
  bind:name={undefined}
/>

<!-- Date Picker -->

<!-- Default Date Picker -->
<EventDatePicker
  id={"datePicker"}
  label="Select Date"
  bind:dateValue={undefined}
/>

<!-- Event Select -->

<!-- Default Event Select -->
<EventSelect
  label="Select Event"
  bind:atceventopenevents
  bind:selected
  on:clear={undefined}
/>

<!-- Text Area -->

<!-- Default Text Area -->
<EventTextArea
  label="Text Area"
  bind:text={undefined}
  title="textArea"
  placeholder="Enter text here"
/>

<!-- Text Area with Additional Info -->
<EventTextArea
  label="Additional Information"
  bind:text={undefined}
  title="additionalInformation"
  placeholder="Enter text here to view additional text input"
/>

<!-- Event Text Input -->

<!-- Default Event Text Input -->
<EventTextInput
  label="Default Input"
  bind:text={undefined}
  placeholder="Default Input"
/>
<!-- Event Text Input with Validation -->
<EventTextInput
  required
  label="Validation Input"
  bind:text={undefined}
  placeholder="Input with validation"
  withTooltip
  hasWarning={true}
  hasError={true}
  errorMessage="This is an error message."
  warningMessage="This is a warning message."
/>

<!-- Radio Select -->

<!-- Simple (Default) Select -->
<RadioSelect
  label={"Simple Select"}
  question="Simple Select"
  bind:isSelected={undefined}
/>

<!-- Required Select -->
<RadioSelect
  required
  label={"Required Select"}
  question="Required Select"
  bind:isSelected={undefined}
/>
<!-- Email Select -->
<RadioSelect
  email
  label={"Email Select"}
  question="Select with Email"
  bind:isSelected={undefined}
  bind:additionalInfo={undefined}
  additionalInfoTitle="Enter Email below"
  placeholder="Enter Email"
/>
<!-- With Info Select -->
<RadioSelect
  withInfo
  label={"With Info Select"}
  question="Select with additional info"
  bind:isSelected={undefined}
  bind:additionalInfo={undefined}
  additionalInfoTitle="Enter information below"
  placeholder="(Please enter more information)"
/>
<!-- Info Select with Error Validation -->
<RadioSelect
  required
  withInfo
  label={"With Info Select With Validation"}
  question="Select with additional info and validation"
  bind:isSelected={undefined}
  bind:additionalInfo={undefined}
  additionalInfoTitle="Enter information below"
  placeholder="(Please enter more information)"
  error={undefined === ""}
/>
<!-- With Info Negative Select -->
<RadioSelect
  infoNegative
  label={"With Info on 'No' Select"}
  question="Select with additional info on 'No'"
  bind:isSelected={undefined}
  bind:additionalInfo={undefined}
  additionalInfoTitle="Enter information below"
  placeholder="(Please enter more information)"
/>
<!-- Hidden Field Select -->
<RadioSelect
  hiddenFields
  label="Hidden Radio"
  question="Select with hidden fields"
  bind:selected={undefined}
  bind:hidden1={undefined}
  bind:hidden2={undefined}
  additionalInfoTitle="Enter information below"
  placeholder="Input 1"
  placeholder2="Input 2"
/>
<!-- EMS Involved Select -->
<RadioSelect
  label="EMS Involved"
  question="EMS was Involved?"
  bind:selected={undefined}
  bind:emsCalled={undefined}
  bind:transportedEMS={undefined}
  bind:transportedEMSNotes={undefined}
/>

<!-- Info with Date Select -->
<RadioSelect
  infoWithDate
  label="Info With Date"
  question="Select with date and additional info"
  bind:isSelected={undefined}
  bind:additionalInfo={undefined}
  bind:value={undefined}
  additionalInfoTitle="Enter information below"
  placeholder="(Please enter more information)"
/>

<!-- Tooltip -->

<!-- Top (Default) Tooltip -->
<Tooltip
  label="Default Tooltip"
  warning
  tooltipText="This is a warning"
  position="top">!</Tooltip
>
<!-- Right Tooltip -->
<Tooltip
  label="Right Tooltip"
  warning
  tooltipText="This is a warning"
  position="right">!</Tooltip
>
<!-- Bottom Tooltip -->
<Tooltip
  label="Bottom Tooltip"
  warning
  tooltipText="This is a warning"
  position="bottom">!</Tooltip
>
<!-- Left Tooltip -->
<Tooltip
  label="Left Tooltip"
  warning
  tooltipText="This is a warning"
  position="left">!</Tooltip
>

<!-- Vital Signs -->

<!-- Default Event -->
<VitalSigns
  label="default"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
/>
<!-- Fall Mitigation Event -->
<VitalSigns
  label="Fall Mitigation"
  eventType="fallmitigation"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
/>
<!-- Glucose Event -->
<VitalSigns
  label="Glucose"
  eventType="glucose"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
  bind:O2Sat={undefined}
  bind:glucose={undefined}
  bind:a1C={undefined}
/>
<!-- Falls Event -->
<VitalSigns
  label="Falls"
  eventType="falls"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
  bind:MAHC10Score={undefined}
  bind:MAHC10ScoreDate={undefined}
  bind:SLUMSScore={undefined}
  bind:SLUMSScoreDate={undefined}
/>
<!-- General Decline Event -->
<VitalSigns
  label="General Decline"
  eventType="generalDecline"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
  bind:eventLungSounds={undefined}
  bind:eventOxygenSaturation={undefined}
/>
<!-- CHF Event -->
<VitalSigns
  label="CHF"
  eventType="chf"
  bind:eventTemp={undefined}
  bind:eventPulse={undefined}
  bind:eventRespiration={undefined}
  bind:eventBP={undefined}
  bind:eventLungSounds={undefined}
  bind:eventOxygenSaturation={undefined}
/>
