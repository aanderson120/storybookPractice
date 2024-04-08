<script>
  //AspireNurseNote.svelte
  //Layout for Nurse's Note
  import moment from "moment";

  import AspireHeader from "./AspireHeader.svelte";
  import AspireButton from "./AspireButton.svelte";

  export let selectedEvent = {};
  export let submitButtonPush = () => {};
  export let event = "";
</script>

<span id="formattedNurseNote">
  <AspireHeader label={"Nurse's Note"} />
  <h6 class="font-light text-sm mb-2">
    Resident's Name (DOB): {selectedEvent
      ? selectedEvent.ResidentFirstName
      : ""}
    {selectedEvent ? selectedEvent.ResidentLastName : ""} ({selectedEvent
      ? selectedEvent.ResidentDOB
      : ""})
  </h6>
  <h6 class="font-light text-sm mb-2">
    Campus: {selectedEvent ? selectedEvent.CampusName : ""}
  </h6>
  <h6 class="font-light text-sm mb-2">
    Event Date and Time: {selectedEvent
      ? moment(selectedEvent.DateOfFall)
          .local()
          .format("ddd, MMM DD, YYYY  HH:mm:ss")
      : ""}
  </h6>
  <h6 class="text-lg mb-2">
    <u>Focus - {event}</u>
  </h6>
  <slot />
</span>
<AspireButton
  label="Close Event and Send Note"
  clickFn={submitButtonPush}
></AspireButton>
