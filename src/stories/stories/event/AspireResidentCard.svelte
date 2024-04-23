<script>
  //AspireResidentCard.svelte
  //Reusable component for resident cards

  export let selectResident = () => {};
  export let residentObj = {
    BradenScore: "",
    CampusId: "",
    CampusName: "",
    CareStatus: "",
    CodeStatus: "",
    DateOfAdmission: "",
    Diagnoses: "",
    Diet: "",
    EmailSent: false,
    FoodAllergies: "",
    Gender: "",
    Height: "",
    MAHC10Score: "",
    MaritalStatus: "",
    MedicationAllergies: "",
    Nickname: "",
    OtherAllergies: "",
    Phone: "",
    Photo: "",
    PrimaryProvider: "",
    ProductLine: "",
    Religion: "",
    ResidentDOB: "",
    ResidentFirstName: "",
    ResidentLastName: "",
    ResidentPK: "",
    SLUMsScore: "",
    UnitNumber: "",
    ResidentSK: "",
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={selectResident}
  on:keypress={selectResident}
  id={residentObj.ResidentSK}
  class="card
    shadow-none
    p-3
    m-2
    cursor-pointer
    bg-[#e6e6e6]
    hover:bg-[#6391E0]
    hover:text-white
    max-w-[375px]"
>
  <div class="d-flex items-center cursor-pointer">
    <div class="cursor-pointer w-24 h-24">
      <img
        src="{residentObj.Photo}?sv=2020-08-04&ss=f&srt=o&sp=rl&se=2024-07-20T20:39:41Z&st=2021-07-20T12:39:41Z&spr=https&sig=u7BZzUmu2trUho9Fl2QVzUAiRewD5UFyOIZCJru74lA%3D"
        alt="Resident {residentObj.ResidentFirstName} {residentObj.ResidentLastName} Image"
        class="rounded-3xl"
      />
    </div>
    <div class="p-2.5 d-flex flex-col text-base cursor-pointer">
      <div class="card-actions">
        <strong>
          {residentObj.ResidentFirstName}
          {residentObj.ResidentLastName}
        </strong>
      </div>
      <div class="card-actions text-sm">
        {residentObj.CampusName}
        {residentObj.UnitNumber},
        <b>
          {residentObj.ProductLine}
        </b>
      </div>
      <div class="card-actions text-sm">
        <i>Date of Admission: {residentObj.DateOfAdmission}</i>
      </div>
    </div>
    <div
      class="d-flex pl-3 h-24"
      style="border-left: 1px solid #00000020; border-radius:0 calc(.25rem - 1px) calc(.25rem - 1px)"
    >
      <span class="d-flex items-center cursor-pointer">
        <!-- <MDBIcon icon="id-badge" /> -->
        X
      </span>
    </div>
  </div>
</div>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
