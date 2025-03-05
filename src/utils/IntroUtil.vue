<template>
  <!-- intro start  -->
  <div id="intro" class="md:my-18 w-full flex justify-center items-center bg-second">
    <swiper
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="flex justify-center items-center"
    >
      <swiper-slide
        class="flex justify-center items-center sm:flex-row flex-col w-full max-w-[98%] rounded-4xl md:h-[60vh] min-h-[60vh]"
      >
        <div
          class="flex justify-center items-center shadow-2xl sm:flex-row flex-col w-full max-w-[98%] my-18 mx-5 rounded-4xl md:h-[60vh] min-h-[60vh] gap-8 bg-primary bg-[url('@/assets/images/textures/intro/intro.png')] bg-center bg-cover"
        >
          <!-- left side  -->
          <div class="text-second flex flex-col">
            <div>
              <h1
                class="text-4xl w-72 select-none my-10 mx-10 text-left tracking-widest leading-11"
              >
                Hayatınızda Yeni Başlangıçlar Yapmanın Tam Zamanı<br />
              </h1>
            </div>
            <!-- buttons  -->
            <div class="flex justify-around">
              <RouterLink
                class="p-4 border border-second rounded-full transition-all hover:bg-primary hover:text-second"
                to="/"
                >Daha fazla -></RouterLink
              >
              <RouterLink
                class="p-4 rounded-full flex items-center justify-center transition-all"
                to="/"
              >
                <ion-icon name="arrow-forward-outline"></ion-icon> Hemen Başvur</RouterLink
              >
            </div>
          </div>
          <!-- right side  -->
          <div class="flex items-end h-full">
            <div
              class="w-82 h-96 bg-[url('@/assets/images/textures/intro/intro_image.png')] bg-center bg-cover"
            ></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        class="flex justify-center items-center sm:flex-row flex-col w-full max-w-[98%] rounded-4xl md:h-[60vh] min-h-[60vh]"
      >
        <div
          class="flex justify-center items-center shadow-2xl sm:flex-row flex-col w-full max-w-[98%] my-18 mx-5 rounded-4xl md:h-[60vh] min-h-[60vh] gap-8 bg-primary bg-[url('@/assets/images/textures/intro/intro.png')] bg-center bg-cover"
        >
          <!-- left side  -->
          <div class="text-second flex flex-col">
            <div>
              <h1
                class="text-4xl w-72 select-none my-10 mx-10 text-left tracking-widest leading-11"
              >
                Vize almak bu kadar <br />
                kolay olmamıştı
              </h1>
            </div>
            <!-- buttons  -->
            <div class="flex justify-around">
              <RouterLink
                class="p-4 border border-second rounded-full transition-all hover:bg-primary hover:text-second"
                to="/"
                >Daha fazla -></RouterLink
              >
              <RouterLink
                class="p-4 rounded-full flex items-center justify-center transition-all"
                to="/"
              >
                <ion-icon name="arrow-forward-outline"></ion-icon> Hemen Başvur</RouterLink
              >
            </div>
          </div>
          <!-- right side  -->
          <div class="flex items-end h-full">
            <div
              class="w-82 h-96 bg-[url('@/assets/images/textures/intro/intro_image1.png')] bg-center bg-cover"
            ></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        class="flex justify-center items-center sm:flex-row flex-col w-full max-w-[98%] rounded-4xl md:h-[60vh] min-h-[60vh]"
      >
        <div
          class="flex justify-center items-center shadow-2xl sm:flex-row flex-col w-full max-w-[98%] my-18 mx-5 rounded-4xl md:h-[60vh] min-h-[60vh] gap-8 bg-primary bg-[url('@/assets/images/textures/intro/intro.png')] bg-center bg-cover"
        >
          <!-- left side  -->
          <div class="text-second flex flex-col">
            <div>
              <h1
                class="text-4xl w-72 mx-10 select-none my-10 text-left tracking-widest leading-11"
              >
                Hayallerinizi Gezerek<br />
                Yaşayın
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
          <div class="flex items-end h-full">
            <div
              class="w-82 h-96 bg-[url('@/assets/images/textures/intro/intro_image2.png')] bg-center bg-cover"
            ></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    }
  },
}
</script>
