//AspireDocumentationSearch.stories.ts
//Component for documentation resident search
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDocumentationSearch from "./AspireDocumentationSearch.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Documentation Search",
  component: AspireDocumentationSearch,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireDocumentationSearch>;

export default meta;
type Story = StoryObj<AspireDocumentationSearch>;

//Documentation Search variants and args needed to display them
export const Fall: Story = {
  args: {
    eventType:"Fall",
    atceventopenevents: [
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502268",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Chester Hageman (03/03/1923)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Chester Hageman (DOB: 03/03/1923) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 3100 and was obtained on 2024-10-09. Current SLUMS/MMSE score is 0100 and was obtained on 2024-10-09.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\nPrimary Physician: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:43:45 MST",
        ResidentFirstName: "Chester",
        ResidentLastName: "Hageman",
        ResidentSK: "2400",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6510377",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Robin Byrd (01/02/1940)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\n\r\n\r\n\r\nThis writer was notified via the nurse on call that Robin Byrd (DOB: 01/02/1940) experienced a fall on Tue, Nov 07, 2023 at 20:00:00. EMS was notified on 2024-01-31T00:00. Resident was transported via EMS at 2024-01-31T01:10. The resident did not experience an injury. The resident did experience actual or suspected head involvement. bump on head. The resident has had orthostatic blood pressure checks 1 time per day for 3 days, including heart rate within the last 60 days. The previously checked orthostatic pressures were WNL. The resident does have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 55, R 15, B/P 120/70. Current MAHC 10 score is 7 and was obtained on 2023-09-28. Current SLUMS/MMSE score is 21 and was obtained on 2022-04-24.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThis resident is taking one or more anti-hypertensive medications.\r\nThe resident has had 28 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nThe resident has been placed on the Fall Reduction Protocol with individualized interventions.\r\nThe protocols have been entered on the residents Service Plan.\r\nHead Involvement Interventions\r\nice applied\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: jorin on Thu, Feb 01, 2024 01:12:00\r\nPrimary Physician: dr kalis on Thu, Feb 01, 2024 00:10:00\r\n\r\n\r\nElectronically Signed by Jorin Becker on 2024-02-01 10:12:56 CST",
        ResidentFirstName: "Robin",
        ResidentLastName: "Byrd",
        ResidentSK: "2419",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502300",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Zee resident (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Zee resident (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 0100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 14:41:49 MST",
        ResidentFirstName: "Zee",
        ResidentLastName: "resident",
        ResidentSK: "2393",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6506212",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Karina Armenta (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Karina Armenta (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 1100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 18100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\nCurrent Antihypertensives: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Pain Medications: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:00:25 MST",
        ResidentFirstName: "Karina",
        ResidentLastName: "Armenta",
        ResidentSK: "2395",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2024-01-17T16:00:00Z",
        EventSK: "6711086",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Martin Alwauysfalls (02/01/1930)\r\nCampus: A Test Campus\r\nEvent Date and Time: Wed, Jan 17, 2024 10:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Martin Alwauysfalls (DOB: 02/01/1930) experienced a fall on Wed, Jan 17, 2024 at 10:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is not able to stand with or without assistance. no0ne Vital signs are – T 99, P 89, R 20, B/P 120/80.\r\n\r\n\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nPolypharmacy\r\nCurrent Pain Medications: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Vitamins & Supplements: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\nElectronically Signed by Curt Boger on 2024-02-12 20:19:04 CST",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentSK: "1440477",
      },
    ],
    startDate: "2023-11-01T07:00:00Z",
    endDate: "2024-03-31T07:00:00Z",
    searchTerm: "",
  },
};

export const WithReview: Story = {
  args: {
    eventType:"Fall with Director Review",
    atceventopenevents: [
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502268",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Chester Hageman (03/03/1923)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Chester Hageman (DOB: 03/03/1923) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 3100 and was obtained on 2024-10-09. Current SLUMS/MMSE score is 0100 and was obtained on 2024-10-09.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\nPrimary Physician: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:43:45 MST",
        ResidentFirstName: "Chester",
        ResidentLastName: "Hageman",
        ResidentSK: "2400",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6510377",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Robin Byrd (01/02/1940)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\n\r\n\r\n\r\nThis writer was notified via the nurse on call that Robin Byrd (DOB: 01/02/1940) experienced a fall on Tue, Nov 07, 2023 at 20:00:00. EMS was notified on 2024-01-31T00:00. Resident was transported via EMS at 2024-01-31T01:10. The resident did not experience an injury. The resident did experience actual or suspected head involvement. bump on head. The resident has had orthostatic blood pressure checks 1 time per day for 3 days, including heart rate within the last 60 days. The previously checked orthostatic pressures were WNL. The resident does have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 55, R 15, B/P 120/70. Current MAHC 10 score is 7 and was obtained on 2023-09-28. Current SLUMS/MMSE score is 21 and was obtained on 2022-04-24.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThis resident is taking one or more anti-hypertensive medications.\r\nThe resident has had 28 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nThe resident has been placed on the Fall Reduction Protocol with individualized interventions.\r\nThe protocols have been entered on the residents Service Plan.\r\nHead Involvement Interventions\r\nice applied\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: jorin on Thu, Feb 01, 2024 01:12:00\r\nPrimary Physician: dr kalis on Thu, Feb 01, 2024 00:10:00\r\n\r\n\r\nElectronically Signed by Jorin Becker on 2024-02-01 10:12:56 CST",
        ResidentFirstName: "Robin",
        ResidentLastName: "Byrd",
        ResidentSK: "2419",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502300",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Zee resident (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Zee resident (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 0100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 14:41:49 MST",
        ResidentFirstName: "Zee",
        ResidentLastName: "resident",
        ResidentSK: "2393",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6506212",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Karina Armenta (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Karina Armenta (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 1100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 18100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\nCurrent Antihypertensives: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Pain Medications: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:00:25 MST",
        ResidentFirstName: "Karina",
        ResidentLastName: "Armenta",
        ResidentSK: "2395",
      },
      {
        CampusName: "A Test Campus",
        DateOfFall: "2024-01-17T16:00:00Z",
        EventSK: "6711086",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Martin Alwauysfalls (02/01/1930)\r\nCampus: A Test Campus\r\nEvent Date and Time: Wed, Jan 17, 2024 10:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Martin Alwauysfalls (DOB: 02/01/1930) experienced a fall on Wed, Jan 17, 2024 at 10:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is not able to stand with or without assistance. no0ne Vital signs are – T 99, P 89, R 20, B/P 120/80.\r\n\r\n\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nPolypharmacy\r\nCurrent Pain Medications: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Vitamins & Supplements: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\nElectronically Signed by Curt Boger on 2024-02-12 20:19:04 CST",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentSK: "1440477",
      },
    ],
    startDate: "2023-11-01T07:00:00Z",
    endDate: "2024-03-31T07:00:00Z",
    searchTerm: "",
  },
};