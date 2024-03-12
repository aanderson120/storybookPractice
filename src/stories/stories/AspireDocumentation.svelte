<script>
  import moment from "moment";
  import Container from "./AspireContainer.svelte";
  import Row from "./Completed/AspireRow.svelte";
  import Col from "./Completed/AspireColumn.svelte";
  import AspireButton from "./Completed/AspireButton.svelte";
  import AspireHeader from "./Completed/AspireHeader.svelte";
  import AspireFatalErrorCard from "./Completed/AspireFatalErrorCard.svelte";
  import AspireDocumentationSearch from "./AspireDocumentationSearch.svelte";
  import AspireCard from "./Completed/AspireCard.svelte";
  import AspireDocumentationReport from "./AspireDocumentationReport.svelte";

  export let startDate = "";
  export let endDate = "";
  export let searchTerm = "";
  let eventsFilterFn = (event) => {
    return true;
  };
  export let printSection = () => {};
  export let printEvent = () => {};
  export let updateIncidents = () => {};
  export let selectedEvent = {};
  export let eventType = "";
  export let allEvents = [
    {
      selected: true,
      CampusName: "",
      DateOfFall: "",
      EventSK: "",
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
            Question: "",
          },
        ],
      },
    },
  ];
</script>

<form
  class="sm:!pl-64"
  id="falls-form"
  on:keydown={(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }}
>
  <!-- {#if $thisSession && $thisSession.fatalErrorOnPage}
    <AspireFatalErrorCard ErrMsg$FatalErrorOnPage="Fatal Error on Page" />
  {:else if $thisSession && $thisSession.selectedCampusObj && allEvents && allEvents.objList} -->
  <Container>
    <Row className="event-container">
      <Col size="12">
        <fieldset>
          <AspireDocumentationSearch
            {eventType}
            atceventopenevents={allEvents}
            {startDate}
            {endDate}
            {searchTerm}
          />
          <!-- {#if allEvents.selectedCount() === 0}
            <h4 class="text-2xl font-light m-2">No Events Selected</h4>
          {:else} -->
          <AspireDocumentationReport printArea="printable" />
          <!-- <div class="card shadow-xl p-4 mt-4 !rounded-none w-full">
            <div id="printable">
              {#each allEvents as event}
                {#if event.selected}
                  {#if !event.isActivated("Doc Falls Not Reviewed")}
                    <h4 class="text-2xl font-light m-2">
                      ...Details loading for selected event for {event.ResidentFirstName}
                      {event.ResidentLastName}
                    </h4>
                  {:else}
                    <div class="my-2" id={"printable" + event.EventSK}>
                      <AspireHeader label={"Incident Details"} />
                      <div>
                        <b>Incident Type: </b>Fall
                      </div>
                      <div>
                        <b>Date/Time: </b>
                        {event
                          ? moment(event.DateOfFall)
                              .local()
                              .format("MM/DD/YYYY - h:mm a")
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
                                    {question.Question
                                      ? question.Question
                                      : ""},
                                  </td>

                                  <td class="!bg-inherit whitespace-normal">
                                    {question.Answer ? question.Answer : ""}
                                  </td>
                                  <td class="!bg-inherit whitespace-normal">
                                    {question.CreatedBy
                                      ? question.CreatedBy
                                      : ""}
                                  </td>
                                  <td class="!bg-inherit whitespace-normal">
                                    {question.CreatedAt
                                      ? question.CreatedAt
                                      : ""}
                                  </td>
                                </tr>
                              {/each}
                            {/if}
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <div class="pt-1.5 block">
                        <h4 class="underline">Nurse Note From Aspire</h4>
                        <br />
                        <div class="form-group">
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
                  {/if}
                {/if}
              {/each}
            </div>
          </div> -->
          <!-- {/if} -->
        </fieldset>
      </Col>
    </Row>
    <AspireButton label="Print All" clickFn={printSection}></AspireButton>
  </Container>
  <!-- {/if} -->
</form>

<style>
  @media print {
    div {
      break-inside: avoid;
    }
    .print,
    h4 {
      display: none;
    }
  }
</style>
