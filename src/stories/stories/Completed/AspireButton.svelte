<script>
  //AspireButton.svelte
  //Reusable button component

  export let disabled = false;
  export let flat = false;
  export let border = false;
  export let id = "buttona";
  export let clickFn;
  // hoverText will appear on mouse-over.
  export let hoverText = "";
  function handleClick(id) {
    if (clickFn) {
      clickFn(id);
    }
  }
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = true;
  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;
  /**
   * @type {'icon' |'small' | 'medium' | 'large' | 'full'} How large should the button be?
   */
  export let size = "medium";
  /**
   * @type {string} Button contents
   */
  export let label;

  $: mode = primary ? "primary" : "secondary";
  $: bordered = border ? "border" : "border-none";
  $: shadow = flat ? "!shadow-none" : "";

  //Allows for transparent button and automatically changes text to black
  $: style = backgroundColor
    ? `background-color: ${backgroundColor} !important`
    : "";
  $: textColor = backgroundColor === "transparent" ? "!text-black" : "";
</script>

<button
  type="button"
  class={["btn", `${size}`, `${textColor}`, mode, bordered, shadow].join(" ")}
  title={hoverText}
  {style}
  {id}
  on:click={() => handleClick(id)}
  {disabled}
>
  {label}
</button>

<style>
  .btn {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: var(--rounded-btn, 0.5rem);
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    line-height: 1em;
    min-height: 3rem;
    font-weight: 600;
    border-width: var(--border-btn, 1px);
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
    margin: 0.375rem;
    word-wrap: break-word;
  }
  .primary {
    color: white;
    background-color: #4285f4 !important;
  }
  .primary:hover,
  .primary:active {
    color: white;
    background-color: #223fab !important;
  }
  .secondary {
    color: white;
    background-color: #ad7ae0 !important;
  }
  .secondary:hover,
  .secondary:active {
    background-color: #6600cc !important;
  }
  .icon {
    background-color: transparent !important;
    color: black;
    height: 30px;
    width: 30px;
    border-radius: 4px;
  }
  .icon:hover {
    border: none !important;
  }
  .small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .large {
    font-size: 16px;
    padding: 12px 24px;
  }
  .full {
    justify-content: center;
    width: 100%;
  }
  .flat {
    box-shadow: none !important;
  }
  .border {
    border: 2px solid #cfd8dc !important;
  }
</style>
