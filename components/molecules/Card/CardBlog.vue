<template>
  <div
    class="flex flex-col justify-between border-2 shadow rounded-lg p-5 hover:border-second hover:border-2 w-full transition duration-300"
  >
    <div
      class="flex md:items-center justify-between flex-col-reverse md:flex-row"
    >
      <div class="space-y-2 mt-4 overflow-hidden break-all pr-8">
          <p>Agus Setiawan</p>
        <div class="">
          <h2 class="text-2xl font-bold">What is LoremIpsum!ahodhawodhuj fdergjdprj grpdgjdrigj;odirhg s;fkspoejfspefjsie fkrpwojeowjfwjfoiwf</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div class="pt-2 flex items-center gap-6">
          <p>14 minutes ago</p>
          <div class="flex items-center gap-1">
            <IconHandHeart  :size="16" />
            <p>100k</p>
          </div>
          <div class="flex items-center gap-1">
            <IconMessageCircle :size="16" />
            <p>100k</p>
          </div>
        </div>
      </div>
      <div class="avatar">
        <div class="w-24 rounded">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>
