<script>
  //AspireHeader.svelte
  //Reusable header component

  export let label = "";
  export let backgroundColor = "bg-[#223FAB]";
  export let primary = true;

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
  $: textColor = backgroundColor === "transparent" ? "!text-black" : "";
  $: mode = primary ? "primary" : "secondary";
</script>

<h1
  class={["rounded-xl w-full text-center text-xl p-2", textColor, mode].join(
    " "
  )}
  {style}
>
  <span class="px-4" style="text-wrap: nowrap;">{label}</span>
  <br />
</h1>
<br />

<style>
  .primary {
    color: white;
    background-color: #223fab;
  }
  .secondary {
    color: white;
    background-color: #6600cc;
  }
</style>
