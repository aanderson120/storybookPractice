<script>
  //AspireRadioSelect. Pass in the list of items, otherwise it defaults to
  // Options "Yes" and "No", with boolean return values of true and false.
  // Options on radio button fields are mutually exclusive.
  //

  export let direction = "row" || "col";
  // selected contains the result
  let value;
  if (value === false) {
    value = undefined;
  }
  // label must be unique. It will be used in the name value of the
  // input field.
  let label;
  // required defaults to false. If it is true on input, the field
  // is marked required and a red '*' is attached at the front of the
  // question text.
  export let required = false;

  //   export let onChangeFunction;

  // items is the list of items for the radio buttons. The name field
  // will be displayed with a button, and the value is the result of selecting
  // that option. Default is a yes/no field returning true or false boolean.

  export let items = [{ name: "", value: "" }];
</script>

<!-- Create a labled option for each item of input.-->
<div class="d-flex flex-{direction}">
  {#each items as item}
    <label class="mr-2">
      <!-- Name must be the same for the options generated to identify with the same input field.
             Use the label passed in.-->
      <input
        class="max-w-[90%]"
        type="radio"
        name={label}
        {required}
        bind:group={value}
        value={item.value}
      />
      {item.name + "   "}
    </label>
  {/each}
</div>

<style>
  .d-flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
</style>
