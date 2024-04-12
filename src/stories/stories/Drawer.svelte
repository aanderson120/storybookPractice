<script>
  //Drawer.svelte
  //Reusable component for a drawer

  import AspireCard from "./AspireCard.svelte";
  import AspireResidentCommonInfo from "./AspireResidentCommonInfo.svelte";

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
  };
</script>

<div class="drawer drawer-end w-full top-[151px] p-4">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div
    class="drawer-content flex-row-reverse d-flex fixed w-[30%] right-0 md:mr-5"
  >
    <!-- Page content here -->

    <AspireCard>
      <label
        for="my-drawer-4"
        class="drawer-button
        btn
        text-white
        bg-[#223FAB]
        hover:bg-[#4285f4]
        content-center
        w-full
        border-none
        ">View Resident Info</label
      >
    </AspireCard>
  </div>
  <slot />

  <div class="drawer-side z-10">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul
      class="menu
      p-4
      w-96
      min-h-full
      text-base-content
      bg-[#F3F3F3]
      text-black"
    >
      <!-- Sidebar content here -->
      <AspireResidentCommonInfo bind:residentObj />
    </ul>
  </div>
</div>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
