<script>
  //AspireCol.svelte
  //Column component to be used with a grid system
  
  // className = css class to tack onto the div for the column
  // size= size to use on the column.
  // margin1 - margin in pixels between columns. Default is 3.
  //
  export let margin1 = "px-3";
  export let className = "";
  export let backgroundColor = undefined;
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
  /**
   * @type {'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'} How large should the column be?
   */
  export let size;
</script>

<div
  class={[
    "flex-wrap relative !d-flex",
    `${margin1}`,
    `${size}`,
    `${className}`,
  ].join(" ")}
  {style}
>
  <slot />
</div>

<style>
  .\31 {
    flex: 0 0 8.3%;
  }
  .\32 {
    flex: 0 0 16.6%;
  }
  .\33 {
    flex: 0 0 25%;
  }
  .\34 {
    flex: 0 0 33.3%;
  }
  .\35 {
    flex: 0 0 41.6%;
  }
  .\36 {
    flex: 0 0 50%;
  }
  .\37 {
    flex: 0 0 58.3%;
  }
  .\38 {
    flex: 0 0 66.6%;
  }
  .\39 {
    flex: 0 0 75%;
  }
  .\0000310 {
    flex: 0 0 83.3%;
  }
  .\0000311 {
    flex: 0 0 91.6%;
  }
  .\0000312 {
    flex: 0 0 100%;
  }
</style>
