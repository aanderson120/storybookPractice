<script>
  export let label = "";
  export let link = "";
  //   export let overdueEvents = 0;
  //   export let totalEvents = 0;
</script>

<li class="contents m-1">
  <a
    href={link}
    class="
      group-hover:!visible
      text-black
      d-flex
      items-center
      w-full
      p-2
      transition
      duration-75
      rounded-lg
      group
      hover:bg-[#838383]
      font-normal
      hover:text-white"
    >{label}
    <!-- TODO: Connect to event tasks 
    <span
      class="
        absolute
        right-2
        inline-flex
        items-center
        justify-center
        w-2
        h-2
        p-2
        ms-2
        text-sm
        text-white
        bg-[#D42142]
        rounded-full">{overdueEvents}</span
    >
    <span
      class="
        invisible
        group-hover:!visible
        absolute
        right-2
        inline-flex
        items-center
        justify-center
        w-2
        h-2
        p-2
        ms-2
        text-sm
        text-white
        bg-success
        rounded-full">{totalEvents}</span
    > -->
  </a>
</li>

<style>
  .d-flex {
    display: flex !important;
  }
</style>
