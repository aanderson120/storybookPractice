//AspireMetricHistory.stories.ts
//Story for AspireMetricHistory component
import type { Meta, StoryObj } from "@storybook/svelte";

import AspireMetricHistory from "./AspireMetricHistory.svelte";

//creates documentation for storybook. run "npm run storybook" to see stories
const meta = {
  title: "AspireMetricHistory",
  component: AspireMetricHistory,
  tags: ["autodocs"],
} satisfies Meta<AspireMetricHistory>;

export default meta;
type Story = StoryObj<AspireMetricHistory>;

//AspireMetricHistory variants and args needed to display them
export const Default: Story = {
  args: {
    metricType: "",
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
};
