<script setup>
import SponsorUtil from '@/utils/SponsorUtil.vue'
</script>
<template>
  <!-- intro start  -->
  <div id="intro" class="md:my-18 w-full flex justify-center items-center bg-second">
    <div
      class="flex justify-center items-center shadow-2xl sm:flex-row flex-col w-full max-w-[98%] my-18 mx-5 rounded-4xl md:h-[60vh] min-h-[60vh] gap-8 bg-primary bg-[url('@/assets/images/textures/intro/intro.png')] bg-center bg-cover"
    >
      <!-- left side  -->
      <div class="text-second flex flex-col">
        <div>
          <h1 class="text-4xl select-none my-10 text-left tracking-widest leading-11">
            Visa Made Easy <br />
            Dreams Made <br />
            Possible
          </h1>
        </div>
        <!-- buttons  -->
        <div class="flex justify-around">
          <RouterLink
            class="p-4 border border-second rounded-full transition-all hover:bg-primary hover:text-second"
            to="/"
            >Read More -></RouterLink
          >
          <RouterLink
            class="p-4 rounded-full flex items-center justify-center transition-all"
            to="/"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon> Order</RouterLink
          >
        </div>
      </div>
      <!-- right side  -->
      <div class="hidden items-end h-full sm:flex">
        <div
          class="w-82 h-96 bg-[url('@/assets/images/textures/intro/intro_image.png')] bg-center bg-cover"
        ></div>
      </div>
    </div>
  </div>

  <!-- sponsor start -->
  <SponsorUtil />
</template>
