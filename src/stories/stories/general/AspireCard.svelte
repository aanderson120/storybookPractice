<script>
  //AspireCard.svelte
  //Card component

  //uses tailwindcss classes
  export let size = "";
  export let asideCard = false;

  //Only for story example use DO NOT use
  export let story = false;
</script>

{#if asideCard === true}
  <div class="w-full">
    <div
      class="card
        shadowl-xl
        p-4
        mb-2
        bg-white
        overflow-y-auto
       !rounded-none"
    >
      <div class="card-body !p-0">
        <slot />
        {#if story === true}
          <img
            src="https://th.bing.com/th/id/OIP.P5mqMjEyAToHSYrsCIDJcQAAAA?rs=1&pid=ImgDetMain"
            alt="placeholder"
          />
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div
    class="card shadow-xl p-4 mt-2 mb-2 !rounded-none w-full bg-white {size}"
  >
    <div class="card-body !p-0">
      <slot />
      {#if story === true}
        <img
          src="https://th.bing.com/th/id/R.e08e4d5703a31384bb9e1654290d8e66?rik=D6AqAXcFLT28cQ&riu=http%3a%2f%2fwww.lyonsdendesign.co.uk%2fwp-content%2fuploads%2f2013%2f08%2ffeatures.jpg&ehk=B85e6n8zNM2Yc8k5TdBd0X0UqhkU5ftOdS73aB8L398%3d&risl=&pid=ImgRaw&r=0"
          alt="placeholder"
          class="w-full h-40 object-cover"
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  .scroll {
    overflow-y: auto;
  }
  .scroll::-webkit-scrollbar {
    width: 10px;
  }

  .scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #cccaca;
    border-radius: 1rem;
  }
</style>
