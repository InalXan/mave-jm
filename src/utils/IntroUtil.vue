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
      class="flex justify-center items-center w-full"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="flex justify-center items-center sm:flex-row flex-col w-full max-w-[98%] rounded-4xl md:h-[60vh] min-h-[60vh]"
      >
        <div
          class="flex justify-center items-center shadow-2xl sm:flex-row flex-col w-full max-w-[98%] my-18 mx-5 rounded-4xl md:h-[60vh] min-h-[60vh] gap-8 bg-primary bg-[url('@/assets/images/textures/intro/intro.png')] bg-center bg-cover"
        >
          <!-- left side  -->
          <div class="text-second flex flex-col justify-center items-center sm:items-start">
            <div>
              <h1
                class="text-4xl w-72 select-none my-10 mx-10 text-left tracking-widest leading-11"
              >
                {{ slide.title }}
              </h1>
            </div>
            <!-- buttons  -->
            <div class="flex justify-around w-full sm:w-auto">
              <RouterLink
                class="p-4 border border-second rounded-full transition-all hover:bg-primary hover:text-second"
                to="/"
                >Daha fazla -></RouterLink
              >
              <RouterLink
                class="p-4 rounded-full flex items-center justify-center transition-all bg-second text-primary hover:bg-primary hover:text-second"
                to="/"
              >
                <ion-icon name="arrow-forward-outline"></ion-icon> {{ slide.buttonText }}</RouterLink
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
    const slides = [
      {
        title: 'Hayatınızda Yeni Başlangıçlar Yapmanın Tam Zamanı',
        buttonText: 'Hemen Başvur',
        image: 'intro_image.png',
      },
      {
        title: 'Vize almak bu kadar kolay olmamıştı',
        buttonText: 'Hemen Başvur',
        image: 'intro_image2.png',
      },
      {
        title: 'Hayallerinizi Gezerek Yaşayın',
        buttonText: 'Order',
        image: 'intro_image3.png',
      },
    ]

    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      slides,
    }
  },
}
</script>

<style scoped>
#intro {
  background-color: #f5f5f5;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}

.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: 1;
}
</style>