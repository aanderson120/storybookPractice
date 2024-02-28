<script>
  //AspireTheme.svelte

  import AspireColumn from "./Completed/AspireColumn.svelte";
  import AspireRow from "./Completed/AspireRow.svelte";

  //Visual of colors used
  export let mode = "light" || "dark";
</script>

{#if mode === "light"}
  <div class="card !rounded-none bg-[#F3F3F3] p-4">
    <div class="card-body">
      <AspireRow>
        <AspireColumn size={"6"}>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#223fab] text-white"}>
              #223FAB
            </div>
            <p class="text-black">Primary Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#6600cc] text-white"}>
              #6600CC
            </div>
            <p class="text-black">Secondary Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#22ab7a] text-white"}>
              #22AB7A
            </div>
            <p class="text-black">Accent Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#e6e6e6] text-black"}>
              #E6E6E6
            </div>
            <p class="text-black">Neutral Color</p>
          </div>
        </AspireColumn>
        <AspireColumn size={"6"}>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#0078a8] text-white"}>
              #0078A8
            </div>
            <p class="text-black">Info Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#539b4b] text-white"}>
              #539B4B
            </div>
            <p class="text-black">Sucess Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#b38000] text-white"}>
              #B38000
            </div>
            <p class="text-black">Warning Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#d42142] text-white"}>
              #D42142
            </div>
            <p class="text-black">Warning Color</p>
          </div>
          <div>
            <p class="flex flex-row-reverse float-right w-full text-black">
              #F3F3F3
            </p>
            <p class="flex flex-row-reverse float-right w-full text-black">
              Base-100 Color
            </p>
          </div>
        </AspireColumn>
      </AspireRow>
    </div>
  </div>
{:else}
  <div class="card !rounded-none bg-[#181A1B] p-4">
    <div class="card-body">
      <AspireRow>
        <AspireColumn size={"6"}>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#223fab] text-white"}>
              #223FAB
            </div>
            <p>Primary Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#6600cc] text-white"}>
              #6600CC
            </div>
            <p>Secondary Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#22ab7a] text-white"}>
              #22AB7A
            </div>
            <p>Accent Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#26292B] text-white"}>
              #26292B
            </div>
            <p>Neutral Color</p>
          </div>
        </AspireColumn>
        <AspireColumn size={"6"}>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#0078a8] text-white"}>
              #0078A8
            </div>
            <p>Info Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#539b4b] text-white"}>
              #539B4B
            </div>
            <p>Sucess Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#b38000] text-white"}>
              #B38000
            </div>
            <p>Warning Color</p>
          </div>
          <div class="mb-2">
            <div class={"btn border-none !shadow-none bg-[#d42142] text-white"}>
              #D42142
            </div>
            <p>Warning Color</p>
            <div>
              <p class="flex flex-row-reverse float-right w-full">#181A1B</p>
              <p class="flex flex-row-reverse float-right w-full">
                Base-100 Color
              </p>
            </div>
          </div></AspireColumn
        >
      </AspireRow>
    </div>
  </div>
{/if}
