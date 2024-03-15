//AspireDocumentation.stories.ts
//Component for documentation layout
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireDocumentation from "./AspireDocumentation.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "Documentation",
  component: AspireDocumentation,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireDocumentation>;

export default meta;
type Story = StoryObj<AspireDocumentation>;

//Documentation variants and args needed to display them
export const Fall: Story = {
  args: {
    eventType: "Fall",
    atceventopenevents: [
      {
        selected: true,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502268",
        EDNoteText: "",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Chester Hageman (03/03/1923)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Chester Hageman (DOB: 03/03/1923) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 3100 and was obtained on 2024-10-09. Current SLUMS/MMSE score is 0100 and was obtained on 2024-10-09.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\nPrimary Physician: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:43:45 MST",
        ResidentFirstName: "Chester",
        ResidentLastName: "Hageman",
        ResidentSK: "2400",
        fallDetails: {
          objList: [
            {
              Answer: "None",
              CreatedAt: "2023-11-10T16:25:38.250000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086247",
              EventSK: "6502268",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident came out for lunch staff redirected resident and told her she had about an hr until lunch. Resident grabbed her head and stated she had a bump on it. Staff asked resident what happened, resident stated she thinks she fell out of bed. Resident does have a night stand next to bed she could have bumped it on. Fall was unwitnessed",
              CreatedAt: "2023-11-10T16:25:38.437000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086255",
              EventSK: "6502268",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-10T16:25:38.453000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086266",
              EventSK: "6502268",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-10T16:25:38.420000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086253",
              EventSK: "6502268",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-10T16:25:38.453000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086268",
              EventSK: "6502268",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: true,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6510377",
        EDNoteText: "",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Robin Byrd (01/02/1940)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\n\r\n\r\n\r\nThis writer was notified via the nurse on call that Robin Byrd (DOB: 01/02/1940) experienced a fall on Tue, Nov 07, 2023 at 20:00:00. EMS was notified on 2024-01-31T00:00. Resident was transported via EMS at 2024-01-31T01:10. The resident did not experience an injury. The resident did experience actual or suspected head involvement. bump on head. The resident has had orthostatic blood pressure checks 1 time per day for 3 days, including heart rate within the last 60 days. The previously checked orthostatic pressures were WNL. The resident does have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 55, R 15, B/P 120/70. Current MAHC 10 score is 7 and was obtained on 2023-09-28. Current SLUMS/MMSE score is 21 and was obtained on 2022-04-24.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThis resident is taking one or more anti-hypertensive medications.\r\nThe resident has had 28 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nThe resident has been placed on the Fall Reduction Protocol with individualized interventions.\r\nThe protocols have been entered on the residents Service Plan.\r\nHead Involvement Interventions\r\nice applied\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: jorin on Thu, Feb 01, 2024 01:12:00\r\nPrimary Physician: dr kalis on Thu, Feb 01, 2024 00:10:00\r\n\r\n\r\nElectronically Signed by Jorin Becker on 2024-02-01 10:12:56 CST",
        ResidentFirstName: "Robin",
        ResidentLastName: "Byrd",
        ResidentSK: "2419",
        fallDetails: {
          objList: [
            {
              Answer: "Walker",
              CreatedAt: "2023-11-29T22:44:53.007000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123147",
              EventSK: "6554645",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "resident was laying in bed when she attempted to sit up and ended up sliding out of bed. no signs of injuries.",
              CreatedAt: "2023-11-29T22:44:53.070000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123155",
              EventSK: "6554645",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-10T16:25:38.453000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086266",
              EventSK: "6502268",
              Question: "Current Protocols",
            },
            {
              Answer: "None",
              CreatedAt: "2023-11-29T22:44:53.053000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123153",
              EventSK: "6554645",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-29T22:44:53.103000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123168",
              EventSK: "6554645",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: true,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6502300",
        EDNoteText: "",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Zee resident (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Zee resident (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 0100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 14:41:49 MST",
        ResidentFirstName: "Zee",
        ResidentLastName: "Resident",
        ResidentSK: "2393",
        fallDetails: {
          objList: [
            {
              Answer: "Walker",
              CreatedAt: "2023-11-10T16:54:52.360000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086948",
              EventSK: "6502300",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "resident states that he was getting out of bed to go to his walker (he keeps it at the foot of his bed) but was very dizzy and fell over between his bed and his bedside table. denies hitting his head. resident transferred himself to his toilet, then pushed his call button when he noticed blood on his sleeve (Blood was coagulated, so staff are unsure of when the fall actually happened).",
              CreatedAt: "2023-11-10T16:54:52.390000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086956",
              EventSK: "6502300",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-10T16:54:52.390000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086967",
              EventSK: "6502300",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-10T16:54:52.377000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086954",
              EventSK: "6502300",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-10T16:54:52.390000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086969",
              EventSK: "6502300",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: false,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6506212",
        EDNoteText: "",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Karina Armenta (01/01/1900)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Karina Armenta (DOB: 01/01/1900) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 1100 and was obtained on 2022-07-15. Current SLUMS/MMSE score is 18100 and was obtained on 2022-07-15.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\nCurrent Antihypertensives: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Pain Medications: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\nPrimary Physician: Beyza Ozer on Fri, Jul 15, 2022 04:55:00\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:00:25 MST",
        ResidentFirstName: "Karina",
        ResidentLastName: "Armenta",
        ResidentSK: "2395",
        fallDetails: {
          objList: [
            {
              Answer: "Walker",
              CreatedAt: "2023-11-12T14:58:51.057000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166649",
              EventSK: "6506212",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident was in a hurry to go to dining room for lunch, when she got up in her recliner she was dizzy and continued to keep walking she fell down, she pushed call button and staff went to check on her",
              CreatedAt: "2023-11-12T14:58:51.117000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166657",
              EventSK: "6506212",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-12T14:58:51.133000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166668",
              EventSK: "6506212",
              Question: "Current Protocols",
            },
            {
              Answer: "Glasses",
              CreatedAt: "2023-11-12T14:58:51.117000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166655",
              EventSK: "6506212",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-12T14:58:51.133000Z",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166670",
              EventSK: "6506212",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: false,
        CampusName: "A Test Campus",
        DateOfFall: "2024-01-17T16:00:00Z",
        EventSK: "6711086",
        EDNoteText: "",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Martin Alwauysfalls (02/01/1930)\r\nCampus: A Test Campus\r\nEvent Date and Time: Wed, Jan 17, 2024 10:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Martin Alwauysfalls (DOB: 02/01/1930) experienced a fall on Wed, Jan 17, 2024 at 10:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is not able to stand with or without assistance. no0ne Vital signs are – T 99, P 89, R 20, B/P 120/80.\r\n\r\n\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nPolypharmacy\r\nCurrent Pain Medications: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Vitamins & Supplements: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\nElectronically Signed by Curt Boger on 2024-02-12 20:19:04 CST",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentSK: "1440477",
        fallDetails: {
          objList: [
            {
              Answer: "Walker",
              CreatedAt: "2023-11-12",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166649",
              EventSK: "6711086",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident went outside to feed the birds, he states that he lost his balance and fell in the snow, it took 3 staff to assist him to stand.",
              CreatedAt: "2023-11-12",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166657",
              EventSK: "6711086",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-12",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166668",
              EventSK: "6711086",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-12",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166655",
              EventSK: "6711086",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-12",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166670",
              EventSK: "6711086",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
    ],
  },
};

export const WithReview: Story = {
  args: {
    eventType: "Fall with Director Review",
    atceventopenevents: [
      {
        selected: true,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-01T15:00:00Z",
        EventSK: "6477493",
        EDNoteText:
          "Event Review - Fall\r\nResident's Name: Martin Alwauysfalls\r\nEvent Date and Time: Wed, Nov 01, 2023 10:00:00\r\n\r\nElectronically Signed by Curt Boger on 2024-01-12 17:04:04 CST",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Martin Alwauysfalls (02/01/1930)\r\nLocation: A Test Campus\r\nEvent Date and Time: Wed, Nov 01, 2023 10:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Martin Alwauysfalls (DOB: 02/01/1930) experienced a fall on Wed, Nov 01, 2023 at 10:00:00. EMS was notified on 2023-11-01T10:00. Resident was transported via EMS at 2023-11-01T11:00. The resident did not experience an injury. The resident did experience actual or suspected head involvement. bump to back head. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 97, P 55, R 15, B/P 120/70. Current MAHC 10 score is 9 and was obtained on 2023-04-18. Current SLUMS/MMSE score is 10.\r\n\r\n\r\nFall Summary From RTasks:\r\n\"walking to bed and fell\"\r\nWritten By: Becker, Jorin\r\nDate: Wed, Nov 01, 2023\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nThe resident has been placed on the Skin Protocol. A licensed nurse will evaluate the wound weekly until resolved.\r\nThe protocols have been entered on the residents Service Plan.\r\nLicensed Nurse will monitor weekly until skin integrity issue is resolved\r\nHead Involvement Interventions\r\nice applied\r\nPolypharmacy\r\nCurrent Vitamins & Supplements: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\nNotified:\r\nResponsible Party: erica on Wed, Nov 01, 2023 01:12:00\r\nPrimary Physician: dr Coplen on Tue, Oct 31, 2023 00:12:00\r\n\r\n\r\nElectronically Signed by Jorin Becker on 2023-11-02 10:13:56 CDT",
        ResidentFirstName: "Martin",
        ResidentLastName: "Alwauysfalls",
        ResidentSK: "1440477",
        fallDetails: {
          objList: [
            {
              Answer: "Walker",
              CreatedAt: "2023-11-01",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086247",
              EventSK: "6477493",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Sitting in his chair reaching to the floor to pick up his socks. Fell to the floor and landed on his back. Bumped head on floor.",
              CreatedAt: "2023-11-01",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086255",
              EventSK: "6477493",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-01",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086266",
              EventSK: "6477493",
              Question: "Current Protocols",
            },
            {
              Answer: "Yes",
              CreatedAt: "2023-11-01",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086253",
              EventSK: "6477493",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-01",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086268",
              EventSK: "6477493",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: true,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6510442",
        EDNoteText:
          "Nurse's Note\r\n\r\n\r\n\r\nResident's Name: Robin Byrd\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\nReview Comments:\r\nReviewed 2/26/2024.\r\n\r\nElectronically Signed by Zachary Downs on 2024-02-26 09:47:33 CST",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Robin Byrd (01/02/1940)\r\nCampus: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Robin Byrd (DOB: 01/02/1940) experienced a fall on Tue, Nov 07, 2023 at 20:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is not able to stand with or without assistance. NOne Vital signs are – T 99, P 89, R 20, B/P 120/80.\r\n\r\n\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nPolypharmacy\r\n\r\nElectronically Signed by Curt Boger on 2024-02-13 10:14:30 CST",
        ResidentFirstName: "Robin",
        ResidentLastName: "Byrd",
        ResidentSK: "2419",
        fallDetails: {
          objList: [
            {
              Answer: "gait belt",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123147",
              EventSK: "6510442",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "writer walked in to assist getting the resident up and found resident on the floor",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123155",
              EventSK: "6510442",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086266",
              EventSK: "6510442",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123153",
              EventSK: "6510442",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "63123168",
              EventSK: "6510442",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: false,
        CampusName: "A Test Campus",
        DateOfFall: "2023-11-08T02:00:00Z",
        EventSK: "6500336",
        EDNoteText:
          "Event Review - Fall\r\nResident's Name: John Doe\r\nEvent Date and Time: Tue, Nov 07, 2023 20:00:00\r\n\r\nElectronically Signed by Curt Boger on 2024-01-12 18:10:12 CST",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): John Doe (01/01/1911)\r\nLocation: A Test Campus\r\nEvent Date and Time: Tue, Nov 07, 2023 19:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that John Doe (DOB: 01/01/1911) experienced a fall on Tue, Nov 07, 2023 at 19:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 7100 and was obtained on 2024-10-09. Current SLUMS/MMSE score is 19100 and was obtained on 2024-10-09.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\nCurrent Diabetes Medications: [object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Pain Medications: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\n\r\nNotified:\r\nResponsible Party: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\nPrimary Physician: Beyza Ozer on Tue, Jan 09, 2024 04:55:00\r\n\r\n\r\nElectronically Signed by Beyza Ozer on 2024-01-10 15:49:05 MST",
        ResidentFirstName: "John",
        ResidentLastName: "Doe",
        ResidentSK: "2424",
        fallDetails: {
          objList: [
            {
              Answer: "Four Wheeled Walker",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086948",
              EventSK: "6500336",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident states that he was walking down to the front entrance to meet his son for an appointment. Resident states that he was feeling rushed and started to stutter step and was not able to recover. He denies any head involvement or pain at this time. VS: 98.6, 102, 20, 82/38 and 100% on RA, blood pressure recheck of 94/50 manually. Resident's son was here and was notified.",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086956",
              EventSK: "6500336",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086967",
              EventSK: "6500336",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086954",
              EventSK: "6500336",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-11-08",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62086969",
              EventSK: "6500336",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: false,
        CampusName: "A Test Campus",
        DateOfFall: "2023-10-09T14:00:00Z",
        EventSK: "6433762",
        EDNoteText:
          "Event Review - Fall\r\nResident's Name: Jane Doe\r\nEvent Date and Time: Mon, Oct 09, 2023 09:00:00\r\n\r\nElectronically Signed by Luke Donley on 2023-12-29 15:00:51 CST",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Jane Doe (01/01/1929)\r\nLocation: A Test Campus\r\nEvent Date and Time: Mon, Oct 09, 2023 09:00:00\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Jane Doe (DOB: 01/01/1929) experienced a fall on Mon, Oct 09, 2023 at 09:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does not have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 1. Current SLUMS/MMSE score is 1.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 1 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\n\r\nElectronically Signed by Luke Donley, LPN on 2023-10-24 09:24:24 -05:00",
        ResidentFirstName: "Jane",
        ResidentLastName: "Doe",
        ResidentSK: "3086864",
        fallDetails: {
          objList: [
            {
              Answer: "walker/cane",
              CreatedAt: "2023-10-09",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166649",
              EventSK: "6433762",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident stated she was trying to grab her remote off of her tv when she turned around to fast and lost her footing and fell and bumped her rib on the couch arm rest and then lightly hit her head on the floor.",
              CreatedAt: "2023-10-09",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166657",
              EventSK: "6433762",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-10-09",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166668",
              EventSK: "6433762",
              Question: "Current Protocols",
            },
            {
              Answer: "Yes",
              CreatedAt: "2023-10-09",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166655",
              EventSK: "6433762",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "No",
              CreatedAt: "2023-10-09",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166670",
              EventSK: "6433762",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
      {
        selected: false,
        CampusName: "A Test Campus",
        DateOfFall: "2023-10-11T14:00:00Z",
        EventSK: "6434643",
        EDNoteText:
          "Event Review - Fall\r\nResident's Name: Humphrey Bogart\r\nEvent Date and Time: Wed, Oct 11, 2023 09:00:00\r\nReview Comments:\r\nno comments needed\r\n\r\nElectronically Signed by Jorin Becker on 2023-11-02 10:14:57 CDT",
        NurseNoteText:
          "Nurse's Note\r\nResident's Name (DOB): Humphrey Bogart (12/25/1899)\r\nLocation: A Test Campus\r\nEvent Date and Time: Wed, Oct 11, 2023 09:00:00\r\n\r\nThis resident has been scheduled with the medical director.\r\n\r\n\r\n\r\nThis writer was notified via the Access to Care Dashboard that Humphrey Bogart (DOB: 12/25/1899) experienced a fall on Wed, Oct 11, 2023 at 09:00:00. The resident did not experience an injury. The resident did not experience actual or suspected head involvement. The resident does have a diagnosis of hypertension. The resident does not have a diagnosis of cardiac arrhythmia. The resident is able to stand with or without assistance. Vital signs are – T 100, P 100, R 100, B/P 100. Current MAHC 10 score is 7 and was obtained on 2023-03-22. Current SLUMS/MMSE score is 10 and was obtained on 2022-04-24.\r\n\r\n\r\nIncreased Susceptibility to Falls:\r\nThe resident has had 2 falls in the last 90 days.\r\nActions Taken\r\nWill complete focused assessment and upgrade the plan of care as appropriate\r\nWill update the plan of care with interventions to minimize falls.\r\nPolypharmacy\r\nCurrent Diabetes Medications: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Antipsychotics: [object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\nCurrent Pain Medications: [object Object],[object Object],[object Object]\r\nPhysician Recommendation: __________________________________________\r\n___________________________________________________________________\r\n\r\nElectronically Signed by Luke Donley, LPN on 2023-10-25 19:54:27 CDT",
        ResidentFirstName: "Humphrey",
        ResidentLastName: "Bogart",
        ResidentSK: "7904",
        fallDetails: {
          objList: [
            {
              Answer: "wheelchair",
              CreatedAt: "2023-10-11",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166649",
              EventSK: "6434643",
              Question: "Assistive device utilized by resident:",
            },
            {
              Answer:
                "Resident was trying to get up off toilet to get into wheelchair. Laying on his back. Wheelchair on ground next to him. Clear. Sweatpants and no shirt.",
              CreatedAt: "2023-10-11",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166657",
              EventSK: "6434643",
              Question: "Brief narrative of the incident",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-10-11",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166668",
              EventSK: "6434643",
              Question: "Current Protocols",
            },
            {
              Answer: "No",
              CreatedAt: "2023-10-11",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166655",
              EventSK: "6434643",
              Question: "Did the resident have glasses and/or hearing aids on?",
            },
            {
              Answer: "*Not provided*",
              CreatedAt: "2023-10-11",
              CreatedBy: "Smith, Brandy",
              DetailSK: "62166670",
              EventSK: "6434643",
              Question:
                "Did the resident require hospitalization related to the fall? If yes, why?",
            },
          ],
        },
      },
    ],
  },
};
