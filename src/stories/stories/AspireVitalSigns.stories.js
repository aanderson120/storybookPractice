//AspireVitalSigns.stories.js
//Vital Signs component for various event types

import AspireVitalSigns from "./AspireVitalSigns.svelte";

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
  title: "Vital Signs",
  component: AspireVitalSigns,
  tags: ["autodocs"],
};

//Vital Signs variants and args needed to display them
//Base vital signs to display
export const Default = {
  args: {
    label: "Default",
    eventTemp:"",
    eventPulse:"",
    eventRespiration: "",
    eventBP: "",
  },
};

//Fall Mitigation Event
export const FallMitigation = {
  args: {
    label: "Fall Mitigation",
    eventType: "fallmitigation",
    eventTemp:"",
    eventPulse:"",
    eventRespiration: "",
    eventBP: "",
  },
};

//Glucose Event
export const Glucose = {
  args: {
    label: "Glucose",
    eventType: "glucose",
    eventTemp:"",
    eventPulse:"",
    eventRespiration: "",
    eventBP: "",
    O2Sat: "",
    glucose: "",
    a1C: "",
  },
};

//Fall Event
export const Falls = {
    args: {
      label: "Falls",
      eventType: "falls",
      eventTemp:"",
      eventPulse:"",
      eventRespiration: "",
      eventBP: "",
      MAHC10Score: "",
      MAHC10ScoreDate: "",
      SLUMSScore: "",
      SLUMSScoreDate: "",
    },
  };

  //General Decline Event
  export const GeneralDecline = {
    args: {
      label: "General Decline",
      eventType: "generalDecline",
      eventTemp:"",
      eventPulse:"",
      eventRespiration: "",
      eventBP: "",
      eventLungSounds: "",
      eventOxygenSaturation: "",
    },
  };

  //CHF Event
  export const CHF = {
    args: {
      label: "CHF",
      eventType: "chf",
      eventTemp:"",
      eventPulse:"",
      eventRespiration: "",
      eventBP: "",
      eventLungSounds: "",
      eventOxygenSaturation: "",
    },
  };
