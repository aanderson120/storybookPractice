//AspireDatePicker.stories.js
//Date picker component story
import AspireDatePicker from "./AspireDatePicker.svelte"

//Creates documentation for storybook. run "npm run storybook" to see stories
export default {
    title: "Date Picker",
    component: AspireDatePicker,
    tags:["autodocs"],
}

export const Default = {
    args: {
        id: "selectDate",
        label: "Select Date",
        dateValue:""
    }
}