<script>
  import moment from "moment";
  import Container from "./AspireContainer.svelte";
  import Row from "./Completed/AspireRow.svelte";
  import Col from "./Completed/AspireColumn.svelte";
  import AspireButton from "./Completed/AspireButton.svelte";
  import AspireHeader from "./Completed/AspireHeader.svelte";
  import AspireFatalErrorCard from "./Completed/AspireFatalErrorCard.svelte";
  import AspireCheckBoxSet from "./AspireCheckBoxSet.svelte";
  import AspireDocumentationSearch from "./AspireDocumentationSearch.svelte";

  export let allEvents;
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
  export let atceventopenevents = [
    {
      CampusName: "",
      DateOfFall: "",
      EventSK: "",
      NurseNoteText: "",
      ResidentFirstName: "",
      ResidentLastName: "",
      ResidentSK: "",
    },
  ];

  // Call this function whenever selection of events changes. It will activate
  // the events so all details are avaialble, and cause the event info on the
  // screen to refresh.

  async function selectionsChanged() {
    for (var i = 0; i < allEvents.objList.length; i++) {
      await new Promise(async (next) => {
        let result = {};
        if (allEvents.objList[i].selected) {
          result = await allEvents.objList[i].activate({
            purpose: "Doc Falls Not Reviewed",
          });

          if (result) {
            if (result.error) {
              console.log("Internal Error reading fall details.");
              return {};
            }
          }
        }
        if (result) {
          return next();
        }
      });
    }
    allEvents.objList = allEvents.objList;
    return {};
  }

  // Function to filter on resident name, given the searchTerm that the
  // user gave us.
  const filterByResident = () => {
    if (searchTerm) {
      eventsFilterFn = (event) => {
        let residentName =
          `${event.ResidentFirstName} ${selectedEvent.ResidentLastName}`.toLowerCase();
        return residentName.includes(searchTerm.toLocaleLowerCase());
      };
    } else {
      eventsFilterFn = () => {
        return true;
      };
    }
  };
</script>

<form
  class="sm:!pl-64"
  id="falls-form"
  <!--
  on:keydown={(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }}
  --
>
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
            {atceventopenevents}
            {startDate}
            {endDate}
            {searchTerm}
          />
          <div class="card shadow-xl p-4 mt-4 !rounded-none w-full">
            <!-- {#if allEvents.selectedCount() === 0}
              <h4 class="text-2xl font-light m-2">No Events Selected</h4>
            {:else} -->
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
                      <br /><br />
                      <!-- <h3>Vitals Recorded</h3>
                            <MDBTable>
                              <MDBTableHead />
                            </MDBTable> -->
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
                      <!-- <h4>
                              <span>EXECUTIVE DIRECTOR REVIEW COMMENTS</span>
                            </h4>
                            <br />
                            <div class="form-group">
                              <pre style="white-space: pre-wrap;">{edNote}</pre>
                            </div> -->
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
            <!-- {/if} -->
          </div>
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
