<template>
  <!-- Hero Section -->
  <div
    id="hero"
    class="relative bg-[url('@/assets/images/intro/intro.jpg')] bg-center bg-cover w-full h-auto flex justify-center items-center overflow-hidden"
  >
    <swiper
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :navigation="true"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :loop="true"
      :effect="'fade'"
      :modules="modules"
      class="w-full max-w-6xl m-32 rounded-3xl"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="flex flex-col md:flex-row items-center justify-center bg-second/50 backdrop-blur-md  p-8 md:p-16 rounded-3xl shadow-2xl transform transition-all min-h-[500px] md:min-h-[600px]"
      >
        <!-- Left Side -->
        <div
          class="text-gray-900 flex select-none flex-col items-center md:items-start text-center md:text-left max-w-lg mb-8 md:mb-0"
        >
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            {{ slide.title }}
          </h1>
          <p class="text-lg md:text-xl text-gray-700 mt-4 md:mt-6">{{ slide.description }}</p>
          <div class="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-6">
            <RouterLink
              class="px-6 py-3 md:px-8 md:py-4 border border-primary rounded-full text-primary transition-all hover:bg-primary hover:text-second shadow-lg text-lg"
              to="/how-can-i-get-visa"
              >Daha Fazla →</RouterLink
            >
            <RouterLink
              class="px-6 py-3 md:px-8 md:py-4 bg-primary text-second rounded-full flex items-center justify-center transition-all hover:bg-second hover:text-primary shadow-lg text-lg"
              to="/order-visa"
            >
              <ion-icon name="arrow-forward-outline" class="mr-2"></ion-icon>
              {{ slide.buttonText }}
            </RouterLink>
          </div>
        </div>
        <!-- Right Side -->
        <div
          class="relative sm:flex hidden w-full md:w-[450px] h-[400px] md:h-[450px] bg-cover bg-center rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

const slides = [
  {
    title: 'Hayallerinizi Gerçeğe Dönüştürün',
    description: 'Seyahat etmek hiç bu kadar kolay olmamıştı. Yeni deneyimlere hazır olun!',
    buttonText: 'Hemen Katıl',
    image: new URL('@/assets/images/intro/intro_image.png', import.meta.url).href,
  },
  {
    title: 'Vize İşlemleri Artık Çok Daha Kolay',
    description: 'Hızlı ve güvenilir vize çözümleriyle dünyayı keşfedin.',
    buttonText: 'Başvur',
    image: new URL('@/assets/images/intro/intro_image1.png', import.meta.url).href,
  },
  {
    title: 'Keşfet, Öğren, Büyü',
    description: 'Dünyanın dört bir yanına seyahat ederek en guzel yerlerde hayatını zenginleştir.',
    buttonText: 'Keşfet',
    image: new URL('@/assets/images/intro/intro_image2.png', import.meta.url).href,
  },
]

const modules = [Navigation, Pagination, Autoplay, EffectFade]
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  padding: 20px;
}

.swiper-slide div {
  background-size: cover;
  background-position: center;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
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

.swiper-pagination-bullet-active {
  background: #a86332;
  opacity: 1;
}

@media (max-width: 768px) {
  .swiper-slide {
    flex-direction: column;
    padding: 16px;
    min-height: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
}
</style>
