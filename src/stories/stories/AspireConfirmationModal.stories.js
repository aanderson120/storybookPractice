import AspireConfirmationModal from './AspireConfirmationModal.svelte';

export default{
    title: "Confirmation Modal",
    component: AspireConfirmationModal,
    tags: ["autodocs"],
};

export const Default = {
    args: {
        submitHandler:{},
        confirmationMessage: "Are you sure you want to do this?",
        loading: false,
        errors: {},
        successMessage: "",
    },
};