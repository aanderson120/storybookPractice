//AspireEvent.stories.ts
//Component for event layout
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireEvent from "./AspireEvent.svelte";

const meta = {
  title: "Event",
  component: AspireEvent,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<AspireEvent>;

export default meta;
type Story = StoryObj<AspireEvent>;

export const Falls: Story = {
  args: {
    event: "Falls",
    allCustomers: [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }],
    allCampuses: [
      { displayVal: "A Test Campus" },
      { displayVal: "Alexandria" },
      { displayVal: "Baxter" },
      { displayVal: "Belgrade" },
      { displayVal: "Billings" },
    ],
    atceventopenevents: [
      {
        displayVal: "Martin Alwauysfalls",
        EventSK: "6156445",
        ResidentSK: "4060123",
        ResidentLastName: "Alwauysfalls",
        ResidentFirstName: "Martin",
        ResidentDOB: "1930-02-01",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
      {
        displayVal: "Betty Boop",
        EventSK: "6156451",
        ResidentSK: "2405",
        ResidentLastName: "Boop",
        ResidentFirstName: "Betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
    ],
    selectedEvent: {},
    card2Header: "Summary from RTasks",
    card3Header: "Notifications",
  },
};

export const FallMitigation: Story = {
  args: {
    event: "Fall Reduction and Mitigation",
    allCustomers: [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }],
    allCampuses: [
      { displayVal: "A Test Campus" },
      { displayVal: "Alexandria" },
      { displayVal: "Baxter" },
      { displayVal: "Belgrade" },
      { displayVal: "Billings" },
    ],
    atceventopenevents: [
      {
        displayVal: "Jimmy Barron",
        EventSK: "6156445",
        ResidentSK: "4060123",
        ResidentLastName: "Barron",
        ResidentFirstName: "Jimmy",
        ResidentDOB: "01/01/1900",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
      {
        displayVal: "Betty Boop",
        EventSK: "6156451",
        ResidentSK: "2405",
        ResidentLastName: "Boop",
        ResidentFirstName: "Betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
    ],
    selectedEvent: {},
    card3Header: "Diagnosis History",
  },
};

export const Glucose: Story = {
  args: {
    event: "Glucose",
    allCustomers: [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }],
    allCampuses: [
      { displayVal: "A Test Campus" },
      { displayVal: "Alexandria" },
      { displayVal: "Baxter" },
      { displayVal: "Belgrade" },
      { displayVal: "Billings" },
    ],
    atceventopenevents: [
      {
        displayVal: "Jimmy Barron",
        EventSK: "6156445",
        ResidentSK: "4060123",
        ResidentLastName: "Barron",
        ResidentFirstName: "Jimmy",
        ResidentDOB: "01/01/1900",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
      {
        displayVal: "Betty Boop",
        EventSK: "6156451",
        ResidentSK: "2405",
        ResidentLastName: "Boop",
        ResidentFirstName: "Betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
    ],
    selectedEvent: {},
    card3Header: "Diagnosis History",
  },
};

export const CHF: Story = {
  args: {
    event: "CHF",
    allCustomers: [{ displayVal: "Diamond" }, { displayVal: "Edgewood" }],
    allCampuses: [
      { displayVal: "A Test Campus" },
      { displayVal: "Alexandria" },
      { displayVal: "Baxter" },
      { displayVal: "Belgrade" },
      { displayVal: "Billings" },
    ],
    atceventopenevents: [
      {
        displayVal: "Jimmy Barron",
        EventSK: "6156445",
        ResidentSK: "4060123",
        ResidentLastName: "Barron",
        ResidentFirstName: "Jimmy",
        ResidentDOB: "01/01/1900",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
      {
        displayVal: "Betty Boop",
        EventSK: "6156451",
        ResidentSK: "2405",
        ResidentLastName: "Boop",
        ResidentFirstName: "Betty",
        ResidentDOB: "02/11/1930",
        DateOfFall: "2023-06-15T21:00:00Z",
        CampusName: "A Test Campus",
        residentObj: {
          BradenScore: "-1",
          CampusId: "RTasks2",
          CampusName: "A Test Campus",
          CareStatus: "Active",
          CodeStatus: "DNR",
          DateOfAdmission: "2023-02-01",
          Diagnoses: "chronic pain syndrome",
          Diet: "Portions, Large",
          EmailSent: false,
          FoodAllergies: "Lactose, Apples",
          Gender: "Male",
          Height: "5' 10",
          MAHC10Score: "9",
          MaritalStatus: "married",
          MedicationAllergies: "Lisinopril (cough), Keflex (rash)",
          Nickname: "*not provided*",
          OtherAllergies: "Environmental",
          Phone: "2187238905",
          Photo:
            "https://aspireci.file.core.windows.net/images/residents/f3c4157a-d088-11ee-b693-0242ac1b000215365.jpg",
          PrimaryProvider: "Dr. Smith",
          ProductLine: "Assisted Living",
          Religion: "Lutheran",
          ResidentDOB: "1930-02-01",
          ResidentFirstName: "Martin",
          ResidentLastName: "Alwauysfalls",
          ResidentPK: "1440477",
          SLUMsScore: "-1",
          UnitNumber: "310",
        },
      },
    ],
    selectedEvent: {},
    card1Header: "Vitals Out of Range",
    card3Header: "Diagnosis History",
  },
};