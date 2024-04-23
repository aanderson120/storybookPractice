<script>
  import AspireDocumentationReport from "./AspireDocumentationReport.svelte";
  import AspireFatalErrorCard from "./AspireFatalErrorCard.svelte";
  import AspireDocumentationSearch from "./AspireDocumentationSearch.svelte";
  import AspireRow from "../AspireRow.svelte";
  import AspireColumn from "../AspireColumn.svelte";
  import AspireContainer from "../general/AspireContainer.svelte";
  import AspireButton from "../general/AspireButton.svelte";

  import AspireCard from "../general/AspireCard.svelte";

  export let startDate = "";
  export let endDate = "";
  export let searchTerm = "";

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
  <AspireContainer>
    <AspireRow className="event-container">
      <AspireColumn size="12">
        <fieldset>
          <AspireDocumentationSearch
            {eventType}
            {atceventopenevents}
            {startDate}
            {endDate}
            {searchTerm}
          />
          <!-- {#if allEvents.selectedCount() === 0}
            <h4 class="text-xl font-light m-2">No Events Selected</h4>
          {:else} -->
          <AspireDocumentationReport
            printArea={"printable"}
            {atceventopenevents}
          />
        </fieldset>
      </AspireColumn>
    </AspireRow>
    <AspireButton label="Print All" clickFn={printSection}></AspireButton>
  </AspireContainer>
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
