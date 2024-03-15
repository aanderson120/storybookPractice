<script>
  // AspireDisplayInputItems.svelte
  // From a container, render input fields for all the objects. They are assumed to be
  // AspireUserInputItem class.
  //
  // Please add other component types as needed.
  import AspireCheckbox from "./AspireCheckbox.svelte";
  import AspireTextInput from "./AspireTextInput.svelte";

  export let callbackOnSelectFn = () => {};
  export let filterFn;

  // The list of objects
  export let itemSet = [
    {
      formType: "",
      value: false || "",
      promptText: "",
      id: "",
    },
  ];
</script>

{#if itemSet && itemSet.length > 0}
  {#each itemSet as item}
    {#if item.formType === "checkBox" && !item.promptText.includes("*None*") && filterFn(item)}
      <AspireCheckbox
        bind:isChecked={item.value}
        {callbackOnSelectFn}
        label={item.promptText}
        id={item.id}
      />
    {/if}
    {#if item.formType === "textInput"}
      <AspireTextInput
        bind:value={item.value}
        placeholder={item.promptText}
        size="50"
        id={item.id}
      />
    {/if}
  {/each}
{/if}
