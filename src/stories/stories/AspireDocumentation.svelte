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
  export let updateIncidents = () => {};
  export let selectedEvent = {};
  export let eventType = "Fall" || "Fall with Director Review";
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
  function printSection() {
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("printable").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
            {atceventopenevents}
            {startDate}
            {endDate}
            {searchTerm}
          />
          <!-- {#if allEvents.selectedCount() === 0}
            <h4 class="text-2xl font-light m-2">No Events Selected</h4>
          {:else} -->
          <AspireDocumentationReport
            printArea={"printable"}
            {atceventopenevents}
          />
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
