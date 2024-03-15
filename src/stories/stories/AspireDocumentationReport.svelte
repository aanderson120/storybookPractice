<script>
  //AspireDocumentationReport.svelte
  //Component to display the event report in documentation
  import moment from "moment";

  import AspireCard from "./Completed/AspireCard.svelte";
  import AspireHeader from "./Completed/AspireHeader.svelte";
  import AspireButton from "./Completed/AspireButton.svelte";

  export let eventType = "Fall" || "Fall with Director Review";
  export let printArea = "";
  // export let printEvent = () => {};
  export let atceventopenevents = [
    {
      selected: true,
      CampusName: "",
      DateOfFall: "",
      EventSK: "",
      EDNoteText: "",
      NurseNoteText: "",
      ResidentFirstName: "",
      ResidentLastName: "",
      ResidentSK: "",
      fallDetails: {
        objList: [
          {
            Answer: "",
            CreatedAt: "",
            CreatedBy: "",
            DetailSK: "",
            EventSK: "",
            Question: "",
          },
        ],
      },
    },
  ];
  // Print the current item only. The button that was clicked has the id of
  // the event, and the printable area is assumed to be that id with "printable" as
  // prefix.
  function printEvent(id) {
    var getFullContent = document.body.innerHTML;
    var selectedElement = document.getElementById("printable" + id.toString());
    var printsection = selectedElement.innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  }
  let noteHeader = (eventType === "Fall"
    ? "Nurse Note From Aspire"
    : "Executive Director Review Comments");
</script>

<AspireCard>
  <div id={printArea}>
    {#each atceventopenevents as event}
      {#if event.selected}
        <!-- {#if !event.isActivated("Doc Falls Not Reviewed")}
          <h4 class="text-2xl font-light m-2">
            ...Details loading for selected event for {event.ResidentFirstName}
            {event.ResidentLastName}
          </h4>
        {:else} -->
        <div class="my-2" id={"printable" + event.EventSK}>
          <AspireHeader label={"Incident Details"} />
          <div>
            <b>Incident Type: </b>Fall
          </div>
          <div>
            <b>Date/Time: </b>
            {event
              ? moment(event.DateOfFall).local().format("MM/DD/YYYY - h:mm a")
              : ""}
          </div>
          <div>
            <b>Resident Name: </b>{event
              ? `${event.ResidentFirstName} ${event.ResidentLastName}`
              : ""}
          </div>
          <br />
          <AspireHeader label={"Incident Report from RTasks"} />
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th class="!bg-inherit"><b>Question</b></th>
                  <th class="!bg-inherit"><b>Answer</b></th>
                  <th class="!bg-inherit"><b>Entered By</b></th>
                  <th class="!bg-inherit"><b>Date</b></th>
                </tr>
              </thead>
              <tbody>
                {#if event.fallDetails}
                  {#each event.fallDetails.objList as question}
                    <tr
                      class="
                            break-inside-avoid
                            break-after-auto"
                    >
                      <td class="!bg-inherit whitespace-normal">
                        {question.Question ? question.Question : ""},
                      </td>

                      <td class="!bg-inherit whitespace-normal">
                        {question.Answer ? question.Answer : ""}
                      </td>
                      <td class="!bg-inherit whitespace-normal">
                        {question.CreatedBy ? question.CreatedBy : ""}
                      </td>
                      <td class="!bg-inherit whitespace-normal">
                        {question.CreatedAt ? question.CreatedAt : ""}
                      </td>
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </table>
          </div>
          <!-- <br /> -->
          <div class="pt-1.5 block">
            <div class="form-group">
              <AspireHeader label={noteHeader} />
              <pre
                class="
                  aspire-note
                  whitespace-pre-wrap
                  border-none
                  block
                  break-inside-auto">{event.NurseNoteText}</pre>
            </div>
          </div>

          <div class="print">
            <AspireButton
              id={event.EventSK}
              label="Print Event"
              clickFn={printEvent}
            ></AspireButton>
          </div>
        </div>
        <!-- {/if} -->
      {/if}
    {/each}
  </div>
</AspireCard>

<style>
  .form-group {
    margin-bottom: 1.5rem;
  }
  @media print {
    div {
      break-inside: avoid;
    }
    .print {
      display: none;
    }
  }
</style>
