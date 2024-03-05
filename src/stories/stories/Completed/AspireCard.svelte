<script>
  //AspireCard.svelte
  //Card component

  //uses tailwindcss classes
  export let size = "";

  export let residentCard = false;
</script>

{#if residentCard === true}
  <div class="w-full">
    <div
      class="card
        shadow-xl
        p-4
        bg-white
        max-h-[73vh]
        scroll
        overflow-y-auto
        !rounded-none"
    >
      <div class="card-body !p-0">
        <slot />
        <!-- <AspireResidentBox
            bind:residentObj={selectedEvent.residentObj}
          /> -->
      </div>
    </div>
  </div>
{:else}
  <div class="card shadow-xl p-4 mt-2 mb-2 !rounded-none w-full {size}">
    <div class="card-body !p-0">
      <slot />
      <!-- <img
        src="https://th.bing.com/th/id/R.e08e4d5703a31384bb9e1654290d8e66?rik=D6AqAXcFLT28cQ&riu=http%3a%2f%2fwww.lyonsdendesign.co.uk%2fwp-content%2fuploads%2f2013%2f08%2ffeatures.jpg&ehk=B85e6n8zNM2Yc8k5TdBd0X0UqhkU5ftOdS73aB8L398%3d&risl=&pid=ImgRaw&r=0"
        alt="placeholder"
        class="w-full h-40 object-cover"
      /> -->
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
